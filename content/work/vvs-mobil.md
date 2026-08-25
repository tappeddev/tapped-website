---
title: "VVS Mobil"
heading: "VVS Mobil: Flutter app for 600,000+ users"
seo_title: "VVS Mobil: Flutter App for 600,000 Users | Tapped"
description: "Tapped and MENTZ rebuilt VVS Mobil as a Flutter app for 600,000+ users: native migration, Semantics, VoiceOver and TalkBack."
summary: "Developed with MENTZ for the customer VVS: the Stuttgart region’s Flutter app. Live journeys, tickets, maps and accessibility."
weight: 1
featured: true
translationKey: work-vvs-mobil
image: img/works/vvs_mobil.webp
image2x: img/works/vvs_mobil@2x.webp
image_alt: "VVS Mobil Flutter app for public transport and mobility in the Stuttgart region"
client: "Verkehrs- und Tarifverbund Stuttgart (VVS)"
partner: "MENTZ"
released: "June 2025"
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
  - value: "600,000+"
    label: "App users in the Stuttgart region"
  - value: "1 codebase"
    label: "Two native iOS and Android apps replaced with Flutter"
  - value: "4.4 ★"
    label: "App Store rating (iOS)"
    note: "As of August 2026."
statsSource:
  text: "User figure: VVS customer magazine NEVVS, autumn 2025"
  url: "https://www.vvs.de/fileadmin/5_Service/5.2_Downloads/nevvs/VVS-NEVVS2025-Herbst.pdf"
highlights:
  - tag: "Flutter"
    title: "One codebase for both stores"
    body: "The interface sits in Flutter and Dart. In some places we analysed the old app’s logic and carried it over. From that we built a flexible branding product — App Store and Google Play get the same client."
  - tag: "Native modules"
    title: "Ticket shop and location APIs"
    body: "The ticket shop and location APIs are still native. The rest of the interface still has to stay in sync on iOS and Android."
  - tag: "Flutter Semantics"
    title: "VoiceOver and TalkBack in the client"
    body: "Labels, roles and live updates live in the widgets. VVS itself documents where the ticket shop and map still fall short."
faq:
  - question: "Is Flutter suitable for accessible apps?"
    answer: "Yes. The work is in automation and test coverage, including golden tests."
  - question: "Is Flutter suitable for white-label apps?"
    answer: "Yes. VVS Mobil and bwegt Bus & Bahn run on the same technical base. Other transport associations can adapt corporate design and the ticket shop. Golden tests confirm that after customisations all apps still look and work the same."
  - question: "Can a Flutter app use native iOS and Android modules?"
    answer: "Yes. On VVS Mobil the ticket shop and location APIs stay native. Flutter paints the interface; platform code stays where it belongs."
  - question: "Is Flutter suitable for large public-transport and enterprise apps?"
    answer: "Yes. The hard part is not the UI toolkit. It is platform integration, real-time data, and an accessibility layer that stays in sync on iOS and Android. VVS Mobil runs that way in production."
---

## The Stuttgart region’s public-transport app

VVS Mobil is the app of the Stuttgart transport association. It puts journeys, tickets and a map on the phone: for bus and rail, and for the rest of the way to the door. The new version launched in **June 2025**.

The app is a branding product. The same technical base ships statewide as [bwegt Bus & Bahn](https://www.bwegt.de/service/app), Baden-Württemberg’s public-transport app. VVS and the state built the client as a kit. Other transport associations can adapt the corporate design and the ticket shop.

What the app does:

- **Live journeys:** door-to-destination connections, delays, disruptions, nearby departures.
- **Tickets:** purchase in the client, including the Deutschland-Ticket. Payment uses the usual methods, including without a separate account.
- **Map:** stops, lines, vehicle positions, park-and-ride.
- **Sharing and mix:** Stadtmobil, RegioRad, bike legs, on-demand taxis and VVS Rider alongside bus and rail.
- **Trip companion:** leave-by time, saved journeys, disruption push, favourites.
- **Use:** dark mode, German and English. Step-free routes, stop photos and attributes, large text and screen readers, as far as the client carries them.

## What Tapped built

The customer is VVS. The partner is MENTZ.

We have already shipped several products with MENTZ, including the [VVS Cycle Planner]({{< relref "/work/vvs-cycle-planner.md" >}}).

We built VVS Mobil together with MENTZ. We owned the architecture and led development of the major features — effectively in a lead role. We also trained staff on the customer's team. Years of Flutter work helped in many other areas too: accessibility and knowledge of both native platforms.

MENTZ already provided the backend for journey planning, ticketing and the mobility platform.

## From two native apps to a Flutter migration

The previous clients were native iOS and Android. Two codebases, two release trains, every change twice. Together with MENTZ we replaced both clients with Flutter. One client for the App Store and Google Play.

In some places we analysed the old app’s logic and carried it over. The ticket shop and location APIs are still native. The result still holds up, as the App Store rating shows.

## Accessible Flutter apps: Semantics, VoiceOver and TalkBack

Flutter can ship accessible apps. It does not do it by default. Screen-reader information has to be prepared again in the client. That still holds when departures change, vehicles move, or new trip information arrives. All of it reachable through TalkBack.

Some UI elements have to be operated differently than by touch. Swipe gestures need an alternative, as does drag-and-drop. Keyboard and screen reader have to offer the same path as the gesture.

A lot of time went into making complex, detailed screens usable, the ones that show a lot of information, such as the departure board or trip details. They have to stay easy to use for people with impairments.

What is in the client:

- **Flutter Semantics:** widgets carry labels, roles and live updates. VoiceOver on iOS and TalkBack on Android drive journeys, stops, disruptions and navigation.
- **Focus management:** order, a clear indication of which element is focused, activation without touch. VVS describes interactive elements as keyboard-operable.
- **Large text and contrast:** system scaling up to 200% without breaking the layout; contrast in light and dark mode.

Quality assurance is covered by test automation as well. Golden tests lock in that detailed UI. That matters most on white-label products.

VVS itself calls the app [partially accessible](https://www.vvs.de/erklaerung-zur-barrierefreiheit) and lists the open points: portrait only, map zoom by gesture only, foreign words mispronounced, parts of the ticket shop.

The [European Accessibility Act / BFSG](https://www.gesetze-im-internet.de/bfsg/) covers certain digital consumer services, not every public-transport app in the same breadth. On VVS Mobil, accessibility was a product requirement, with the limitations VVS publishes.
