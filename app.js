const STORAGE_KEY = "daf-reading-guard-state";

const SEEDED_ASSIGNMENTS = [
  {
    id: "exercise-soccer-path",
    code: "BALL01",
    title: "Der Weg zum Fußballprofi: Deutschland vs. Kalifornien",
    level: "A2/B1",
    passage:
      `Noah ist fünfzehn Jahre alt und lebt in Kalifornien. Er spielt gern Fußball und fragt sich: Wie wird man eigentlich besser? Sein Freund Lukas lebt in Deutschland und spielt auch im Verein. Beide trainieren viel, aber ihr Weg im Fußball sieht nicht gleich aus.

In Kalifornien spielen viele Jugendliche in einem Clubteam. Oft gibt es Tryouts. Das bedeutet: Spieler kommen zu einem Training, und die Trainer wählen die Mannschaft aus. Manche Teams reisen an Wochenenden zu Turnieren in andere Städte. Das kann teuer sein, denn Familien bezahlen oft Beiträge, Trikots, Fahrten und Hotels. Für viele Spieler ist auch die Schule wichtig. In der High School gibt es oft Schulmannschaften. Spiele gegen andere Schulen können sehr spannend sein. Freunde, Lehrer und Eltern schauen zu. Für Noah fühlt sich das wie ein großes Ereignis in der Schule an.

In Deutschland ist Fußball meistens stärker mit Vereinen verbunden. Ein Kind spielt oft zuerst im Verein in der Nähe: zum Beispiel beim kleinen Stadtteilverein oder Dorfverein. Dort trainiert es mit anderen Kindern aus der Umgebung. Wenn ein Spieler sehr gut ist, kann er später bei einem größeren Verein vorspielen. Gute Spieler werden manchmal von Trainern beobachtet. Es gibt auch Stützpunkte und Förderprogramme, damit Talente zusätzlich trainieren können. Noch später können manche Spieler in ein Nachwuchsleistungszentrum eines Profivereins kommen.

Auch die Rolle der Schule ist anders. In Deutschland gibt es Sportunterricht und manchmal Schulturniere, aber die Schule ist normalerweise nicht der Hauptweg in den Fußball. Wichtiger ist der Verein. Lukas trainiert dreimal pro Woche im Verein und spielt am Samstag ein Punktspiel. Seine Schule weiß, dass er Fußball spielt, aber seine Mannschaft gehört nicht zur Schule.

Lukas erzählt Noah auch, dass nicht jeder gute Spieler sofort zu einem großen Club geht. Viele Kinder bleiben lange in einem kleinen Verein, weil sie dort Freunde haben und regelmäßig spielen können. Ein großer Name ist nicht immer besser. Wenn ein Spieler nur auf der Bank sitzt, lernt er weniger. Gute Trainer sprechen deshalb mit den Eltern und mit dem Spieler. Sie fragen: Ist das Training passend? Hat der Spieler genug Spielzeit? Fühlt er sich wohl? Für junge Spieler ist Unterstützung wichtig, aber zu viel Druck kann den Spaß kaputt machen.

Noah findet das interessant. In Kalifornien muss seine Familie genau überlegen, welches Clubteam gut passt. Wie gut sind die Trainer? Wie weit ist die Fahrt? Wie teuer ist das Team? Spielen Freunde dort? In Deutschland fragt Lukas eher: Welcher Verein ist in der Nähe? Gibt es gute Trainer? Spiele ich genug? Habe ich Spaß? Ist das Niveau passend?

Beide Wege haben Vorteile. In Kalifornien kann High-School-Sport ein tolles Gemeinschaftsgefühl geben. In Deutschland ist der Verein oft ein fester Ort, an dem Kinder über viele Jahre trainieren. Am Ende brauchen junge Spieler in beiden Ländern gute Trainer, viel Geduld, Unterstützung von der Familie und Freude am Spiel. Noah und Lukas merken: Profi wird man nicht nur durch Talent. Man muss lernen, verlieren, zuhören und immer wieder trainieren.`,
    timeLimit: 25,
    passageMode: "protected",
    createdAt: "2026-06-28T00:00:00.000Z",
    questions: [
      {
        id: "soccer-q1",
        type: "single",
        prompt: "Wo lebt Noah?",
        options: ["In Kalifornien", "In München", "In Japan", "In Hamburg"],
        answer: "In Kalifornien"
      },
      {
        id: "soccer-q2",
        type: "multi",
        prompt: "Was kann bei Clubteams in Kalifornien teuer sein?",
        options: ["Beiträge", "Hotels", "Trikots", "Schulbücher"],
        answer: "Beiträge; Hotels; Trikots"
      },
      {
        id: "soccer-q3",
        type: "single",
        prompt: "Was bedeutet ein Tryout?",
        options: ["Trainer wählen Spieler aus", "Man schreibt einen Test", "Man kauft neue Schuhe", "Man fährt mit der U-Bahn"],
        answer: "Trainer wählen Spieler aus"
      },
      {
        id: "soccer-q4",
        type: "single",
        prompt: "Was ist in Deutschland meistens wichtiger für Fußball als die Schule?",
        options: ["Der Verein", "Der Bus", "Das Museum", "Der YouTube-Kanal"],
        answer: "Der Verein"
      },
      {
        id: "soccer-q5",
        type: "multi",
        prompt: "Welche Fragen stellt sich Lukas bei der Vereinswahl?",
        options: ["Ist der Verein in der Nähe?", "Gibt es gute Trainer?", "Spiele ich genug?", "Wie groß ist die Schulcafeteria?"],
        answer: "Ist der Verein in der Nähe?; Gibt es gute Trainer?; Spiele ich genug?"
      },
      {
        id: "soccer-q6",
        type: "single",
        prompt: "Wann spielt Lukas sein Punktspiel?",
        options: ["Am Samstag", "Am Montagmorgen", "In den Sommerferien", "Jeden Tag in der Schule"],
        answer: "Am Samstag"
      },
      {
        id: "soccer-q7",
        type: "single",
        prompt: "Was brauchen junge Spieler laut Text in beiden Ländern?",
        options: ["Gute Trainer und Geduld", "Nur teure Schuhe", "Immer denselben Verein", "Keine Unterstützung"],
        answer: "Gute Trainer und Geduld"
      },
      {
        id: "soccer-write",
        type: "short",
        prompt: "Schreibe mindestens 50 Wörter: Welcher Fußballweg gefällt dir besser, der Weg in Kalifornien oder der Weg in Deutschland? Begründe deine Meinung mit Beispielen.",
        options: [],
        answer: "",
        minWords: 50
      }
    ]
  },
  {
    id: "exercise-munich-youtube",
    code: "MUC002",
    title: "Ein YouTuber besucht München",
    level: "A2/B1",
    passage:
      `Mia ist fünfzehn und macht gern kurze Videos für YouTube. Sie wohnt in Kalifornien, aber in den Ferien besucht sie mit ihrer Familie München. Vor der Reise kennt sie nur drei Dinge über die Stadt: Bayern München, Brezeln und das Oktoberfest. Sie möchte herausfinden, wie junge Menschen dort leben.

Am ersten Morgen fährt Mia mit der U-Bahn in die Innenstadt. Sie wundert sich, dass viele Menschen ohne Auto unterwegs sind. In Kalifornien fährt ihre Familie fast überall mit dem Auto. In München sieht sie U-Bahnen, S-Bahnen, Trams, Busse und viele Fahrräder. Für ihr Video filmt sie aber nicht einfach fremde Menschen. Sie achtet darauf, höflich zu sein und fragt, wenn sie jemanden direkt zeigen möchte.

Auf dem Marienplatz ist viel los. Mia sieht das Neue Rathaus und hört Musik von Straßenkünstlern. Ein Mann verkauft Postkarten, eine Familie macht Fotos, und eine Schulklasse steht vor einem Brunnen. Mia sagt in die Kamera: "Das sieht alt aus, aber die Stadt fühlt sich nicht langweilig an." Sie kauft eine Brezel und merkt, dass sie salziger ist als erwartet.

Danach geht Mia in den Englischen Garten. Dort sieht sie Jogger, Fahrräder, Familien, Hunde und Menschen, die auf der Wiese sitzen. Besonders spannend findet sie die Surfer an der Eisbachwelle. Sie kann kaum glauben, dass Menschen mitten in einer Stadt surfen. In Kalifornien denkt sie bei Surfen sofort an den Pazifik. In München ist es ein kleiner Fluss.

Am Nachmittag trifft Mia einen deutschen Schüler namens Ben. Ben erzählt, dass viele Jugendliche nach der Schule mit der U-Bahn oder dem Fahrrad fahren. Manche treffen Freunde in der Stadt, andere gehen zum Sportverein. Ben spielt Fußball in einem Verein. Mia fragt, ob er auch für seine Schule spielt. Ben lacht und sagt: "Nicht wirklich. Bei uns ist der Verein wichtiger."

Ben zeigt Mia auch ein kleines Geschäft mit Fußballtrikots. Dort sieht sie Trikots von Bayern München, aber auch Schals von kleineren Vereinen. Ben erklärt, dass viele Fans nicht nur den großen Club mögen. Manche unterstützen den Verein aus ihrem Stadtteil oder aus der Stadt ihrer Familie. Mia findet das gut, weil Fußball dadurch persönlicher wirkt. Danach gehen beide zu einer Bäckerei. Mia bestellt auf Deutsch: "Eine Brezel, bitte." Die Verkäuferin lächelt, und Mia ist stolz, weil sie verstanden wird.

Bevor Mia zurück ins Hotel fährt, kauft sie noch eine Tageskarte als Erinnerung, obwohl sie die Karte eigentlich schon benutzt hat. Für sie ist die U-Bahn ein Teil der Reise, nicht nur ein Weg von A nach B.

Für ihr letztes Video am Abend probiert Mia Käsespätzle. Sie findet das Essen schwer, aber lecker. Dann schneidet sie ihre Aufnahmen zusammen. Ihr Titel lautet: "München ist anders, als ich dachte." Im Video sagt sie, dass die Stadt eine Mischung ist: alte Gebäude, moderner Verkehr, viel Fußball, Parks und Leute, die ihren Alltag ziemlich selbstständig organisieren. Am Ende möchte Mia noch einmal zurückkommen, vielleicht zu einem Spiel in der Allianz Arena.`,
    timeLimit: 25,
    passageMode: "protected",
    createdAt: "2026-06-28T00:00:00.000Z",
    questions: [
      {
        id: "munich-q1",
        type: "single",
        prompt: "Welche drei Dinge kennt Mia vor der Reise über München?",
        options: ["Bayern München, Brezeln und Oktoberfest", "Anime, Sushi und Tempel", "Hollywood, Strände und Palmen", "Minecraft, Höhlen und Diamanten"],
        answer: "Bayern München, Brezeln und Oktoberfest"
      },
      {
        id: "munich-q2",
        type: "multi",
        prompt: "Welche Verkehrsmittel sieht Mia in München?",
        options: ["U-Bahn", "S-Bahn", "Tram", "Raumschiff"],
        answer: "U-Bahn; S-Bahn; Tram"
      },
      {
        id: "munich-q3",
        type: "single",
        prompt: "Warum filmt Mia nicht einfach fremde Menschen direkt?",
        options: ["Sie möchte höflich sein", "Ihre Kamera ist kaputt", "Sie darf keine Gebäude filmen", "Sie hasst YouTube"],
        answer: "Sie möchte höflich sein"
      },
      {
        id: "munich-q4",
        type: "single",
        prompt: "Was findet Mia im Englischen Garten besonders spannend?",
        options: ["Die Surfer an der Eisbachwelle", "Ein Basketballspiel", "Einen Vulkan", "Eine Minecraft-Ausstellung"],
        answer: "Die Surfer an der Eisbachwelle"
      },
      {
        id: "munich-q5",
        type: "single",
        prompt: "Was erzählt Ben über Jugendliche in München?",
        options: ["Viele fahren mit U-Bahn oder Fahrrad", "Alle fahren nur mit dem Auto", "Niemand macht Sport", "Alle bleiben immer zu Hause"],
        answer: "Viele fahren mit U-Bahn oder Fahrrad"
      },
      {
        id: "munich-q6",
        type: "multi",
        prompt: "Was gehört laut Text zu Mias Eindruck von München?",
        options: ["Alte Gebäude", "Moderner Verkehr", "Parks", "Wüste"],
        answer: "Alte Gebäude; Moderner Verkehr; Parks"
      },
      {
        id: "munich-q7",
        type: "single",
        prompt: "Was möchte Mia vielleicht später besuchen?",
        options: ["Ein Spiel in der Allianz Arena", "Eine Schule in Japan", "Ein Turnier in Monterey", "Ein Clash-Royale-Studio"],
        answer: "Ein Spiel in der Allianz Arena"
      },
      {
        id: "munich-write",
        type: "short",
        prompt: "Schreibe mindestens 50 Wörter: Welche Szene aus Mias München-Video würdest du am liebsten sehen? Erkläre auch, was für dich anders als in Kalifornien wirkt.",
        options: [],
        answer: "",
        minWords: 50
      }
    ]
  },
  {
    id: "exercise-minecraft-town",
    code: "CRAFT3",
    title: "Minecraft: Eine deutsche Stadt bauen",
    level: "A2/B1",
    passage:
      `Jonas und Emma spielen am Wochenende Minecraft. Sie wollen nicht nur ein großes Haus bauen, sondern eine ganze deutsche Stadt. Ihr Ziel ist eine Stadt, die man sofort wiedererkennt: nicht riesig wie Los Angeles, sondern übersichtlich, mit einem alten Zentrum, kurzen Wegen und vielen kleinen Details.

Zuerst bauen sie den Marktplatz. In der Mitte steht ein Brunnen. Neben dem Brunnen gibt es Stände mit Brot, Obst und Blumen. Emma sagt: "Ein Marktplatz ist gut, weil hier alle Wege zusammenkommen." Auf einer Seite bauen sie das Rathaus. Es hat eine Uhr, hohe Fenster und eine kleine Treppe vor der Tür. Dort kann später ein Dorfbewohner als Bürgermeister stehen.

Danach baut Jonas eine Bäckerei. Vor dem Laden stellt er Schilder mit Brezeln, Brötchen und Kuchen auf. Hinter der Bäckerei gibt es eine kleine Wohnung. Emma baut daneben eine Apotheke und eine Buchhandlung. Die Häuser stehen nah beieinander. Manche haben Holz an der Wand, damit sie wie Fachwerkhäuser aussehen. Die Straße ist nicht sehr breit, denn in der Altstadt sollen Menschen zu Fuß gehen.

Am Rand der Stadt bauen sie einen Bahnhof. Dort halten Züge, die zu anderen Minecraft-Orten fahren. Vom Bahnhof führt ein Weg direkt zum Marktplatz. Jonas baut auch Fahrradwege, weil er gehört hat, dass viele Menschen in deutschen Städten mit dem Fahrrad fahren. Neben der Schule gibt es viele Fahrradständer. Die Schule hat einen Pausenhof, eine Sporthalle und einen kleinen Garten.

Auf einem Hügel bauen die beiden eine Burg. Sie ist älter als die Stadt und hat eine Mauer, einen Turm und ein Tor. Von oben sieht man den Fluss, den Bahnhof und die Dächer der Altstadt. Emma möchte keinen modernen Wolkenkratzer neben die Burg setzen. Sie sagt: "Dann sieht die Stadt komisch aus." Jonas findet das logisch. Alte und neue Gebäude dürfen zusammen sein, aber sie müssen gut passen.

Zwischen Altstadt und Bahnhof bauen sie einen kleinen Park. Dort gibt es Wege, Bänke, Bäume und einen Spielplatz. Neben dem Park fließt ein schmaler Fluss. Jonas baut eine Brücke, damit die Bewohner schnell zur Schule kommen. Emma setzt Blumen an den Weg, aber sie lässt auch freie Wiesen. Nicht alles muss vollgebaut sein. Eine Stadt braucht Orte, an denen Menschen sich ausruhen können. Dann bauen sie noch ein Schwimmbad und einen Fußballplatz am Stadtrand, weil Jugendliche auch Freizeitorte brauchen.

Emma möchte außerdem, dass die Stadt nicht nur schön, sondern auch praktisch ist. Deshalb setzt sie Wegweiser an wichtige Kreuzungen. Besucher sollen den Bahnhof, die Burg und den Marktplatz leicht finden.

Zum Schluss fügen sie kleine Dinge hinzu: Straßenschilder, Laternen, Bäume, Bushaltestellen und Mülleimer. Plötzlich wirkt die Stadt lebendig. Jonas merkt, dass Stadtplanung nicht nur bedeutet, schöne Gebäude zu bauen. Man muss auch überlegen, wie Menschen sich bewegen, wo sie einkaufen, wo sie lernen und wo sie Freunde treffen. In Minecraft macht das Spaß, aber es zeigt auch, wie eine echte Stadt funktioniert.`,
    timeLimit: 25,
    passageMode: "protected",
    createdAt: "2026-06-28T00:00:00.000Z",
    questions: [
      {
        id: "minecraft-q1",
        type: "single",
        prompt: "Was wollen Jonas und Emma bauen?",
        options: ["Eine ganze deutsche Stadt", "Nur ein Stadion", "Ein Raumschiff", "Eine Unterwasserbasis"],
        answer: "Eine ganze deutsche Stadt"
      },
      {
        id: "minecraft-q2",
        type: "single",
        prompt: "Was steht in der Mitte des Marktplatzes?",
        options: ["Ein Brunnen", "Ein Vulkan", "Ein Bahnhof", "Ein Kino"],
        answer: "Ein Brunnen"
      },
      {
        id: "minecraft-q3",
        type: "multi",
        prompt: "Welche Läden bauen Jonas und Emma?",
        options: ["Bäckerei", "Apotheke", "Buchhandlung", "Flughafen"],
        answer: "Bäckerei; Apotheke; Buchhandlung"
      },
      {
        id: "minecraft-q4",
        type: "single",
        prompt: "Warum bauen sie Fahrradwege?",
        options: ["Viele Menschen fahren in deutschen Städten Fahrrad", "Fahrräder sind Monster", "Züge dürfen dort nicht fahren", "Die Wege sollen leer bleiben"],
        answer: "Viele Menschen fahren in deutschen Städten Fahrrad"
      },
      {
        id: "minecraft-q5",
        type: "multi",
        prompt: "Was gehört zur Schule im Text?",
        options: ["Pausenhof", "Sporthalle", "Kleiner Garten", "Burgmauer"],
        answer: "Pausenhof; Sporthalle; Kleiner Garten"
      },
      {
        id: "minecraft-q6",
        type: "single",
        prompt: "Wo steht die Burg?",
        options: ["Auf einem Hügel", "Unter dem Bahnhof", "Im Meer", "In der Bäckerei"],
        answer: "Auf einem Hügel"
      },
      {
        id: "minecraft-q7",
        type: "single",
        prompt: "Was lernt Jonas am Ende?",
        options: ["Stadtplanung bedeutet mehr als schöne Gebäude", "Man braucht keine Wege", "Alle Häuser müssen gleich sein", "Minecraft ist nur für Profis"],
        answer: "Stadtplanung bedeutet mehr als schöne Gebäude"
      },
      {
        id: "minecraft-write",
        type: "short",
        prompt: "Schreibe mindestens 50 Wörter: Welche drei Dinge würdest du in deine deutsche Minecraft-Stadt bauen? Erkläre, warum diese Orte wichtig sind.",
        options: [],
        answer: "",
        minWords: 50
      }
    ]
  },
  {
    id: "exercise-subnautica-monterey",
    code: "OCEAN4",
    title: "Subnautica und der Pazifik bei Monterey Bay",
    level: "B1",
    passage:
      `Wenn man Subnautica spielt, fühlt sich das Meer zuerst wunderschön und gefährlich zugleich an. Überall gibt es fremde Pflanzen, leuchtende Tiere, tiefe Höhlen und Geräusche, die man nicht sofort versteht. Der Spieler ist neugierig, aber auch vorsichtig. Diese Mischung aus Staunen und Angst passt überraschend gut zu echten Ozeanen. Natürlich gibt es bei Monterey Bay keine außerirdischen Monster, aber der Pazifik dort ist trotzdem eine Welt, die viele Menschen kaum kennen.

Monterey Bay liegt an der Küste Kaliforniens. Das Wasser ist oft kalt, und an vielen Stellen wachsen Kelpwälder. Kelp ist eine große Braunalge, die wie ein Unterwasserwald aussieht. Zwischen den langen Pflanzen finden Fische, Krebse, Schnecken und andere Tiere Schutz. Seeotter ruhen manchmal im Kelp, damit sie nicht wegtreiben. Für Taucher und Forschende sind solche Gebiete sehr spannend, weil viele Lebewesen auf engem Raum zusammenleben.

In Subnautica sammelt man Materialien, baut Basen und erforscht immer tiefere Zonen. In Monterey Bay erforschen Wissenschaftler auch tiefe Bereiche, aber aus anderen Gründen. Sie wollen verstehen, wie das Ökosystem funktioniert und wie Menschen es schützen können. Vor der Küste gibt es tiefe Unterwasserlandschaften, zum Beispiel Canyons. Sie zeigen, dass der Ozean nicht einfach ein flacher blauer Raum ist. Unter der Oberfläche gibt es Berge, Täler, Strömungen und verschiedene Lebensräume.

Auch die Ausrüstung ist anders. In Subnautica bekommt man neue Geräte, wenn man genug Materialien findet. In der echten Forschung braucht man Boote, Kameras, Sensoren und manchmal Unterwasserroboter. Diese Geräte sammeln Daten, ohne dass Menschen selbst in große Tiefe tauchen müssen. Für Jugendliche kann das spannend sein, weil es zeigt: Meeresforschung ist nicht nur Biologie. Sie verbindet Technik, Teamarbeit, Geduld und genaue Beobachtung. Ein kurzer Blick auf die Wasseroberfläche reicht nicht, um den Ozean zu verstehen.

Viele Besucher sehen Monterey Bay zuerst vom Strand oder von einem Boot aus. Sie sehen vielleicht Seevögel, Wellen und Nebel. Unter der Oberfläche passiert aber viel mehr. Kleine Veränderungen bei Temperatur oder Nahrung können große Folgen haben. Genau deshalb vergleichen Forschende Daten über längere Zeit. Sie wollen nicht nur ein schönes Foto, sondern ein klares Bild davon, wie sich das Meer verändert.

Ein wichtiger Unterschied ist die Verantwortung. Im Spiel kann man oft ausprobieren, ohne echte Folgen zu spüren. In der realen Natur hat jede Handlung eine Wirkung. Müll, zu warme Meerestemperaturen, Fischerei und Störungen können Tieren und Pflanzen schaden. Wenn Kelpwälder kleiner werden, verlieren viele Tiere Schutz und Nahrung. Deshalb gibt es Schutzgebiete und Regeln. Sie sollen nicht verhindern, dass Menschen das Meer erleben, sondern dafür sorgen, dass es auch in Zukunft gesund bleibt.

Für einen Spieler kann Monterey Bay wie eine echte Version einer Entdeckungsreise sein. Man braucht keine Laserkanone und kein Raumschiff. Man braucht Geduld, Wissen und Respekt. Wer am Strand steht, sieht vielleicht nur Wellen. Aber darunter beginnt eine Welt mit eigenen Regeln. Subnautica macht diese Idee dramatisch und fantastisch. Monterey Bay zeigt, dass die echte Erde schon geheimnisvoll genug ist.`,
    timeLimit: 30,
    passageMode: "protected",
    createdAt: "2026-06-28T00:00:00.000Z",
    questions: [
      {
        id: "subnautica-q1",
        type: "single",
        prompt: "Welche Stimmung beschreibt der Text am Anfang von Subnautica?",
        options: ["Wunderschön und gefährlich zugleich", "Langweilig und trocken", "Laut und schulisch", "Schnell und sportlich"],
        answer: "Wunderschön und gefährlich zugleich"
      },
      {
        id: "subnautica-q2",
        type: "single",
        prompt: "Was ist Kelp?",
        options: ["Eine große Braunalge", "Ein Computerspiel", "Ein Fußballverein", "Ein japanisches Gericht"],
        answer: "Eine große Braunalge"
      },
      {
        id: "subnautica-q3",
        type: "multi",
        prompt: "Welche Tiere oder Lebewesen werden im Kelp-Kontext genannt?",
        options: ["Fische", "Krebse", "Seeotter", "Kamele"],
        answer: "Fische; Krebse; Seeotter"
      },
      {
        id: "subnautica-q4",
        type: "single",
        prompt: "Warum erforschen Wissenschaftler tiefe Bereiche bei Monterey Bay?",
        options: ["Sie wollen das Ökosystem verstehen und schützen", "Sie suchen außerirdische Monster", "Sie bauen eine Minecraft-Stadt", "Sie trainieren für Fußball"],
        answer: "Sie wollen das Ökosystem verstehen und schützen"
      },
      {
        id: "subnautica-q5",
        type: "multi",
        prompt: "Was kann dem Meer laut Text schaden?",
        options: ["Müll", "Zu warme Meerestemperaturen", "Störungen", "Gute Forschung"],
        answer: "Müll; Zu warme Meerestemperaturen; Störungen"
      },
      {
        id: "subnautica-q6",
        type: "single",
        prompt: "Was ist ein wichtiger Unterschied zwischen Spiel und Natur?",
        options: ["In der Natur haben Handlungen echte Folgen", "Im Spiel ist alles kälter", "In der Natur gibt es keine Regeln", "Im Spiel darf man nicht forschen"],
        answer: "In der Natur haben Handlungen echte Folgen"
      },
      {
        id: "subnautica-q7",
        type: "single",
        prompt: "Welche Haltung empfiehlt der Text für echte Entdeckungen?",
        options: ["Geduld, Wissen und Respekt", "Eile, Lärm und Risiko", "Nur Angst", "Nur Technik"],
        answer: "Geduld, Wissen und Respekt"
      },
      {
        id: "subnautica-write",
        type: "short",
        prompt: "Schreibe mindestens 50 Wörter: Würdest du lieber eine Welt wie Subnautica oder Monterey Bay erforschen? Vergleiche Gefahr, Schönheit und Verantwortung.",
        options: [],
        answer: "",
        minWords: 50
      }
    ]
  },
  {
    id: "exercise-clash-strategy",
    code: "CLASH5",
    title: "Clash Royale: Strategie auf Deutsch",
    level: "B1",
    passage:
      `Viele Spieler denken bei Clash Royale zuerst an schnelle Reaktionen. Wer schneller klickt, gewinnt. Aber ein guter Spieler weiß, dass Geschwindigkeit nur ein Teil des Spiels ist. Viel wichtiger sind Planung, Geduld und die Frage: Was macht mein Gegner als Nächstes?

Leon spielt seit zwei Jahren Clash Royale. Früher hat er sofort alle Karten gespielt, sobald er genug Elixier hatte. Manchmal gewann er damit schnell, aber oft verlor er nach einem starken Gegenangriff. Heute spielt er ruhiger. Er schaut zuerst, welche Karten der Gegner benutzt. Wenn der Gegner eine teure Karte spielt, wartet Leon kurz und verteidigt mit weniger Elixier. Danach hat er vielleicht einen Vorteil.

Sein Deck hat verschiedene Rollen. Eine Karte ist gut für den Angriff auf den Turm. Eine andere Karte schützt gegen viele kleine Einheiten. Eine dritte Karte stoppt starke Bodentruppen. Leon achtet darauf, dass sein Deck nicht nur aus Lieblingskarten besteht. Lieblingskarten machen Spaß, aber ein Deck braucht Balance. Wenn alle Karten teuer sind, kann man nicht schnell reagieren. Wenn alle Karten billig sind, fehlt manchmal Kraft.

Auch Verlieren gehört zur Strategie. Nach einer Niederlage schaut Leon nicht sofort wütend auf sein Handy. Er fragt sich: Habe ich zu früh angegriffen? Habe ich eine Karte falsch gesetzt? Hatte ich keine Antwort auf eine bestimmte Strategie? Manchmal merkt er, dass nicht der Gegner unfair war, sondern dass sein eigenes Deck ein Problem hatte.

Fair Play ist für Leon wichtig. Er benutzt keine Beleidigungen und lacht nicht über schwächere Spieler. Er findet, dass ein Spiel spannender ist, wenn beide Seiten respektvoll bleiben. Außerdem lernt man mehr, wenn man ruhig bleibt. Wer nur wütend ist, wiederholt dieselben Fehler.

Im Clan spricht Leon mit anderen Spielern über Taktik. Ein Freund sagt: "Du musst nicht jeden Angriff sofort beantworten. Manchmal ist es besser, etwas Schaden zu akzeptieren und dann stärker zurückzukommen." Das klingt zuerst komisch, aber Leon versteht es nach einigen Spielen. Eine gute Entscheidung ist nicht immer die lauteste oder schnellste Entscheidung.

Ein Beispiel hilft ihm besonders. Sein Gegner setzt eine große Angriffskarte auf der linken Seite. Früher hätte Leon sofort alles dort verteidigt. Jetzt schaut er auf sein Elixier und auf die Karten in seiner Hand. Er verteidigt mit zwei kleineren Karten und spart genug Elixier für einen Gegenangriff rechts. Er verliert ein paar Trefferpunkte am Turm, aber danach muss der Gegner selbst verteidigen. Leon gewinnt nicht wegen einer perfekten Karte, sondern wegen eines besseren Plans.

Manchmal schreibt Leon nach einem Spiel eine kurze Notiz: Welche Karte war nützlich? Welche Karte hat gefehlt? So erkennt er Muster. Er trainiert also nicht nur seine Finger, sondern auch seine Aufmerksamkeit.

Am Ende ist Clash Royale für Leon wie Schach mit Tempo. Man braucht Wissen über Karten, aber auch Gefühl für Zeit. Man muss Risiko einschätzen, Fehler akzeptieren und aus Niederlagen lernen. Deshalb findet Leon das Spiel interessant: Es sieht einfach aus, aber gute Strategie ist ziemlich komplex.`,
    timeLimit: 30,
    passageMode: "protected",
    createdAt: "2026-06-28T00:00:00.000Z",
    questions: [
      {
        id: "clash-q1",
        type: "single",
        prompt: "Was ist laut Text wichtiger als nur schnelles Klicken?",
        options: ["Planung und Geduld", "Nur Glück", "Ein großes Handy", "Viele Beleidigungen"],
        answer: "Planung und Geduld"
      },
      {
        id: "clash-q2",
        type: "single",
        prompt: "Was machte Leon früher oft falsch?",
        options: ["Er spielte sofort alle Karten", "Er spielte nie Karten", "Er las nur Bücher", "Er verließ jeden Clan"],
        answer: "Er spielte sofort alle Karten"
      },
      {
        id: "clash-q3",
        type: "multi",
        prompt: "Welche Rollen können Karten in Leons Deck haben?",
        options: ["Angriff auf den Turm", "Schutz gegen kleine Einheiten", "Stopp gegen starke Bodentruppen", "Deutschhausaufgaben schreiben"],
        answer: "Angriff auf den Turm; Schutz gegen kleine Einheiten; Stopp gegen starke Bodentruppen"
      },
      {
        id: "clash-q4",
        type: "single",
        prompt: "Warum braucht ein Deck Balance?",
        options: ["Damit man auf verschiedene Situationen reagieren kann", "Damit alle Karten gleich aussehen", "Damit man nie verteidigt", "Damit der Gegner gewinnt"],
        answer: "Damit man auf verschiedene Situationen reagieren kann"
      },
      {
        id: "clash-q5",
        type: "multi",
        prompt: "Welche Fragen stellt Leon nach einer Niederlage?",
        options: ["Habe ich zu früh angegriffen?", "Habe ich eine Karte falsch gesetzt?", "Hatte ich keine Antwort auf eine Strategie?", "War das Wetter zu kalt?"],
        answer: "Habe ich zu früh angegriffen?; Habe ich eine Karte falsch gesetzt?; Hatte ich keine Antwort auf eine Strategie?"
      },
      {
        id: "clash-q6",
        type: "single",
        prompt: "Warum ist ruhig bleiben nützlich?",
        options: ["Man lernt mehr aus Fehlern", "Man bekommt automatisch mehr Elixier", "Der Gegner darf nicht spielen", "Das Handy wird schneller"],
        answer: "Man lernt mehr aus Fehlern"
      },
      {
        id: "clash-q7",
        type: "single",
        prompt: "Womit vergleicht der Text Clash Royale am Ende?",
        options: ["Mit Schach mit Tempo", "Mit einem Museumsbesuch", "Mit Surfen", "Mit Zugfahren"],
        answer: "Mit Schach mit Tempo"
      },
      {
        id: "clash-write",
        type: "short",
        prompt: "Schreibe mindestens 50 Wörter: Beschreibe eine gute Strategie in einem Spiel, das du kennst. Was muss man planen, und wie sollte man mit Fehlern umgehen?",
        options: [],
        answer: "",
        minWords: 50
      }
    ]
  },
  {
    id: "exercise-japan-germany-california",
    code: "JPNDE6",
    title: "Japan, Deutschland und Kalifornien: Alltag im Vergleich",
    level: "B1",
    passage:
      `Wenn man über Japan, Deutschland und Kalifornien spricht, denkt man schnell an Klischees: Sushi, Brezeln und Strände. Aber der Alltag ist interessanter als solche einfachen Bilder. Für Jugendliche können besonders Schule, Verkehr, Freizeit und Höflichkeit sehr unterschiedlich wirken.

In Kalifornien ist das Auto oft sehr wichtig. Viele Familien fahren zur Schule, zum Training, zum Supermarkt oder zu Freunden. Es gibt natürlich Busse und Züge, aber nicht überall sind sie praktisch. In vielen deutschen Städten können Jugendliche früher allein unterwegs sein, weil es Busse, Straßenbahnen, U-Bahnen oder Züge gibt. Auch Fahrräder spielen eine größere Rolle. In Japan ist öffentlicher Verkehr in vielen Städten ebenfalls sehr wichtig und oft sehr pünktlich. Für einen kalifornischen Jugendlichen kann das Gefühl neu sein, ohne Eltern mit dem Zug durch die Stadt zu fahren.

Auch Schule funktioniert anders. In Kalifornien spielt die High School eine große Rolle für Sport, Clubs und soziale Aktivitäten. In Deutschland gibt es auch AGs und Sport, aber viele Hobbys passieren außerhalb der Schule, zum Beispiel im Verein. In Japan bleiben manche Schüler nach dem Unterricht für Clubs länger in der Schule. Das kann spannend sein, aber auch anstrengend.

Beim Essen sieht man ebenfalls Unterschiede. In Kalifornien findet man sehr viele internationale Restaurants. Deutschland hat Brot, Bäckereien, Döner, regionale Gerichte und natürlich auch internationale Küche. Japan hat eine starke Esskultur mit Reis, Nudeln, Bento und vielen kleinen Regeln am Tisch. Trotzdem essen Jugendliche überall auch schnelle Snacks, Süßigkeiten und Essen aus anderen Ländern.

Höflichkeit ist ein weiteres Thema. In Japan sind bestimmte Formen von Respekt sehr sichtbar, zum Beispiel beim Begrüßen oder in der Bahn. In Deutschland ist Höflichkeit oft direkter. Menschen sagen klar, was sie denken, und das kann für Besucher zuerst streng wirken. In Kalifornien klingt Kommunikation manchmal lockerer und freundlicher, aber auch dort gibt es Regeln, die man lernen muss.

Beim Einkaufen merkt man solche Unterschiede schnell. In Deutschland packen Kunden im Supermarkt ihre Sachen oft sehr schnell ein, weil die nächste Person wartet. In Japan achten viele Menschen besonders darauf, andere nicht zu stören. In Kalifornien kann ein Gespräch an der Kasse lockerer sein. Keines dieser Systeme ist automatisch besser. Man muss nur verstehen, welche Erwartungen die Menschen haben. Dann fühlt man sich sicherer und macht weniger Missverständnisse.

Auch Freizeit kann verschieden aussehen. Ein Jugendlicher in Kalifornien trifft Freunde vielleicht in einer Mall, am Strand oder online. In Deutschland trifft man sich oft in der Stadt, im Park oder im Sportverein. In Japan können Schulclubs einen großen Teil des Nachmittags füllen.

Für Jugendliche ist die wichtigste Frage vielleicht: Wie frei bin ich im Alltag? In Kalifornien hängt Freiheit oft davon ab, ob man gefahren wird oder selbst fahren kann. In Deutschland und Japan kann guter öffentlicher Verkehr mehr Selbstständigkeit geben. Dafür gibt es andere Erwartungen: pünktlich sein, Regeln beachten, Rücksicht nehmen.

Am Ende ist kein Ort einfach besser. Jeder Ort hat Vorteile und Probleme. Wer vergleicht, lernt nicht nur etwas über andere Länder, sondern auch über das eigene Leben.`,
    timeLimit: 30,
    passageMode: "protected",
    createdAt: "2026-06-28T00:00:00.000Z",
    questions: [
      {
        id: "japan-q1",
        type: "single",
        prompt: "Welche drei Klischees nennt der Text am Anfang?",
        options: ["Sushi, Brezeln und Strände", "Fußball, Höhlen und Karten", "Autos, Hunde und Bücher", "Berge, Vulkane und Monde"],
        answer: "Sushi, Brezeln und Strände"
      },
      {
        id: "japan-q2",
        type: "multi",
        prompt: "Welche Verkehrsmittel nennt der Text für deutsche Städte?",
        options: ["Busse", "Straßenbahnen", "U-Bahnen", "Raumschiffe"],
        answer: "Busse; Straßenbahnen; U-Bahnen"
      },
      {
        id: "japan-q3",
        type: "single",
        prompt: "Was ist in Kalifornien oft sehr wichtig?",
        options: ["Das Auto", "Die Burg", "Der Marktplatz", "Der Kelpwald"],
        answer: "Das Auto"
      },
      {
        id: "japan-q4",
        type: "single",
        prompt: "Wo passieren in Deutschland viele Hobbys laut Text?",
        options: ["Außerhalb der Schule, zum Beispiel im Verein", "Nur im Klassenzimmer", "Nur im Internet", "Immer im Supermarkt"],
        answer: "Außerhalb der Schule, zum Beispiel im Verein"
      },
      {
        id: "japan-q5",
        type: "multi",
        prompt: "Welche Beispiele nennt der Text für japanische Esskultur?",
        options: ["Reis", "Nudeln", "Bento", "Brezelpflicht"],
        answer: "Reis; Nudeln; Bento"
      },
      {
        id: "japan-q6",
        type: "single",
        prompt: "Wie beschreibt der Text deutsche Höflichkeit?",
        options: ["Oft direkter", "Immer leise", "Ohne Regeln", "Nur schriftlich"],
        answer: "Oft direkter"
      },
      {
        id: "japan-q7",
        type: "single",
        prompt: "Was lernt man laut Text durch Vergleiche?",
        options: ["Etwas über andere Länder und das eigene Leben", "Dass ein Ort immer perfekt ist", "Dass Verkehr unwichtig ist", "Dass Schule überall gleich ist"],
        answer: "Etwas über andere Länder und das eigene Leben"
      },
      {
        id: "japan-write",
        type: "short",
        prompt: "Schreibe mindestens 50 Wörter: Vergleiche deinen Alltag mit Deutschland oder Japan. Was wäre für dich praktisch, spannend oder schwierig?",
        options: [],
        answer: "",
        minWords: 50
      }
    ]
  }
];

const defaultState = {
  assignments: SEEDED_ASSIGNMENTS,
  activeAssignmentId: SEEDED_ASSIGNMENTS[0].id,
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
  studentCodeRow: document.querySelector("#student-code-row"),
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
    const assignments = mergeSeededAssignments(Array.isArray(parsed.assignments) ? parsed.assignments : []);
    const activeAssignmentId = assignments.some((assignment) => assignment.id === parsed.activeAssignmentId)
      ? parsed.activeAssignmentId
      : assignments[0]?.id || null;
    return {
      assignments,
      activeAssignmentId,
      submissions: Array.isArray(parsed.submissions) ? parsed.submissions : []
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function mergeSeededAssignments(assignments) {
  const assignmentsById = new Map(assignments.map((assignment) => [assignment.id, assignment]));
  const mergedSeeds = SEEDED_ASSIGNMENTS.map((assignment) => assignmentsById.get(assignment.id) || assignment);
  const customAssignments = assignments.filter(
    (assignment) => !SEEDED_ASSIGNMENTS.some((seed) => seed.id === assignment.id)
  );
  return [...mergedSeeds, ...customAssignments];
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
    state = structuredClone(defaultState);
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
      state.activeAssignmentId ||= assignment.id;
    }

    saveState();
    editingId = null;
    resetForm();
    renderAssignments();
    renderStudentEntry();
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
  const previous = state.assignments.find((item) => item.id === editingId);
  const previousQuestions = new Map((previous?.questions || []).map((question) => [question.id, question]));
  const questions = [...els.questionsList.querySelectorAll(".question-card")]
    .map((card) => {
      const type = card.querySelector(".question-type").value;
      const options = card
        .querySelector(".question-options")
        .value.split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
      const previousQuestion = previousQuestions.get(card.dataset.questionId);
      return {
        id: card.dataset.questionId || crypto.randomUUID(),
        type,
        prompt: card.querySelector(".question-prompt").value.trim(),
        options: type === "short" ? [] : options,
        answer: card.querySelector(".question-answer").value.trim(),
        ...(previousQuestion?.minWords ? { minWords: previousQuestion.minWords } : {})
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
      (assignment) => {
        const isActive = assignment.id === state.activeAssignmentId;
        return `
      <article class="assignment-item ${isActive ? "is-active-assignment" : ""}">
        <h3>${escapeHtml(assignment.title)}</h3>
        <p class="assignment-meta">${isActive ? "Active for students · " : ""}${assignment.level ? `${assignment.level} · ` : ""}Code ${assignment.code} · ${assignment.questions.length} questions · ${assignment.timeLimit} min</p>
        <div class="assignment-actions">
          <button class="primary-button compact-button" data-action="set-active" data-id="${assignment.id}" type="button" ${isActive ? "disabled" : ""}>${isActive ? "Active" : "Set active"}</button>
          <button class="secondary-button" data-action="edit" data-id="${assignment.id}" type="button">Edit</button>
          <button class="secondary-button" data-action="student-link" data-id="${assignment.id}" type="button">Student link</button>
          <button class="ghost-button" data-action="copy-code" data-id="${assignment.id}" type="button">Copy code</button>
          <button class="ghost-button danger" data-action="delete" data-id="${assignment.id}" type="button">Delete</button>
        </div>
      </article>
    `;
      }
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

  if (action === "set-active") {
    state.activeAssignmentId = id;
    saveState();
    renderAssignments();
    renderStudentEntry();
    els.studentCode.value = assignment.code;
    els.sessionStatus.textContent = `"${assignment.title}" is active for the student page.`;
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
    if (state.activeAssignmentId === id) {
      state.activeAssignmentId = state.assignments[0]?.id || null;
    }
    saveState();
    renderAssignments();
    renderStudentEntry();
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
  state.activeAssignmentId = assignment.id;
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

  renderStudentEntry();
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
  const studentName = els.studentName.value.trim();
  const assignment = getStudentAssignment();

  if (!assignment) {
    els.sessionStatus.textContent = "No active assignment found.";
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
    questionOrder: [
      ...shuffle(assignment.questions.filter((question) => question.type !== "short").map((question) => question.id)),
      ...assignment.questions.filter((question) => question.type === "short").map((question) => question.id)
    ],
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

function getStudentAssignment() {
  const activeAssignment = state.assignments.find((item) => item.id === state.activeAssignmentId);
  if (activeAssignment) return activeAssignment;

  const code = els.studentCode.value.trim().toUpperCase();
  if (!code) return null;
  return state.assignments.find((item) => item.code === code) || null;
}

function renderStudentEntry() {
  const assignment = getStudentAssignment();
  if (els.studentCodeRow) {
    els.studentCodeRow.classList.add("hidden");
  }
  if (assignment) {
    els.studentCode.value = assignment.code;
    els.sessionStatus.textContent = `Active exercise: ${assignment.title}`;
  }
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
    const minWordsText = question.minWords ? `<p class="assignment-meta">Minimum ${question.minWords} words.</p>` : "";
    return `
      <article class="question-card">
        <p class="eyebrow">Question ${index + 1}</p>
        <h3>${escapeHtml(question.prompt)}</h3>
        ${minWordsText}
        <textarea data-question-id="${question.id}" data-min-words="${question.minWords || ""}" rows="5" placeholder="Answer in your own words"></textarea>
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

  if (reason !== "timeout" && assignment) {
    const wordError = getWordCountError(assignment, activeSession.answers);
    if (wordError) {
      renderSessionWarning(wordError);
      return;
    }
  }

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

function getWordCountError(assignment, answers) {
  const writingQuestion = assignment.questions.find((question) => question.type === "short" && question.minWords);
  if (!writingQuestion) return "";

  const answer = answers[writingQuestion.id] || "";
  const wordCount = countWords(answer);
  if (wordCount >= writingQuestion.minWords) return "";

  return `The writing section needs at least ${writingQuestion.minWords} words. Current count: ${wordCount}.`;
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

function countWords(value) {
  return String(value)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
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
