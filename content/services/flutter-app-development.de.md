---
title: "Flutter App Entwicklung"
heading: "Flutter Agentur für App Entwicklung"
seo_title: "Flutter Agentur für App Entwicklung | Tapped"
description: "Flutter Agentur aus München: Apps für iOS, Android und Web aus einer Codebasis, von der Migration nativer Apps bis zum Store Release. Deutschlandweit."
summary: "Cross Platform Apps für iOS, Android und Web aus einer Codebasis. Deine Flutter Agentur für den Weg vom ersten Prototyp bis zum Release im Store."
weight: 1
translationKey: service-flutter
trust: true
toc: true
relatedWork:
  - /work/vvs-mobil
  - /work/fcbinside
  - /work/aurum-tools
faq:
  - question: "Was kostet eine Flutter App?"
    answer: "Das entscheidet der Umfang, nicht das Framework: wie viele Screens, wie viel Backend und Drittanbieter-Integration, ob Barrierefreiheit und White Label gefordert sind, und ob du einen Prototyp brauchst oder ein Produkt, das sich jahrelang in zwei Stores behaupten muss. Flutter verändert eher die Form der Rechnung als die Summe. Du zahlst den Client größtenteils einmal statt zweimal, und danach pflegst du eine Codebasis statt zwei. Nach einem ersten Gespräch nennen wir dir eine Spanne für deinen Umfang."
  - question: "Wie lange dauert die Entwicklung einer Flutter App?"
    answer: "Ehrlich gesagt entscheidet das der Umfang, nicht Flutter. Es geht schneller, wenn das Backend schon steht, Entscheidungen in derselben Woche getroffen werden und der Umfang auch kleiner werden darf. Es dauert länger durch Store Review, native Integrationen, die sich vorher niemand angesehen hat, und Barrierefreiheit, die am Ende nachgerüstet statt von Anfang an mitgedacht wird."
  - question: "Ist Flutter so schnell wie eine native App?"
    answer: 'Für fast jedes Produkt ja. Release Builds werden zu nativem ARM Maschinencode kompiliert, und Impeller ist inzwischen der Standard-Renderer auf iOS und Android. Nativ gewinnt noch bei aufwendigen Kamera- und Video-Pipelines, bei Teilen von AR und bei enger Arbeit am Plattform-SDK. Genau diese Teile können innerhalb einer Flutter App nativ bleiben, so wie bei [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}).'
  - question: "Flutter oder React Native?"
    answer: "Für die meisten Produkte Flutter. React Native bildet deine Oberfläche auf die Komponenten der Plattform ab, dadurch laufen iOS und Android genau in den Details auseinander, auf die deine Designer achten. Flutter zeichnet jeden Pixel selbst. Deshalb bleibt das Produkt überall identisch, eigene Komponenten und Animationen werden nicht zum Kampf, und das Ergebnis lässt sich mit automatisierten Screenshot-Tests festhalten. React Native lohnt sich vor allem, wenn die vorhandene Stärke deines Teams React und JavaScript ist und du in diesem Markt weiter einstellen willst."
  - question: "Kann eine Flutter App nativen iOS und Android Code nutzen?"
    answer: 'Ja, und ernsthafte Apps tun das meistens. Bei [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) sind Ticket Shop und Location APIs nativ geblieben, während Flutter die Oberfläche zeichnet. Plattformcode bleibt da, wo er hingehört, und eine funktionierende native SDK-Integration wird nicht aus Konsistenzgründen neu geschrieben.'
  - question: "Nutzt ihr KI, um unsere App zu entwickeln?"
    answer: "Ja, und wir gehen offen damit um. Wir arbeiten täglich mit Coding-Agents: Sie schreiben Code, führen Tests aus, reviewen Diffs und übernehmen Recherche, die sonst Tage kosten würde. Was sie nicht tun: entscheiden, was gebaut wird, oder etwas ungeprüft ausliefern. Jede Änderung verantwortet die Person, deren Name auf dem Commit steht, und Architektur bleibt eine menschliche Entscheidung. Welche Tools deinen Code sehen dürfen, klären wir vorher. Wir geben dieses Vorgehen außerdem in KI-Workshops an andere Entwicklungsteams weiter."
  - question: "Entwickelt ihr ausschließlich Flutter Apps?"
    answer: 'Wir sind Experten auf diesem Gebiet, entwickeln aber auch die Systeme drum herum und integrieren diese in das Produkt. [Hier]({{< relref "/about" >}}#technologies) siehst du, welche Technologien wir noch verwenden.'
  - question: "Funktionieren In App Käufe und Abos mit Flutter?"
    answer: 'Ja. Flutter spricht StoreKit und Google Play Billing aus einer Dart Codebasis, und der Bezahlvorgang fühlt sich nativ an. [AurumTools]({{< relref "/work/aurum-tools.md" >}}) läuft so: Goldschmiede schließen ihr Abo in der iOS und Android App ab, und dasselbe Produkt läuft zusätzlich im Browser.'
  - question: "Eignet sich Flutter für barrierefreie Apps nach BFSG?"
    answer: 'Flutter kann barrierefreie Apps, aber nicht von selbst. Widgets brauchen Semantics, Fokusmanagement und Alternativen zu Gesten, und das muss getestet und nicht angenommen werden. Bei [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) haben wir genau das umgesetzt, abgesichert durch automatisierte Screenshot-Tests, in einer ÖPNV App, in der Barrierefreiheit eine Produktanforderung war.'
  - question: "Eignet sich Flutter für White Label Apps?"
    answer: 'Ja, das ist einer der klarsten Vorteile. [FCBinside]({{< relref "/work/fcbinside.md" >}}), BVBWLD und SchalkeTOTAL laufen aus einer Dart Codebasis mit unterschiedlichem Branding, eigenen Feeds und eigenen Store Einträgen. VVS Mobil läuft auf derselben technischen Basis landesweit als bwegt Bus & Bahn.'
  - question: "Wem gehört der Quellcode?"
    answer: "Dir. Wir übergeben das Repository und das Wissen, damit du weiterliefern kannst, mit uns oder mit deinem eigenen Team."
  - question: "Wo sitzt Tapped?"
    answer: "In München. Wir liefern mit Teams in ganz Deutschland und international."
---

Flutter ist Googles UI Framework: eine Codebasis für Apps auf iOS, Android und Web, mit nativer Performance und vollem Zugriff auf Plattformfunktionen wie Push, Location oder In App Payments. Flutter entwickeln wir seit der frühen Beta, native Apps für iOS und Android schon davor. In dem Gebiet sind wir Experten.

Tapped ist eine Flutter Agentur aus München, gelistet im [offiziellen Flutter Consultant Verzeichnis](https://flutter.dev/consultants), und arbeitet mit Teams in ganz Deutschland und international. Über unsere Apps im Store kommen wir zusammen auf mehr als 1,4 Millionen Downloads und über 58.000 Bewertungen, im Schnitt 4,3 ★.

## Warum Flutter

- Sehr viel gemeinsamer Code auf iOS, Android und Web: weniger Aufwand in Implementierung, Planung neuer Features und Tests
- Produkte laufen nicht auseinander, Features werden schneller geliefert, auf allen Plattformen gleichzeitig
- Plattformfunktionen wie Push Notifications, Location, In App Payments oder Ads sind kein Problem
- Flutter stellt ein sehr gutes Test Framework bereit, damit auch komplexe Produkte nach Änderungen problemlos funktionieren
- Eine Codebasis heißt nach dem Launch auch eine Wartung statt zwei Release-Zyklen, die synchron bleiben müssen

## Warum Flutter bei Design und Konsistenz gewinnt

Flutter übernimmt nicht die UI-Komponenten der Plattform. Es zeichnet jeden Pixel selbst, mit einer eigenen Rendering-Engine. Fast jeder praktische Vorteil hier unten folgt aus genau dieser einen Tatsache.

**Dein Produkt ist überall dasselbe Produkt.** iOS, Android und Web rendern aus denselben Widgets. Es gibt keine Android-Version, die „nah genug dran“ ist, und kein Feature, das je nach Gerät still und heimlich anders aussieht.

**Deine Marke schlägt die Standards der Plattform.** Flutter ist nicht an den Standard-Look von Android oder iOS gebunden. Corporate Design, Typografie, Abstände, Motion und Komponenten werden so umgesetzt, wie deine Richtlinien sie vorgeben, statt mit dem angenähert zu werden, was die Plattform zufällig mitbringt.

**Pixelgenau, und zwar dauerhaft.** Einen Screen einmal richtig hinzubekommen ist der einfache Teil. Wir halten das Ergebnis mit automatisierten Screenshot-Tests fest, damit das Detail auch das nächste Release übersteht. Genau so läuft [FCBinside]({{< relref "/work/fcbinside.md" >}}) als drei gebrandete Apps, und genau so erscheint VVS Mobil landesweit als bwegt Bus & Bahn, ohne dass die Varianten auseinanderlaufen.

**Niemand muss deinen Designern absagen.** Die übliche Antwort auf ein ambitioniertes Design lautet, dass es diese Komponente auf einer der Plattformen nicht gibt. In Flutter sind das eigene Steuerelement, der Übergang und die Animation alle einfach Widgets. Design bleibt eine Produktentscheidung, statt auf den kleinsten gemeinsamen Nenner zweier Plattform-Toolkits heruntergehandelt zu werden.

**Ein Designsystem über alle Bildschirmgrößen.** Smartphone, Tablet und Browser teilen sich dieselben Komponenten, dein Produkt braucht also keine zweite Oberfläche für den Browser. [AurumTools]({{< relref "/work/aurum-tools.md" >}}) läuft genau so: dieselben Werkzeuge auf dem Handy an der Werkbank und im Browser im Kundengespräch.

## Was wir mit Flutter bauen

Nicht jede App hat denselben schwierigen Teil. Das sind die Produktarten, die wir tatsächlich ausgeliefert haben:

- **Apps mit öffentlicher Reichweite.** [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) bedient über 600.000 Nutzerinnen und Nutzer in der Region Stuttgart: Live-Verbindungen, Ticketing, Karten und Echtzeit-Störungsdaten, bewertet mit 4,4 ★ im App Store.
- **White Label Produkte.** Eine Codebasis, mehrere Marken. [FCBinside]({{< relref "/work/fcbinside.md" >}}) läuft als drei Fußball-Apps, VVS Mobil landesweit als bwegt Bus & Bahn.
- **Apps mit Zwilling im Browser.** [AurumTools]({{< relref "/work/aurum-tools.md" >}}) läuft auf iOS, Android und im Web aus einer Codebasis, inklusive In App Abos.
- **Content- und Medien-Apps.** Hochfrequente Feeds auf einem bestehenden CMS, mit nativen Ad SDKs, Push und Video statt einer WebView um die Website.
- **Produkte mit echter Integrationsarbeit.** Backends, Identity, Payment, native SDKs und all die Systeme, mit denen die App sprechen muss.

## Wie ein Projekt abläuft

{{< steps >}}
{{< step title="Erstgespräch und Umfang" >}}
Wir klären, was das Produkt können muss, was schon existiert und worin der schwierige Teil wirklich besteht. Wenn die ehrliche Antwort ist, dass du uns nicht brauchst oder Flutter nicht brauchst, hörst du das in diesem Gespräch und nicht nach einer Discovery-Rechnung.
{{< /step >}}
{{< step title="Bewertung und Angebot" >}}
Wir bewerten dein Projekt und machen dir ein Angebot, das alles abdeckt, was es wirklich braucht: die App, das Backend, die UX und alles drumherum. Ein Angebot für das ganze Produkt, statt eines für den Client und der Rest wird später besprochen.
{{< /step >}}
{{< step title="Entwicklung in kurzen Zyklen" >}}
Features kommen in Scheiben, die du wirklich benutzen kannst, auf beiden Plattformen gleichzeitig. Tests, Reviews und CI gehören zur Arbeit, nicht in eine Phase am Ende. Du siehst durchgehend Builds, nicht eine Demo zum Schluss.
{{< /step >}}
{{< step title="Store Release" >}}
Einreichung im App Store und Play Store, Review, stufenweiser Rollout, Crash- und Performance-Monitoring. Das Store Review ist der eine Teil des Zeitplans, den niemand kontrolliert, also planen wir darum herum, statt so zu tun, als gäbe es ihn nicht.
{{< /step >}}
{{< step title="Nach dem Launch" >}}
OS-Versionen ziehen weiter, Stores ändern ihre Richtlinien, und Nutzer finden die Wege, die niemand getestet hat. Das kann mit uns weitergehen über [Analyse, Wartung und Support]({{< relref "/services/maintenance-support.md" >}}), oder mit deinem eigenen Team auf einem Repository, das für die Übergabe geschrieben wurde.
{{< /step >}}
{{< /steps >}}

## Wie wir mit KI entwickeln

Wir sind ein KI-natives Team. Coding-Agents gehören zu unserem Alltag und nicht zu einem Pilotprojekt, das nebenher läuft. Sie schreiben Code, führen Tests aus, reviewen Diffs und arbeiten sich durch Plattform-Dokumentation, Store-Bewertungen und Produkte des Wettbewerbs, während ein klassisches Team noch das erste Ticket schneidet. Das ist ein echter Vorsprung, und du bezahlst dafür nicht die Lernkurve von irgendjemandem.

In der Praxis heißt das: Wir bauen deutlich schneller, und genau das senkt die Gesamtkosten eines Projekts. Was früher Monate gedauert hat, lässt sich heute viel einfacher und schneller umsetzen. Das verändert auch, wie Produktentscheidungen entstehen: Wir können deutlich schneller iterieren, neue Ideen direkt in laufender Software ausprobieren und genauso leicht wieder verwerfen, wenn sie sich nicht bewähren.

Es heißt nicht, dass ein Agent dein Produkt ausliefert. Alles, was in deinem Repository landet, hat die Person gelesen und verantwortet, deren Name auf dem Commit steht. Architektur, native Grenzen, Barrierefreiheit und jede Entscheidung, die teuer rückgängig zu machen ist, bleiben bei uns. Agents sind schnell bei Arbeit, die bereits gut verstanden ist, und ausgesprochen unzuverlässig darin, zu entscheiden, was überhaupt gebaut werden sollte. Unsere Erfahrung ist das, was eine ganze Flotte von Agents steuert, und beschleunigt damit Entwicklung und Qualität zugleich.

Wo das in deinem Projekt ankommt:

- **Recherche vor der ersten Zeile Code.** Apps des Wettbewerbs, Store-Bewertungen, Plattform-APIs und die Dokumentation deines Backends, gelesen und zusammengefasst in Stunden statt Wochen.
- **Mehr Review, nicht weniger.** Automatisierte Reviews laufen in der Pipeline neben unseren, damit die offensichtlichen Funde weg sind, bevor ein Mensch Aufmerksamkeit darauf verwendet.
- **Tests, die tatsächlich geschrieben werden.** Widget- und Integrationstests sind das Erste, was ein Team unter Druck weglässt, und eines der Dinge, in denen Agents verlässlich gut sind.
- **KI im Produkt, wenn sie dort hingehört.** Wenn deine App selbst KI-Features braucht, ist das für uns kein Neuland.

Wir bringen es auch anderen bei. Unternehmen holen uns, um Agents in ihren eigenen Entwicklungsteams und auf ihren eigenen Repositories auszurollen. Das ist unser Angebot [KI-Workshops]({{< relref "/services/ai-workshops.md" >}}). Dafür engagiert zu werden, etwas beizubringen, ist ein fairer Test, ob ein Team es wirklich tut.

## Native iOS und Android Apps zu Flutter

Wenn du bereits zwei native Apps hast, ist die übliche Frage die Migration. Zwei Codebasen bedeuten zwei Release-Zyklen und jede Änderung doppelt. Wir haben diese Migration bei mehreren Projekten gemacht, unter anderem bei [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) und beim [VVS Radroutenplaner]({{< relref "/work/vvs-cycle-planner.md" >}}), beide mit MENTZ für den VVS.

Zwei native Apps zu ersetzen ist eine Produktentscheidung, keine Framework-Demo. Es gibt vier ehrliche Wege:

- **Komplette Ablösung.** Richtig, wenn die Kernflows ohnehin überarbeitet werden und beide Apps auseinandergelaufen sind. Ein großes Release, mit dem Risiko gebündelt an einem Punkt.
- **Feature für Feature.** Richtig, wenn die Oberfläche groß ist und dein Team Flutter erst lernen muss. Zwei Stacks laufen eine Weile nebeneinander, das ist langsamer, aber deutlich risikoärmer.
- **Flutter in der nativen App.** Richtig, wenn nur Teile des Produkts zusammenwachsen sollen oder native SDK-Arbeit bleiben muss, wo sie ist. Mehr Aufwand im Build, aber kein Neuschreiben von dem, was funktioniert.
- **Nativ bleiben.** Richtig, wenn Flutter eine Modeentscheidung wäre und keine günstigere, sicherere Codebasis. Manchmal ist das die Antwort, und dann sagen wir es.

Ein Pilot in deiner echten Architektur sagt mehr als ein Prototyp auf der grünen Wiese, der nie mit deinem Backend sprechen muss. Bei VVS Mobil sind Ticket Shop und Location APIs nativ geblieben, und das Ergebnis hält seine Bewertung in beiden Stores.

Ob das bei deinem Produkt Sinn ergibt, können wir in einem [kurzen Gespräch]({{< relref "/contact" >}}) prüfen. Wenn du die Entscheidung schriftlich und priorisiert willst, ist das eine [technische Beratung mit Audit]({{< relref "/services/technical-consulting.md" >}}).

## Accessibility mit Flutter

Flutter kann barrierefreie Apps. Es tut das nicht von selbst. Widgets brauchen Semantics: Labels, Rollen und Live Updates, damit VoiceOver unter iOS und TalkBack unter Android sauber funktionieren. Das gilt besonders bei dynamischen Inhalten, wenn sich Daten ändern oder neue Informationen dazukommen.

Manche Bedienweisen brauchen eine Alternative zur Geste: Wischen, Drag and Drop oder komplexe Screens mit viel Information auf einmal. Fokusmanagement, Tastaturbedienung, große Schrift und Kontrast müssen von Anfang an mitgedacht werden.

Am besten soll all das auch noch automatisiert getestet werden, denn sind wir mal ehrlich: Wie oft testet man denn alles von TalkBack bis hin zu Keyboard support? Bei [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) haben wir genau das umgesetzt: Abfahrten, Verbindungsdetails, Störungen und Navigation für Screenreader aufbereitet, abgesichert durch automatisierte Screenshot-Tests, die das detaillierte UI festhalten.

Für viele Produkte ist Barrierefreiheit inzwischen auch eine rechtliche Frage, über den [European Accessibility Act und das BFSG](https://www.gesetze-im-internet.de/bfsg/). Dann ist sie keine späte Schicht, sondern Teil der Architektur.

## Flutter Web {#flutter-web}

Ja, Flutter Web ist stabil und produktionsreif. Sinn macht es, wenn das Produkt schon als App existiert oder zusätzlich im Browser laufen soll, ohne ein zweites Frontend zu pflegen. Responsive Layouts, dieselbe Codebasis, JavaScript Interop wenn nötig.

Weniger sinnvoll ist Flutter Web als Marketing Website, die für SEO ranken soll. Flutter rendert eine App im Browser, keine klassische HTML Seite mit crawlbarer Struktur, die von einer Suchmaschine gefunden wird. Für eingeloggte Tools, Dashboards oder Begleit-Apps im Browser funktioniert es gut. [AurumTools]({{< relref "/work/aurum-tools.md" >}}) läuft genau so: dieselben Werkstatt-Rechner auf iOS, Android und unter aurumtools.com.

## Was eine Flutter App kostet

Wir veröffentlichen keine Preisliste, weil die Zahl ohne Kenntnis des Produkts erfunden wäre. Was wir dir sagen können, ist, was sie bewegt:

- **Umfang.** Die Zahl der Screens zählt weniger als die Zahl der Zustände hinter jedem Screen: leer, ladend, Fehler, offline, ausgeloggt.
- **Integration.** Backend, Identity, Payment und native SDKs sind meistens ein größerer Anteil der Arbeit als die Oberfläche.
- **Echtzeit und Offline.** Live-Daten, Hintergrund-Updates und Offline-Verhalten sind die Stellen, an denen Schätzungen daneben liegen.
- **Barrierefreiheit und White Label.** Beides ist günstig, wenn es von Anfang an mitgeplant wird, und teuer, wenn es nachgerüstet wird.
- **Wen du danach brauchst.** Ein Prototyp und ein Produkt, das sich jahrelang in zwei Stores behaupten muss, sind zwei verschiedene Einkäufe.

Flutter macht den ersten Build nicht kostenlos. Es verändert, was du beim zweiten Mal zahlst: ein Client, der erweitert wird, ein Release-Zyklus, ein Wartungsbudget statt zwei. Nach einem ersten Gespräch nennen wir dir eine Spanne für deinen Umfang, und sagen dir lieber, dass ein Projekt zu klein für uns ist, als ein Angebot passend zu rechnen.

## Arbeiten in deinem Team

Wir übernehmen nicht nur ganze Projekte. In vielen Produkten haben wir innerhalb eines bestehenden Teams gearbeitet, und anderen Teams aus der Blockade zu helfen ist inzwischen ein eigener Teil unserer Arbeit.

Manchmal geht es schlicht um Durchsatz: erfahrene Flutter-Entwickler, die neben deinen Leuten Features liefern, damit mehr und schneller rauskommt. Genauso oft liegt der eigentliche Engpass aber nicht an der Teamgröße, sondern an der Struktur. Wie Arbeit geplant und geschnitten wird. Wie lange ein Pull Request liegt, bevor ihn jemand reviewt. Wie Releases laufen und wer sie überhaupt machen darf. Welche Ecke der Codebasis alle stillschweigend meiden. Das sind die Dinge, die ein Team langsam wirken lassen, egal wie viele Entwickler du dazustellst.

Weil wir mit so vielen unterschiedlichen Kunden gearbeitet haben, kennen wir die meisten Probleme, die Teams heute haben, schon und wissen gut, welches man zuerst angeht. Wir können in dein Team kommen, um zu liefern, um es wieder in Fahrt zu bringen, oder beides.

Du willst wissen, ob Flutter zu deinem Produkt passt, oder wo dein Team gerade wirklich Zeit verliert? [Buch ein kurzes Gespräch]({{< relref "/contact" >}}), und wir sagen es dir, auch wenn die Antwort ist, dass du uns nicht brauchst.
