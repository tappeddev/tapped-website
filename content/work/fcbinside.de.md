---
title: "FCBinside"
heading: "FCBinside: native Flutter-Apps für ballnews media"
seo_title: "FCBinside Flutter-App — 10.000+ Installationen, 4,4★ | Tapped"
description: "Tapped hat die FCBinside-Flutter-App für ballnews media entwickelt — und denselben White-Label-Client für BVBWLD und SchalkeTOTAL. Native News, Werbung und Push, kein Website-Wrapper."
summary: "Tägliche FC-Bayern-News in einer nativen Flutter-App — und derselbe White-Label-Client für BVBWLD und SchalkeTOTAL."
weight: 2
featured: true
translationKey: work-fcbinside
image: img/works/fcb_inside.webp
image2x: img/works/fcb_inside@2x.webp
image_alt: "FCBinside Flutter-App mit FC-Bayern-News, Transfers und Podcasts"
client: "ballnews media GmbH"
stack:
  - Flutter
  - Dart
  - WordPress
external:
  - "https://fcbinside.de/"
  - "https://bvbwld.de/"
  - "https://schalketotal.de/"
relatedService: /services/flutter-app-development
stats:
  - value: "10.000+"
    label: "Google-Play-Installationen für FCBinside"
    note: "Angabe im Play Store, Stand August 2026."
  - value: "4,4 ★"
    label: "Bewertung im App Store (iOS)"
    note: "480 Bewertungen in Deutschland, Stand August 2026."
  - value: "3 Apps"
    label: "White-Label-Flutter-Clients: FCBinside, BVBWLD und SchalkeTOTAL"
statsSource:
  text: "Apple App Store (Deutschland) und Google Play, August 2026"
  url: "https://apps.apple.com/de/app/fcbinside/id1603207211"
highlights:
  - tag: "White-Label"
    title: "Ein Flutter-Client, drei Fußballmarken"
    body: "FCBinside, BVBWLD und SchalkeTOTAL teilen dieselbe Dart-Codebasis. Branding, Feeds und Store-Listings ändern sich; das Produkt wird nicht dreimal neu entwickelt."
  - tag: "Native Ads"
    title: "Ad-SDKs im Flutter-Feed"
    body: "Display-Werbung sitzt im nativen Client, nicht in einem WebView. Jede Marke kann eigene Ad-Units fahren. Ein In-App-Abo schaltet sie ab."
  - tag: "Kein Wrapper"
    title: "Direkte, unkomplizierte Anbindung an WordPress"
    body: "Die Redaktionsseiten bleiben WordPress. Die Apps sprechen die REST-API an, zeichnen ihre eigene UI und liefern Push, Video und Store-Billing als Plattformfunktionen."
faq:
  - question: "Kann man Werbung und Ad-SDKs in eine Flutter-App integrieren?"
    answer: "Ja. Flutter kann dieselben nativen Ad-SDKs hosten, die man in einer Swift- oder Kotlin-App nutzen würde — Banner, Interstitials und Native Ads im Feed. Bei FCBinside haben wir Werbung in den Flutter-Client gelegt und ein werbefreies Abo darübergesetzt. White-Label-Varianten behalten eigene Ad-Units und Store-Produkte. Ein Website-Wrapper kann das nicht sauber: Viewability, Mediation und Store-Billing erwarten eine echte App, kein HTML in einem WebView."
  - question: "Warum nicht die bestehende Website in einem WebView verpacken?"
    answer: "Weil die Website schon die Website ist. Ein Wrapper lädt Artikel nach und macht Push, Offline-Lesen und Werbung zur Nebensache. Das WordPress-CMS bleibt; die App ist ein eigener Client, kein Browserfenster um fcbinside.de."
  - question: "Eignet sich Flutter für White-Label-News-Apps?"
    answer: "Ja. So laufen FCBinside, BVBWLD und SchalkeTOTAL. Eine Architektur, drei Marken: Farben, Content-Quellen, Notification-Texte und Store-Listings unterscheiden sich. Golden Tests und ein gemeinsames Widget-Set halten Feed, Artikelansicht und Settings zusammen."
  - question: "Kann eine Flutter-News-App auf einem WordPress-Backend laufen?"
    answer: "Ja. FCBinside publiziert bereits auf WordPress. Die App liest die REST-API für Stories, Medien und Audio, statt die Website zu laden. Push bleibt eine native Funktion; das CMS ersetzt das nicht."
---

## Eine hochfrequente FC-Bayern-News-App

FCBinside ist ein hochfrequentes News-Produkt: Transfers, Spielanalysen, kurze Stories, Video und Podcasts. Fans erwarten, dass sich der Feed auf dem Handy so aktuell anfühlt wie die Website — ohne auf zwei native Teams zu warten, und ohne die WordPress-Seite in einen WebView zu stopfen.

Das Backend ist **WordPress**. In Deutschland hält die App eine **4,4 ★**-Bewertung im App Store bei 480 Bewertungen. Auf Google Play liegt der Android-Client bei **10.000+** Installationen.

## ballnews media GmbH

Kunde ist [ballnews media](https://ballnews.media/), ein digitaler Fußball-Publisher in Biberach. Vjekoslav Keskic hat FCBinside.de 2019 als FC-Bayern-Fanportal gestartet. Das Unternehmen dahinter betreibt heute mehrere Fußballmarken über Websites, Apps, Social Channels und Podcasts. Journalismus und Community, „von Fans, für Fans“.

fcbinside.de, [bvbwld.de](https://bvbwld.de) und [schalketotal.de](https://schalketotal.de) liegen im Bereich von **mehreren Millionen monatlichen Visits**. WordPress bleibt das Redaktionssystem — die Apps sind eigene Clients.

## White-Label: FCBinside, BVBWLD und SchalkeTOTAL

Den Flutter-Client haben wir zuerst für FCBinside entwickelt. Dasselbe Produkt ist danach als folgende Marken rausgegangen:

- **FCBinside** — FC-Bayern-News, das Flaggschiff, iOS und Android.
- **BVBWLD** — die Borussia-Dortmund-Marke (bvbwld.de), in den Stores ab 2024.
- **SchalkeTOTAL** — die Schalke-04-Marke (schalketotal.de), in den Stores ab 2024.

Drei Store-Listings, drei redaktionelle Stimmen, eine Dart-Codebasis. Pro Marke ändern sich Corporate Design, Content-Quelle, Notification-Texte und In-App-Käufe. Was sich nicht ändert: Feed, Artikelansicht, Audio, Settings, Werbung und das werbefreie Abo.

## Natives Flutter statt Website-Wrapper

fcbinside.de in einen WebView zu packen wäre am ersten Tag billiger gewesen und am zweiten falsch.

Eine News-App soll Dinge können, die ein mobiler Browser schlechter kann: **Push**, der ankommt, wenn ein Transfer kippt, einen **Feed, der mit 60 fps** scrollt — mit Bildern und Ads —, **Video und Audio**, die flüssig wiedergegeben werden, **Store-Abos**, die gut integriert sind, und eine Artikelansicht, die so schnell wie möglich lädt.

All diese Dinge kann Flutter und man merkt, wenn sich hinter dem App-Icon keine Website versteckt.

## Werbung im Flutter-Client

Die kostenlose App ist ein werbefinanziertes Produkt. Ohne Ads, als monatliches, vierteljährliches oder jährliches Abo in den Stores.

Wir haben native Ad-SDKs in die Flutter-UI integriert. Jede White-Label-Marke kann eigene Werbeinventare fahren. Mediation, Viewability und Privacy-Prompts bleiben auf der Plattformseite, wo die Netzwerke sie erwarten.

Ein WebView-Wrapper besteht diese Checks in der Regel nicht sauber. Er kann auch kein glaubwürdiges werbefreies Abo anbieten, weil die „App“ weiterhin die öffentliche Website zeigt.

## Ergebnis: ein Flutter-Produkt, drei Marken

ballnews media liefert FC-Bayern-, BVB- und Schalke-Berichterstattung aus einer Mobile-Codebasis. **Die Redaktionen behalten WordPress.** Fans bekommen eine native App statt eines Lesezeichens. Tapped hält den Flutter-Client so, dass eine weitere Marke draufpasst, ohne von vorn anzufangen.
