---
title: "Flutter app development"
heading: "Flutter app development agency"
seo_title: "Flutter App Development Agency in Germany | Tapped"
description: "Flutter agency in Munich: iOS, Android and web apps from one codebase, from native migration to store release. We build with teams across Germany."
summary: "Cross platform apps for iOS, Android and web from one codebase. A Flutter app development agency that takes your product from the first prototype to the store release."
weight: 1
translationKey: service-flutter
trust: true
toc: true
relatedWork:
  - /work/vvs-mobil
  - /work/fcbinside
  - /work/aurum-tools
faq:
  - question: "What does a Flutter app cost?"
    answer: "It depends on scope, not on the framework: how many screens, how much backend and third-party integration, whether accessibility and white-label are requirements, and whether you need a prototype or a product that has to survive in two stores for years. Flutter changes the shape of the bill rather than the total. You pay once for most of the client instead of twice, and you keep paying for one codebase rather than two. We give you a range after a first call, once we know what has to be built."
  - question: "How long does a Flutter app take?"
    answer: "The honest answer is that scope decides it, not Flutter. What reliably shortens it: a backend that already exists, a decision-maker who can approve things in the week they come up, and a scope that is allowed to get smaller. What reliably lengthens it: store review, native integrations that nobody has looked at yet, and accessibility added at the end instead of designed in."
  - question: "Is Flutter as fast as a native app?"
    answer: 'For almost every product, yes. Release builds compile to native ARM machine code, and Impeller is now the default renderer on iOS and Android. Where native still wins is a narrow set: heavy custom camera and video pipelines, some AR, and tight platform SDK work. Those parts can stay native inside a Flutter app, which is what we did on [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}).'
  - question: "Flutter or React Native?"
    answer: "Flutter, for most products. React Native maps your interface onto the platform's own components, so iOS and Android drift apart in exactly the details your designers care about. Flutter draws every pixel itself, which is why the product stays identical everywhere, custom components and animations are not a fight, and the result can be locked in with automated screenshot tests. React Native mainly makes sense when your team's existing strength is React and JavaScript and you want to keep hiring in that market."
  - question: "Can a Flutter app use native iOS and Android code?"
    answer: 'Yes, and most serious apps do. On [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) the ticket shop and the location APIs stayed native while Flutter drew the interface. Platform code stays where it belongs, and you do not rewrite a working native SDK integration just to be consistent.'
  - question: "Do you use AI to write our app?"
    answer: "Yes, and we are open about it. We work with coding agents every day: they write code, run tests, review diffs and do research that would otherwise cost days. What they do not do is decide what gets built or ship anything unreviewed. Every change is signed off by the developer whose name is on the commit, and architecture stays a human decision. We agree up front which tools may see your code. We also run AI workshops teaching other engineering teams to work this way."
  - question: "Do you only build Flutter apps?"
    answer: 'We are experts in this area, but we also build the systems around it and integrate them into the product. [Here]({{< relref "/about" >}}#technologies) you can see what other technologies we use.'
  - question: "Can Flutter handle in-app purchases and subscriptions?"
    answer: 'Yes. Flutter talks to StoreKit and Google Play Billing from one Dart codebase, and the payment flow feels native. [AurumTools]({{< relref "/work/aurum-tools.md" >}}) ships that way: goldsmiths subscribe in the iOS and Android apps, and the same product also runs in the browser.'
  - question: "Is Flutter suitable for accessible apps under the BFSG?"
    answer: 'Flutter can ship accessible apps, but it does not do it by default. Widgets need semantics, focus management and alternatives to gestures, and that work has to be tested rather than assumed. On [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) we built exactly that, backed by automated screenshot tests, on a public transport app where accessibility was a product requirement.'
  - question: "Is Flutter a good fit for white-label apps?"
    answer: 'Yes, and it is one of the clearest wins. [FCBinside]({{< relref "/work/fcbinside.md" >}}), BVBWLD and SchalkeTOTAL run from one Dart codebase with different branding, feeds and store listings. VVS Mobil ships statewide as bwegt Bus & Bahn on the same technical base.'
  - question: "Who owns the source code?"
    answer: "You do. We deliver the repository and the knowledge to keep shipping, with us or with your own team."
  - question: "Where is Tapped based?"
    answer: "Munich. We ship with teams across Germany and internationally."
---

Flutter is Google’s UI framework: one codebase for apps on iOS, Android and web, with native performance and full access to platform features such as push, location or in app payments. We have built with Flutter since the early beta, with native iOS and Android apps long before that. We are experts in the stack, from first prototype to apps in production.

Tapped is a Flutter agency based in Munich, listed in the [official Flutter consultant directory](https://flutter.dev/consultants), working with teams across Germany and internationally. Across our live apps that adds up to more than 1.4 million downloads and over 58,000 store ratings, at an average of 4.3 ★.

## Why Flutter

- A large share of code across iOS, Android and web: less effort in implementation, feature planning and testing
- Products do not diverge across platforms, features ship faster at the same time on every platform
- Platform features such as push notifications, location, in app payments or ads are not a problem
- Flutter ships a strong test framework, so even complex products keep working after changes
- One codebase means one maintenance bill after launch, not two release trains to keep in step

## Why Flutter wins on design and consistency

Flutter does not borrow the platform’s UI components. It draws every pixel itself, with its own rendering engine. Almost every practical advantage below follows from that one fact.

**Your product is the same product everywhere.** iOS, Android and the web render from the same widgets. There is no “close enough on Android” version of your app, and no feature that quietly looks different depending on which phone a customer picked up.

**Your brand beats the platform’s defaults.** Flutter is not tied to the standard Android or iOS look. Corporate design, typography, spacing, motion and components get implemented the way your guidelines actually specify them, instead of being approximated with whatever the platform happens to provide.

**Pixel perfect, and it stays that way.** Getting a screen right once is the easy part. We lock the result in with automated screenshot tests, so the detail survives the next release. That is how [FCBinside]({{< relref "/work/fcbinside.md" >}}) runs as three branded apps, and how VVS Mobil ships statewide as bwegt Bus & Bahn without the variants drifting apart.

**Nobody has to tell your designers no.** The usual answer to an ambitious design is that the component does not exist on one of the platforms. In Flutter the custom control, the transition and the animation are all just widgets. Design stays a product decision instead of being negotiated down to what two platform toolkits happen to agree on.

**One design system across every screen size.** Phone, tablet and browser share the same components, so the product does not need a second interface to reach the browser. [AurumTools]({{< relref "/work/aurum-tools.md" >}}) runs that way: the same tools on a phone at the bench and in the browser during a customer conversation.

## What we build with Flutter

Not every app has the same hard part. These are the kinds of products we have actually shipped:

- **Apps at public scale.** [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) serves more than 600,000 users in the Stuttgart region: live journeys, ticketing, maps and real-time disruption data, rated 4.4 ★ on the App Store.
- **White-label products.** One codebase, several brands. [FCBinside]({{< relref "/work/fcbinside.md" >}}) ships as three football apps; VVS Mobil ships statewide as bwegt Bus & Bahn.
- **Apps with a browser twin.** [AurumTools]({{< relref "/work/aurum-tools.md" >}}) runs on iOS, Android and the web from one codebase, with in-app subscriptions.
- **Content and media apps.** High-frequency feeds on an existing CMS, with native ad SDKs, push and video rather than a WebView around the website.
- **Products with real integration work.** Backends, identity, payment, native SDKs, and the parts of the system the app has to talk to.

## How a project runs

{{< steps >}}
{{< step title="First call and scope" >}}
We work out what the product has to do, what already exists, and what the hard part really is. If the honest answer is that you do not need us, or do not need Flutter, you hear that in this call rather than after a discovery invoice.
{{< /step >}}
{{< step title="Evaluation and offer" >}}
We evaluate your project and put together an offer that covers everything it actually needs: the app, the backend, the UX and everything around them. One offer for the whole product, not a quote for the client with the rest left to be discussed later.
{{< /step >}}
{{< step title="Build in short cycles" >}}
Features ship in slices you can actually use, on both platforms at once. Tests, reviews and CI are part of the work, not a phase at the end. You see builds throughout, not a demo at the finish.
{{< /step >}}
{{< step title="Store release" >}}
App Store and Play Store submission, review, staged rollout, crash and performance monitoring. Store review is the one part of the timeline nobody controls, so we plan around it instead of pretending it is not there.
{{< /step >}}
{{< step title="After launch" >}}
OS versions move, stores change policy, and users find the paths nobody QA'd. That can continue with us under [analysis, maintenance and support]({{< relref "/services/maintenance-support.md" >}}), or with your own team on a repository that was written to be handed over.
{{< /step >}}
{{< /steps >}}

## How we build with AI

We are an AI-native team. Coding agents are part of how we work every day, not a pilot running quietly on the side. They write code, run tests, review diffs, and read through platform documentation, store reviews and competitor products while a traditional team is still scoping the first ticket. That is a real head start, and you get it without paying for anyone’s learning curve.

In practice, that means we build a lot faster, and that brings down the overall cost of a project. What used to take months is now far quicker and easier to build. It also changes how we make product decisions: we can iterate much faster, try out new ideas in real working software, and discard the ones that do not hold up before you have sunk weeks into them.

It does not mean an agent ships your product. Everything that reaches your repository has been read and signed off by the developer whose name is on the commit. Architecture, native boundaries, accessibility and every decision that is expensive to reverse stay with us. Agents are fast at work that is already well understood, and genuinely unreliable at deciding what should be built in the first place. Our experience is what guides a fleet of agents, speeding up development and quality at the same time.

Where it shows up in your project:

- **Research before the first line of code.** Competitor apps, store reviews, platform APIs and your backend’s documentation, read and summarised in hours instead of weeks.
- **More review, not less.** Automated review runs in the pipeline next to ours, so the obvious findings are gone before a person spends attention on them.
- **Tests that actually get written.** Widget and integration tests are the first thing a team under pressure skips, and one of the things agents are reliably good at.
- **AI inside the product, where it belongs.** If your app itself needs AI features, this is not new ground for us.

We also teach it. Companies bring us in to roll agents out across their own engineering teams, on their own repositories. That is our [AI workshops]({{< relref "/services/ai-workshops.md" >}}) service. Being hired to teach something is a fair test of whether a team really does it.

## Native iOS and Android to Flutter

If you already have two native apps, the usual question is whether to migrate. Two codebases means two release trains and every change twice. We have done this migration on several projects, including [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) and the [VVS Cycle Planner]({{< relref "/work/vvs-cycle-planner.md" >}}), both with MENTZ for VVS.

Replacing two native apps is a product decision, not a framework demo. There are four honest paths:

- **Full replacement.** Right when the core flows are being redesigned anyway and the two apps have drifted apart. One big release, with the risk concentrated at a single point.
- **Feature by feature.** Right when the surface area is large and your team still needs to learn Flutter. Two stacks live side by side for a while, which is slower but far lower risk.
- **Flutter inside the native app.** Right when only parts of the product need to converge, or native SDK work has to stay where it is. More complexity in the build, but no rewrite of what already works.
- **Stay native.** Right when Flutter would be a fashion choice rather than a cheaper, safer codebase. Sometimes this is the answer, and we will say so.

A pilot in your real architecture beats a greenfield prototype that never has to talk to your backend. On VVS Mobil the ticket shop and location APIs stayed native, and the result still holds its rating in both stores.

Whether it makes sense for your product is something we can work through in [a quick call]({{< relref "/contact" >}}). If you want the decision written down and ranked first, that is a [technical consulting and audit]({{< relref "/services/technical-consulting.md" >}}) engagement.

## Accessibility with Flutter

Flutter can ship accessible apps. It does not do that by default. Widgets need semantics: labels, roles and live updates so VoiceOver on iOS and TalkBack on Android work properly. That matters most with dynamic content, when data changes or new information arrives.

Some interactions need an alternative to touch: swipes, drag and drop, or dense screens with a lot of information at once. Focus management, keyboard navigation, large text and contrast have to be part of the design from the start.

The part most teams skip is testing it. Be honest: how often does anyone run the whole app through TalkBack and keyboard-only navigation before a release? On [VVS Mobil]({{< relref "/work/vvs-mobil.md" >}}) we built exactly that: departures, trip details, disruptions and navigation prepared for screen readers, backed by automated screenshot tests that lock the detailed UI in place.

For many products accessibility is now a legal question as well, through the [European Accessibility Act and the BFSG](https://www.gesetze-im-internet.de/bfsg/). Then it is not a late layer, but part of the architecture.

## Flutter web {#flutter-web}

Yes, Flutter web is stable and production ready. It makes sense when you already have an app or the product also needs to run in the browser, without maintaining a second frontend. Responsive layouts, the same codebase, JavaScript interop when needed.

It is a weaker fit for a marketing site that has to rank in search. Flutter renders an app in the browser, not a classic HTML page with a crawlable structure. For logged in tools, dashboards or companion apps in the browser, it works well. [AurumTools]({{< relref "/work/aurum-tools.md" >}}) runs that way: the same workshop calculators on iOS, Android and at aurumtools.com.

## What a Flutter app costs

We do not publish a price list, because the number would be fiction without knowing the product. What we can tell you is what moves it:

- **Scope.** Screen count matters less than the number of states behind each screen: empty, loading, error, offline, logged out.
- **Integration.** The backend, identity, payment and native SDKs are usually a bigger share of the work than the UI.
- **Real-time and offline.** Live data, background updates and offline behaviour are where estimates go wrong.
- **Accessibility and white-label.** Both are cheap when designed in and expensive when retrofitted.
- **Who you need afterwards.** A prototype and a product that must survive in two stores for years are different purchases.

Flutter does not make the first build free. It changes what you pay the second time: one client to extend, one release train, one maintenance budget instead of two. After a first call we give you a range for your scope, and we would rather tell you a project is too small for us than scale a quote to fit.

## Working inside your team

We do not only take projects end to end. On many products we have worked inside an existing team, and unblocking other teams has become its own part of what we do.

Sometimes the need is simply throughput: experienced Flutter developers shipping features next to yours, so more gets delivered and it gets delivered faster. Just as often the real bottleneck is structural rather than a headcount problem. How work gets planned and cut. How long a pull request sits before anyone reviews it. How releases happen, and who is allowed to do them. Which corner of the codebase everyone quietly avoids. Those are the things that make a team feel slow no matter how many developers you add.

Because we have worked with so many different clients, we have already met most of the problems teams run into today, and we have a good sense of which one to fix first. We can join your team to deliver, to get it unstuck, or both.

Want to know whether Flutter fits your product, or where your team is actually losing time? [Book a short call]({{< relref "/contact" >}}) and we will tell you, including when the answer is that you do not need us.
