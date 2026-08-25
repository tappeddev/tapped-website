---
title: "Flutter app development"
seo_title: "Flutter App Development Munich | Tapped"
description: "Cross platform Flutter apps for iOS, Android and web from one codebase. Tapped plans, builds and ships from Munich, with native code when it matters."
summary: "Cross platform apps for iOS, Android and web from one codebase."
weight: 1
translationKey: service-flutter
relatedWork:
  - /work/vvs-mobil
  - /work/fcbinside
faq:
  - question: "Do you only build Flutter apps?"
    answer: 'We are experts in this area, but we also build the systems around it and integrate them into the product. [Here]({{< relref "/about" >}}#technologies) you can see what other technologies we use.'
  - question: "Who owns the source code?"
    answer: "You do. We deliver the repository and the knowledge to keep shipping, with us or with your own team."
  - question: "Where is Tapped based?"
    answer: "Munich. We ship with teams across Germany and internationally."
---

Flutter is Google’s UI framework: one codebase for apps on iOS, Android and web, with native performance and full access to platform features such as push, location or in app payments. We have built with Flutter since the early beta, with native iOS and Android apps long before that. We are experts in the stack, from first prototype to apps in production.

## Why Flutter

- A large share of code across iOS, Android and web: less effort in implementation, feature planning and testing
- Products do not diverge across platforms, features ship faster at the same time on every platform
- Platform features such as push notifications, location, in app payments or ads are not a problem
- Flutter ships a strong test framework, so even complex products keep working after changes

Most companies benefit from this.

## Native iOS and Android to Flutter

If you already have two native apps, the usual question is whether to migrate. We have done this on several projects, for example [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) and the [VVS Cycle Planner]({{< relref "/work/vvs-cycle-planner.md" >}}). Whether it makes sense for your product is something we can work through in [a quick call]({{< relref "/contact" >}}).

## Accessibility with Flutter

Flutter can ship accessible apps. It does not do that by default. Widgets need semantics: labels, roles and live updates so VoiceOver on iOS and TalkBack on Android work properly. That matters most with dynamic content, when data changes or new information arrives.

Some interactions need an alternative to touch: swipes, drag and drop, or dense screens with a lot of information at once. Focus management, keyboard navigation, large text and contrast have to be part of the design from the start.

On [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) we built exactly that: departures, trip details, disruptions and navigation prepared for screen readers, backed by golden tests. For many products, accessibility law matters too. Then accessibility is not a late layer, but part of the architecture.

## Flutter web {#flutter-web}

Yes, Flutter web is stable and production ready. It makes sense when you already have an app or the product also needs to run in the browser, without maintaining a second frontend. Responsive layouts, the same codebase, JavaScript interop when needed.

It is a weaker fit for a marketing site that has to rank in search. Flutter renders an app in the browser, not a classic HTML page with a crawlable structure. For logged in tools, dashboards or companion apps in the browser, it works well. [AurumTools]({{< relref "/work/aurum-tools.md" >}}) runs that way: the same workshop calculators on iOS, Android and at aurumtools.com.
