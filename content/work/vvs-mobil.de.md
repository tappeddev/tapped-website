---
title: "VVS Mobil"
heading: "VVS Mobil: Flutter-App für über 600.000 Nutzer"
seo_title: "VVS Mobil: Flutter-App für 600.000 Nutzer | Tapped"
description: "Tapped und MENTZ haben VVS Mobil als Flutter-App für über 600.000 Nutzer neu entwickelt: Native-Migration, Semantics, VoiceOver und TalkBack."
summary: "Mit MENTZ für den Kunden VVS entwickelt: die Flutter-App der Region Stuttgart. Live-Auskunft, Tickets, Karte und Barrierefreiheit."
weight: 1
featured: true
translationKey: work-vvs-mobil
image: img/works/vvs_mobil.webp
image2x: img/works/vvs_mobil@2x.webp
image_alt: "VVS Mobil Flutter-App für ÖPNV und Mobilität in der Region Stuttgart"
client: "Verkehrs- und Tarifverbund Stuttgart (VVS)"
partner: "MENTZ"
released: "Juni 2025"
projectPeriod: ""
stack:
  - Flutter
  - Dart
  - Kotlin Multiplatform
external:
  - "https://www.vvs.de"
  - "https://www.bwegt.de/service/app"
relatedService:
  - /services/flutter-app-development
  - /services/technical-consulting
stats:
  - value: "600.000+"
    label: "App-Nutzerinnen und -Nutzer in der Region Stuttgart"
  - value: "1 Codebasis"
    label: "Zwei native iOS- und Android-Apps durch Flutter ersetzt"
  - value: "4,4 ★"
    label: "Bewertung im App Store (iOS)"
    note: "Stand August 2026."
statsSource:
  text: "Nutzerzahl: VVS-Kundenmagazin NEVVS, Herbst 2025"
  url: "https://www.vvs.de/fileadmin/5_Service/5.2_Downloads/nevvs/VVS-NEVVS2025-Herbst.pdf"
highlights:
  - tag: "Flutter"
    title: "Eine Codebasis für beide Stores"
    body: "Die Oberfläche sitzt in Flutter und Dart. In manchen Fällen haben wir die Logik der alten App analysiert und übernommen. Daraus ist ein flexibles Branding-Produkt geworden — App Store und Google Play bekommen denselben Client."
  - tag: "Native Module"
    title: "Ticketshop und Location-APIs"
    body: "Ticketshop und Location-APIs sind weiterhin nativ implementiert. Der Rest der Oberfläche muss trotzdem auf iOS und Android denselben Stand halten."
  - tag: "Flutter Semantics"
    title: "VoiceOver und TalkBack im Client"
    body: "Labels, Rollen und Live-Updates sitzen in den Widgets. Der VVS dokumentiert selbst, wo Ticketshop und Karte noch Lücken haben."
faq:
  - question: "Eignet sich Flutter für barrierefreie Apps?"
    answer: "Ja. Der Aufwand liegt in der Automatisierung und der Testabdeckung, etwa über Golden Tests."
  - question: "Eignet sich Flutter für White-Label-Apps?"
    answer: "Ja. VVS Mobil und bwegt Bus & Bahn laufen auf derselben technischen Basis. Andere Verbünde können Corporate Design und Ticketshop anpassen. Golden Tests stellen fest, dass bei Anpassungen alle Apps noch gleich aussehen und funktionieren."
  - question: "Kann eine Flutter-App native iOS- und Android-Module nutzen?"
    answer: "Ja. Bei VVS Mobil sind Ticketshop und Location-APIs weiterhin nativ implementiert. Flutter zeichnet die Oberfläche, Plattform-Code bleibt dort, wo er hingehört."
  - question: "Eignet sich Flutter für große ÖPNV- und Enterprise-Apps?"
    answer: "Ja. Die harte Stelle ist nicht das UI-Toolkit, sondern Plattformintegration, Echtzeitdaten und eine Accessibility-Schicht, die auf iOS und Android denselben Stand hat. VVS Mobil läuft so im Produktivbetrieb."
---

## Die ÖPNV-App der Region Stuttgart

VVS Mobil ist die App des Verkehrs- und Tarifverbunds Stuttgart. Sie bringt Fahrplan, Tickets und Karte aufs Handy: für den Weg mit Bus und Bahn und für den Rest bis zur Tür. Die neue Version ist im **Juni 2025** gestartet.

Die App ist ein Branding-Produkt. Dieselbe technische Basis läuft landesweit als [bwegt Bus & Bahn](https://www.bwegt.de/service/app), die ÖPNV-App des Landes Baden-Württemberg. VVS und das Land haben den Client als Baukasten entwickelt. Andere Verbünde können Corporate Design und Ticketshop anpassen.

Was die App kann:

- **Live-Auskunft:** Verbindungen von Tür zu Ziel, Verspätungen, Störungen, Abfahrten in der Nähe.
- **Tickets:** Kauf im Client, inklusive Deutschland-Ticket. Bezahlen geht über die üblichen Wege, auch ohne extra Registrierung.
- **Karte:** Haltestellen, Linienverläufe, Fahrzeugpositionen, P+R.
- **Sharing und Mix:** Stadtmobil, RegioRad, Radstrecken, Ruftaxis und VVS Rider neben Bus und Bahn.
- **Fahrtbegleitung:** Losgehzeit, gemerkte Fahrten, Push bei Störungen, Favoriten.
- **Bedienung:** Darkmode, Deutsch und Englisch. Stufenfreie Verbindungen, Haltestellenfotos und -merkmale, große Schrift und Screenreader, soweit der Client sie trägt.

## Was Tapped umgesetzt hat

Kunde ist der VVS. Partner ist MENTZ.

Mit MENTZ haben wir schon mehrere Projekte umgesetzt, unter anderem den [VVS Radroutenplaner]({{< relref "/work/vvs-cycle-planner.md" >}}).

VVS Mobil haben wir gemeinsam mit MENTZ entwickelt. Wir haben die Architektur verantwortet und die Entwicklung großer Features übernommen — in der Praxis mit einer Lead-Rolle. Dazu haben wir Mitarbeiter des Kunden geschult. Unsere jahrelange Flutter-Arbeit hat in vielen weiteren Bereichen geholfen: Accessibility und das Wissen um beide nativen Plattformen.

Das Backend für Auskunft, Ticketing und die Mobility-Plattform hat MENTZ bereits gestellt.

## Von zwei nativen Apps zur Flutter-Migration

Die Vorgänger waren native iOS- und Android-Apps. Zwei Codebasen, zwei Release-Züge, jede Änderung doppelt. Gemeinsam mit MENTZ haben wir beide Clients durch Flutter ersetzt. Ein Stand für App Store und Google Play.

In manchen Fällen haben wir die Logik der alten App analysiert und übernommen. Ticketshop und Location-APIs sind weiterhin nativ implementiert. Das Ergebnis kann sich trotzdem sehen lassen, wie man an der Bewertung im App Store erkennt.

## Barrierefreie Flutter-Apps: Semantics, VoiceOver und TalkBack

Flutter kann barrierefreie Apps. Es tut das nicht von selbst. Die Informationen für Screenreader müssen wir im Client nochmal aufbereiten. Das gilt auch, wenn sich Abfahrten ändern, Fahrzeuge bewegen oder neue Informationen zu einer Fahrt vorliegen. Alles über TalkBack erreichbar.

Manche UI-Elemente müssen anders bedient werden als per Touch. Wischgesten brauchen eine Alternative, ebenso Drag-and-Drop. Tastatur und Screenreader müssen denselben Weg haben wie die Geste.

Viel Zeit ist in die Optimierung komplexer, detaillierter Screens gegangen, die viele Informationen darstellen, etwa den Abfahrtsmonitor oder die Fahrtdetails. Sie müssen für Menschen mit Einschränkungen einfach zu bedienen sein.

Was im Client steckt:

- **Flutter Semantics:** Widgets tragen Labels, Rollen und Live-Updates. VoiceOver unter iOS und TalkBack unter Android steuern Auskunft, Haltestellen, Störungen und die Navigation.
- **Fokusmanagement:** Reihenfolge, klar erkennbar, welches Element fokussiert ist, Aktivierung ohne Touch. Der VVS beschreibt die interaktiven Elemente als per Tastatur bedienbar.
- **Große Schrift und Kontrast:** Systemskalierung bis 200 % ohne Funktionsverlust, Kontrast in Hell- und Dunkelmodus.

Die Qualitätssicherung haben wir mit Testautomatisierung direkt abgebildet. Golden Tests halten fest, ob diese detaillierte UI hält. Das ist vor allem bei White-Label-Produkten wichtig.

Der VVS selbst nennt die App [teilweise barrierefrei](https://www.vvs.de/erklaerung-zur-barrierefreiheit) und listet offene Punkte: nur Hochformat, Kartenzomm nur per Geste, Fremdwörter in der Sprachausgabe, einzelne Bereiche im Ticketshop.

Das [Barrierefreiheitsstärkungsgesetz (BFSG)](https://www.gesetze-im-internet.de/bfsg/) gilt für bestimmte digitale Verbraucherangebote, nicht pauschal jede ÖPNV-App in derselben Breite. Bei VVS Mobil war Barrierefreiheit eine Produktanforderung, mit den Einschränkungen, die der VVS öffentlich dokumentiert.
