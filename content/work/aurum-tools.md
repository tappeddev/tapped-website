---
title: "AurumTools"
heading: "AurumTools: Flutter app for the bench"
seo_title: "AurumTools: Flutter app for the bench | Tapped"
description: "AurumTools for Kaddick Goldschmiede: a Flutter app on iOS, Android and the web, with in-app subscriptions, one design system and workshop calculators for goldsmiths."
summary: "The app runs on iOS, Android and the web, with in-app subscriptions and one design system across every device."
weight: 3
featured: false
translationKey: work-aurum-tools
image: img/works/aurum_tools.webp
image2x: img/works/aurum_tools@2x.webp
image_alt: "AurumTools Flutter workshop app for goldsmiths with alloy calculators"
client: "Kaddick Goldschmiede GmbH"
stack:
  - Flutter
  - Dart
  - Web
external: "https://www.kaddick.de/aurumtool/"
relatedService: /services/ui-ux-design
faq:
  - question: "Does Flutter support in-app purchases and subscriptions?"
    answer: "Yes. The integration is possible. In-app subscriptions run through the App Store and Google Play; Flutter talks to StoreKit and Google Play Billing from one Dart codebase. The payment flow can feel native. AurumTools ships that way: goldsmiths subscribe in the iOS and Android apps."
  - question: "When should you use Flutter web?"
    answer: 'When you already have an app, or the product also has to run on the web. Flutter can do responsive layouts, and you share the whole codebase. If the surface does not have to rank for SEO, Flutter web is a fit. AurumTools is that case: the same workshop calculators on iOS, Android and at aurumtools.com. Why that works is covered in more detail on our [Flutter development page]({{< relref "/services/flutter-app-development.md" >}}#flutter-web).'
  - question: "Is Flutter web production-ready?"
    answer: 'Yes, it is production-ready. Flutter web can use most web primitives as long as you are building a web app and not optimizing for SEO. You can integrate with JavaScript and interop with basic web SDKs. More on our [Flutter development page]({{< relref "/services/flutter-app-development.md" >}}#flutter-web).'
---

## Tools goldsmiths can use at the bench

Goldsmiths do specialised arithmetic all day: alloys, stones, ring sizes, workshop conversions. The tools that exist are scattered, desktop bound, or not built for a bench you stand at with dirty hands.

[Kaddick Goldschmiede](https://www.kaddick.de/) is a Munich workshop in the Glockenbachviertel, in the trade since 1934 and still a family run master workshop. AurumTools is their side project for the craft: an independent app so other goldsmiths can calculate at the bench instead of in a spreadsheet.

The intro is on YouTube: [AurumTools, the all in one app for goldsmiths](https://www.youtube.com/watch?v=iefLNMQhrmM).

## Flutter on every platform

We used Flutter to ship AurumTools on iOS, Android and the web from one codebase, so the whole audience is covered without three separate apps: on the phone at the bench, in the browser during a customer conversation. Same interface, one design system.

The app is the workshop toolbox: alloy mixing for gold, silver and copper; prices for B2B and B2C, with a labour base figure and a metal sales factor the workshop sets itself; live precious metal rates for the customer conversation, including scrap gold purchase; gemstone weight from size and diamond data; ring sizes and material length. Later releases added coin purchase, anonymous base rate comparison by region, and wage comparison by role.

A clear UI was central. Goldsmiths use the tool between other jobs, switch tasks quickly, and need every piece of information visible at once, not something they have to hunt for.

## Outcome: the workshop in an app

Goldsmiths can use Kaddick’s app on the job. iOS, Android and the web from one Flutter codebase, built around the workflow.

The app is on the [App Store](https://apps.apple.com/app/aurumtools/id6739778914) and [Google Play](https://play.google.com/store/apps/details?id=com.goldschmiede.kaddick.aurumtools), and as a web app at [aurumtools.com](https://aurumtools.com). More on [kaddick.de/aurumtool](https://www.kaddick.de/aurumtool/).
