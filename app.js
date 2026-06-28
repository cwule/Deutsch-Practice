const STORAGE_KEY = "daf-reading-guard-state";

const defaultState = {
  assignments: [
    {
      id: crypto.randomUUID(),
      code: "RHEIN1",
      title: "Der Rhein und seine Städte",
      passage:
        "Der Rhein ist einer der wichtigsten Fluesse Europas. Er beginnt in den Alpen und fliesst durch die Schweiz, Frankreich, Deutschland und die Niederlande.\n\nViele deutsche Staedte liegen am Rhein. In Koeln steht der beruehmte Dom nur wenige Schritte vom Fluss entfernt. In Mainz und Koblenz sieht man, wie Handel, Geschichte und Landschaft zusammengehoeren.\n\nFuer viele Menschen ist der Rhein nicht nur ein Verkehrsweg. Er ist auch ein Ort fuer Spaziergaenge, Ausfluege und Geschichten. Besonders im Sommer sitzen Familien und Freunde am Ufer und beobachten die Schiffe.",
      timeLimit: 20,
      passageMode: "protected",
      createdAt: new Date().toISOString(),
      questions: [
        {
          id: crypto.randomUUID(),
          type: "single",
          prompt: "Wo beginnt der Rhein?",
          options: ["In den Alpen", "In Berlin", "An der Nordsee", "In Koeln"],
          answer: "In den Alpen"
        },
        {
          id: crypto.randomUUID(),
          type: "multi",
          prompt: "Welche Staedte werden im Text genannt?",
          options: ["Koeln", "Mainz", "Hamburg", "Koblenz"],
          answer: "Koeln; Mainz; Koblenz"
        },
        {
          id: crypto.randomUUID(),
          type: "short",
          prompt: "Was machen Menschen im Sommer am Ufer?",
          options: [],
          answer: "Sie sitzen am Ufer und beobachten die Schiffe."
        }
      ]
    }
  ],
  submissions: []
};

let state = loadState();
let editingId = null;
let activeSession = null;
let timerHandle = null;

const els = {
  tabs: document.querySelectorAll(".tab"),
  views: document.querySelectorAll(".view"),
  form: document.querySelector("#assignment-form"),
  title: document.querySelector("#assignment-title"),
  timeLimit: document.querySelector("#time-limit"),
  passageMode: document.querySelector("#passage-mode"),
  passage: document.querySelector("#passage-text"),
  questionsList: document.querySelector("#questions-list"),
  questionTemplate: document.querySelector("#question-template"),
  addQuestion: document.querySelector("#add-question"),
  resetForm: document.querySelector("#reset-form"),
  clearData: document.querySelector("#clear-data"),
  assignmentList: document.querySelector("#assignment-list"),
  studentCode: document.querySelector("#student-code"),
  studentName: document.querySelector("#student-name"),
  startSession: document.querySelector("#start-session"),
  sessionStatus: document.querySelector("#session-status"),
  activeSession: document.querySelector("#active-session"),
  resultsList: document.querySelector("#results-list"),
  exportResults: document.querySelector("#export-results")
};

initialize();

function initialize() {
  wireTabs();
  wireTeacher();
  wireStudent();
  wireResults();
  applyIncomingAssignment();
  resetForm();
  renderAssignments();
  renderResults();
  applyUrlMode();
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);

  try {
    const parsed = JSON.parse(raw);
    return {
      assignments: Array.isArray(parsed.assignments) ? parsed.assignments : [],
      submissions: Array.isArray(parsed.submissions) ? parsed.submissions : []
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function wireTabs() {
  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => setMode(tab.dataset.mode));
  });
}

function setMode(mode) {
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.mode === mode));
  els.views.forEach((view) => view.classList.toggle("is-active", view.id === `${mode}-view`));
  if (mode === "results") renderResults();
}

function wireTeacher() {
  els.addQuestion.addEventListener("click", () => addQuestionCard());
  els.resetForm.addEventListener("click", resetForm);
  els.clearData.addEventListener("click", () => {
    if (!confirm("Clear all assignments and submissions from this browser?")) return;
    state = { assignments: [], submissions: [] };
    editingId = null;
    saveState();
    resetForm();
    renderAssignments();
    renderResults();
  });

  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const assignment = collectAssignment();
    if (!assignment) return;

    if (editingId) {
      state.assignments = state.assignments.map((item) => (item.id === editingId ? assignment : item));
    } else {
      state.assignments.unshift(assignment);
    }

    saveState();
    editingId = null;
    resetForm();
    renderAssignments();
  });
}

function wireStudent() {
  els.studentCode.addEventListener("input", () => {
    els.studentCode.value = els.studentCode.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  });

  els.startSession.addEventListener("click", startStudentSession);

  document.addEventListener("copy", blockIfSessionActive);
  document.addEventListener("cut", blockIfSessionActive);
  document.addEventListener("contextmenu", blockIfSessionActive);
  document.addEventListener("selectstart", (event) => {
    if (activeSession && event.target.closest(".passage")) event.preventDefault();
  });
  document.addEventListener("keydown", (event) => {
    if (!activeSession) return;
    const key = event.key.toLowerCase();
    const copyShortcut = (event.metaKey || event.ctrlKey) && ["c", "x", "a", "s", "p"].includes(key);
    if (copyShortcut && event.target.closest(".session")) {
      event.preventDefault();
      logSessionEvent("blocked-shortcut", `Shortcut ${key.toUpperCase()} blocked`);
      renderSessionWarning("This session blocks common copy and export shortcuts.");
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (activeSession && document.hidden) {
      logSessionEvent("tab-hidden", "Student left the active tab");
      renderSessionWarning("Tab switch recorded.");
    }
  });
  window.addEventListener("blur", () => {
    if (activeSession) {
      logSessionEvent("window-blur", "Window lost focus");
    }
  });
}

function wireResults() {
  els.exportResults.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state.submissions, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `daf-reading-results-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });
}

function blockIfSessionActive(event) {
  if (!activeSession) return;
  if (!event.target.closest(".session")) return;
  event.preventDefault();
  logSessionEvent("copy-attempt", `${event.type} blocked`);
  renderSessionWarning("Copying from the active session is blocked.");
}

function resetForm() {
  editingId = null;
  els.form.reset();
  els.timeLimit.value = 20;
  els.passageMode.value = "protected";
  els.questionsList.innerHTML = "";
  addQuestionCard({
    type: "single",
    prompt: "",
    options: ["", "", "", ""],
    answer: ""
  });
}

function addQuestionCard(question = {}) {
  const fragment = els.questionTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".question-card");
  card.dataset.questionId = question.id || crypto.randomUUID();
  card.querySelector(".question-prompt").value = question.prompt || "";
  card.querySelector(".question-type").value = question.type || "single";
  card.querySelector(".question-options").value = (question.options || []).join("\n");
  card.querySelector(".question-answer").value = question.answer || "";
  card.querySelector(".remove-question").addEventListener("click", () => {
    card.remove();
    renumberQuestions();
  });
  card.querySelector(".question-type").addEventListener("change", () => syncQuestionType(card));
  els.questionsList.append(card);
  syncQuestionType(card);
  renumberQuestions();
}

function syncQuestionType(card) {
  const type = card.querySelector(".question-type").value;
  card.querySelector(".options-field").classList.toggle("hidden", type === "short");
}

function renumberQuestions() {
  els.questionsList.querySelectorAll(".question-card").forEach((card, index) => {
    card.querySelector(".question-number").textContent = `Question ${index + 1}`;
  });
}

function collectAssignment() {
  const questions = [...els.questionsList.querySelectorAll(".question-card")]
    .map((card) => {
      const type = card.querySelector(".question-type").value;
      const options = card
        .querySelector(".question-options")
        .value.split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
      return {
        id: card.dataset.questionId || crypto.randomUUID(),
        type,
        prompt: card.querySelector(".question-prompt").value.trim(),
        options: type === "short" ? [] : options,
        answer: card.querySelector(".question-answer").value.trim()
      };
    })
    .filter((question) => question.prompt);

  if (!questions.length) {
    alert("Add at least one question.");
    return null;
  }

  const invalidChoice = questions.find((question) => question.type !== "short" && question.options.length < 2);
  if (invalidChoice) {
    alert("Multiple choice questions need at least two options.");
    return null;
  }

  const previous = state.assignments.find((item) => item.id === editingId);
  return {
    id: editingId || crypto.randomUUID(),
    code: previous?.code || generateCode(),
    title: els.title.value.trim(),
    passage: els.passage.value.trim(),
    timeLimit: clamp(Number(els.timeLimit.value) || 20, 3, 180),
    passageMode: els.passageMode.value,
    createdAt: previous?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    questions
  };
}

function generateCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  do {
    code = Array.from({ length: 6 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
  } while (state.assignments.some((assignment) => assignment.code === code));
  return code;
}

function renderAssignments() {
  if (!state.assignments.length) {
    els.assignmentList.innerHTML = `<div class="empty-state"><p>No assignments yet.</p></div>`;
    return;
  }

  els.assignmentList.innerHTML = state.assignments
    .map(
      (assignment) => `
      <article class="assignment-item">
        <h3>${escapeHtml(assignment.title)}</h3>
        <p class="assignment-meta">Code ${assignment.code} · ${assignment.questions.length} questions · ${assignment.timeLimit} min</p>
        <div class="assignment-actions">
          <button class="secondary-button" data-action="edit" data-id="${assignment.id}" type="button">Edit</button>
          <button class="secondary-button" data-action="student-link" data-id="${assignment.id}" type="button">Student link</button>
          <button class="ghost-button" data-action="copy-code" data-id="${assignment.id}" type="button">Copy code</button>
          <button class="ghost-button danger" data-action="delete" data-id="${assignment.id}" type="button">Delete</button>
        </div>
      </article>
    `
    )
    .join("");

  els.assignmentList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => handleAssignmentAction(button.dataset.action, button.dataset.id));
  });
}

function handleAssignmentAction(action, id) {
  const assignment = state.assignments.find((item) => item.id === id);
  if (!assignment) return;

  if (action === "edit") {
    editingId = id;
    els.title.value = assignment.title;
    els.timeLimit.value = assignment.timeLimit;
    els.passageMode.value = assignment.passageMode || "protected";
    els.passage.value = assignment.passage;
    els.questionsList.innerHTML = "";
    assignment.questions.forEach(addQuestionCard);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (action === "copy-code") {
    navigator.clipboard?.writeText(assignment.code);
  }

  if (action === "student-link") {
    copyStudentLink(assignment);
  }

  if (action === "delete") {
    if (!confirm(`Delete "${assignment.title}"?`)) return;
    state.assignments = state.assignments.filter((item) => item.id !== id);
    saveState();
    renderAssignments();
  }
}

function copyStudentLink(assignment) {
  const studentAssignment = {
    ...assignment,
    questions: assignment.questions.map((question) => ({
      ...question,
      answer: ""
    }))
  };
  const url = new URL(window.location.href);
  url.search = "?mode=student&locked=1";
  url.hash = `assignment=${encodePayload(studentAssignment)}`;
  navigator.clipboard?.writeText(url.toString());
  alert("Student-only link copied. It includes the assignment, but not the answer key.");
}

function applyIncomingAssignment() {
  const assignment = parseAssignmentFromHash();
  if (!assignment) return;

  state.assignments = [
    assignment,
    ...state.assignments.filter((item) => item.code !== assignment.code && item.id !== assignment.id)
  ];
  saveState();
  els.studentCode.value = assignment.code;
}

function applyUrlMode() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");
  const locked = params.get("locked") === "1";

  if (mode === "student") {
    setMode("student");
  }

  if (locked) {
    document.body.classList.add("student-only");
    els.sessionStatus.textContent = "Student-only assignment link loaded.";
  }
}

function parseAssignmentFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  const params = new URLSearchParams(hash);
  const payload = params.get("assignment");
  if (!payload) return null;

  try {
    const assignment = decodePayload(payload);
    if (!assignment?.code || !assignment?.title || !assignment?.passage || !Array.isArray(assignment.questions)) {
      return null;
    }
    return assignment;
  } catch {
    return null;
  }
}

function startStudentSession() {
  const code = els.studentCode.value.trim().toUpperCase();
  const studentName = els.studentName.value.trim();
  const assignment = state.assignments.find((item) => item.code === code);

  if (!assignment) {
    els.sessionStatus.textContent = "No assignment found for that code.";
    return;
  }

  if (!studentName) {
    els.sessionStatus.textContent = "Enter a student name before starting.";
    return;
  }

  activeSession = {
    id: crypto.randomUUID(),
    assignmentId: assignment.id,
    assignmentTitle: assignment.title,
    studentName,
    startedAt: new Date().toISOString(),
    endsAt: Date.now() + assignment.timeLimit * 60 * 1000,
    questionOrder: shuffle(assignment.questions.map((question) => question.id)),
    optionOrders: Object.fromEntries(
      assignment.questions.map((question) => [question.id, shuffle((question.options || []).slice())])
    ),
    answers: {},
    events: []
  };

  els.sessionStatus.textContent = `Session started for ${studentName}.`;
  renderSession(assignment);
  tickTimer();
  timerHandle = window.setInterval(tickTimer, 1000);

  document.documentElement.requestFullscreen?.().catch(() => {
    logSessionEvent("fullscreen-denied", "Fullscreen request was denied");
  });
}

function renderSession(assignment) {
  const questions = activeSession.questionOrder.map((id) => assignment.questions.find((question) => question.id === id));
  els.activeSession.innerHTML = `
    <article class="session">
      <div class="reader-top">
        <div>
          <p class="eyebrow">Active reading</p>
          <h2>${escapeHtml(assignment.title)}</h2>
        </div>
        <div class="session-actions">
          <span id="session-timer" class="timer">--:--</span>
          <button class="secondary-button" id="finish-session" type="button">Submit</button>
        </div>
      </div>
      <p id="session-warning" class="session-warning hidden"></p>
      <div class="reader-grid">
        <section class="passage protected ${assignment.passageMode === "image" ? "image-mode" : ""}" aria-label="Reading passage">
          <div class="passage-page">${renderPassage(assignment.passage)}</div>
        </section>
        <section class="question-runner" aria-label="Questions">
          <div class="runner-card">
            ${questions.map((question, index) => renderQuestion(question, index)).join("")}
            <button class="primary-button" id="finish-session-bottom" type="button">Submit answers</button>
          </div>
        </section>
      </div>
    </article>
  `;

  els.activeSession.querySelector("#finish-session").addEventListener("click", () => finishSession("submitted"));
  els.activeSession.querySelector("#finish-session-bottom").addEventListener("click", () => finishSession("submitted"));
  els.activeSession.querySelectorAll("[data-question-id]").forEach((field) => {
    field.addEventListener("change", collectSessionAnswers);
    field.addEventListener("input", collectSessionAnswers);
    field.addEventListener("paste", (event) => {
      event.preventDefault();
      logSessionEvent("paste-blocked", "Paste into answer field blocked");
      renderSessionWarning("Pasting answers is blocked in this session.");
    });
  });
}

function renderPassage(text) {
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `<span class="passage-line">${escapeHtml(line)}</span>`)
    .join("");
}

function renderQuestion(question, index) {
  if (question.type === "short") {
    return `
      <article class="question-card">
        <p class="eyebrow">Question ${index + 1}</p>
        <h3>${escapeHtml(question.prompt)}</h3>
        <textarea data-question-id="${question.id}" rows="4" placeholder="Answer in your own words"></textarea>
      </article>
    `;
  }

  const inputType = question.type === "multi" ? "checkbox" : "radio";
  const options = activeSession.optionOrders[question.id] || question.options || [];
  return `
    <article class="question-card">
      <p class="eyebrow">Question ${index + 1}</p>
      <h3>${escapeHtml(question.prompt)}</h3>
      <div class="answer-options">
        ${options
          .map(
            (option) => `
            <label class="answer-option">
              <input data-question-id="${question.id}" name="${question.id}" type="${inputType}" value="${escapeHtml(option)}">
              <span>${escapeHtml(option)}</span>
            </label>
          `
          )
          .join("")}
      </div>
    </article>
  `;
}

function collectSessionAnswers() {
  if (!activeSession) return;
  const answers = {};
  els.activeSession.querySelectorAll("[data-question-id]").forEach((field) => {
    const id = field.dataset.questionId;
    if (field.type === "radio") {
      if (field.checked) answers[id] = field.value;
    } else if (field.type === "checkbox") {
      if (!answers[id]) answers[id] = [];
      if (field.checked) answers[id].push(field.value);
    } else {
      answers[id] = field.value.trim();
    }
  });
  activeSession.answers = answers;
}

function tickTimer() {
  if (!activeSession) return;
  const remaining = Math.max(0, activeSession.endsAt - Date.now());
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const timer = document.querySelector("#session-timer");
  if (timer) timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (remaining <= 0) {
    finishSession("timeout");
  }
}

function finishSession(reason) {
  if (!activeSession) return;
  const assignment = state.assignments.find((item) => item.id === activeSession.assignmentId);
  collectSessionAnswers();
  clearInterval(timerHandle);

  const submission = {
    ...activeSession,
    finishedAt: new Date().toISOString(),
    finishReason: reason,
    score: assignment ? gradeSession(assignment, activeSession.answers) : null
  };

  state.submissions.unshift(submission);
  saveState();
  activeSession = null;
  timerHandle = null;
  document.exitFullscreen?.().catch(() => {});
  els.activeSession.innerHTML = `
    <div class="empty-state">
      <p>Answers submitted. The teacher can review them in Results.</p>
    </div>
  `;
  els.sessionStatus.textContent = reason === "timeout" ? "Time expired. Session submitted." : "Session submitted.";
  renderResults();
}

function gradeSession(assignment, answers) {
  let earned = 0;
  const gradableQuestions = assignment.questions.filter((question) => question.type !== "short" && question.answer);
  const details = assignment.questions.map((question) => {
    const expected = normalizeAnswer(question.answer);
    const actual = Array.isArray(answers[question.id])
      ? normalizeAnswer(answers[question.id].join(";"))
      : normalizeAnswer(answers[question.id] || "");
    const correct = question.type === "short" || !question.answer ? null : expected === actual;
    if (correct) earned += 1;
    return {
      questionId: question.id,
      prompt: question.prompt,
      expected: question.answer,
      actual: answers[question.id] || "",
      correct
    };
  });

  return {
    earned,
    possible: gradableQuestions.length,
    details
  };
}

function normalizeAnswer(value) {
  return String(value)
    .split(";")
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean)
    .sort()
    .join(";");
}

function renderSessionWarning(message) {
  const warning = document.querySelector("#session-warning");
  if (!warning) return;
  warning.textContent = message;
  warning.classList.remove("hidden");
}

function logSessionEvent(type, detail) {
  if (!activeSession) return;
  activeSession.events.push({
    type,
    detail,
    at: new Date().toISOString()
  });
}

function renderResults() {
  if (!state.submissions.length) {
    els.resultsList.innerHTML = `<div class="empty-state"><p>No submissions yet.</p></div>`;
    return;
  }

  els.resultsList.innerHTML = state.submissions
    .map((submission) => {
      const scoreText = submission.score
        ? `${submission.score.earned}/${submission.score.possible} auto-graded`
        : "Not graded";
      return `
        <article class="result-item">
          <div class="result-meta">
            <span>${escapeHtml(submission.studentName)}</span>
            <span>${new Date(submission.finishedAt).toLocaleString()}</span>
          </div>
          <h3>${escapeHtml(submission.assignmentTitle)}</h3>
          <p class="assignment-meta">${scoreText} · ${submission.finishReason} · ${submission.events.length} events</p>
          ${renderResultDetails(submission)}
        </article>
      `;
    })
    .join("");
}

function renderResultDetails(submission) {
  if (!submission.score?.details?.length) return "";
  const rows = submission.score.details
    .map((detail) => {
      const status = detail.correct === null ? "manual" : detail.correct ? "correct" : "check";
      const actual = Array.isArray(detail.actual) ? detail.actual.join("; ") : detail.actual;
      return `<li>${escapeHtml(status)}: ${escapeHtml(detail.prompt)} -> ${escapeHtml(actual || "No answer")}</li>`;
    })
    .join("");
  const logs = submission.events
    .slice(0, 6)
    .map((event) => `<li>${escapeHtml(event.type)}: ${escapeHtml(event.detail)}</li>`)
    .join("");
  return `
    <ul class="log-list">${rows}</ul>
    ${logs ? `<p class="assignment-meta">Recent session events</p><ul class="log-list">${logs}</ul>` : ""}
  `;
}

function shuffle(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function encodePayload(value) {
  const json = JSON.stringify(value);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function decodePayload(value) {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}
