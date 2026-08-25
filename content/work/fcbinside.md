---
title: "FCBinside"
heading: "FCBinside: native Flutter apps for ballnews media"
seo_title: "FCBinside Flutter app — 10,000+ installs, 4.4★ | Tapped"
description: "Tapped built the FCBinside Flutter app for ballnews media — and the same white-label client for BVBWLD and SchalkeTOTAL. Native news, ads and push, not a website wrapper."
summary: "Daily FC Bayern news in a native Flutter app — and the same white-label client for BVBWLD and SchalkeTOTAL."
weight: 2
featured: true
translationKey: work-fcbinside
image: img/works/fcb_inside.webp
image2x: img/works/fcb_inside@2x.webp
image_alt: "FCBinside Flutter app with FC Bayern news, transfers and podcasts"
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
  - value: "10,000+"
    label: "Google Play installs for FCBinside"
    note: "Google Play listing, as of August 2026."
  - value: "4.4 ★"
    label: "App Store rating (iOS)"
    note: "480 ratings in Germany, as of August 2026."
  - value: "3 apps"
    label: "White-label Flutter clients: FCBinside, BVBWLD and SchalkeTOTAL"
statsSource:
  text: "Apple App Store (Germany) and Google Play, August 2026"
  url: "https://apps.apple.com/de/app/fcbinside/id1603207211"
highlights:
  - tag: "White-label"
    title: "One Flutter client, three football brands"
    body: "FCBinside, BVBWLD and SchalkeTOTAL share the same Dart codebase. Branding, feeds and store listings change; the product does not get rebuilt three times."
  - tag: "Native ads"
    title: "Ad SDKs in the Flutter feed"
    body: "Display ads sit in the native client, not in a WebView. Each brand can run its own units. An in-app subscription turns them off."
  - tag: "Not a wrapper"
    title: "Direct, straightforward WordPress integration"
    body: "The editorial sites stay WordPress. The apps talk to the REST API, draw their own UI, and ship push, video and store billing as platform features."
faq:
  - question: "Can you integrate ads and ad SDKs into a Flutter app?"
    answer: "Yes. Flutter can host the same native ad SDKs you would use in a Swift or Kotlin app — banners, interstitials and native units in a feed. On FCBinside we wired ads into the Flutter client and an ad-free subscription on top. White-label variants keep their own ad units and store products. A website wrapper cannot do this properly: viewability, mediation and store billing all expect a real app, not HTML in a WebView."
  - question: "Why not wrap the existing website in a WebView?"
    answer: "Because the site is already the site. A wrapper reloads articles and makes push, offline reading and ads second-class. The WordPress CMS stays; the app is a client, not a browser window around fcbinside.de."
  - question: "Is Flutter suitable for white-label news apps?"
    answer: "Yes. That is how FCBinside, BVBWLD and SchalkeTOTAL ship. One architecture, three brands: colours, content sources, notification names and store listings differ. Golden tests and a shared widget set keep the feed, article view and settings from drifting apart."
  - question: "Can a Flutter news app run on a WordPress backend?"
    answer: "Yes. FCBinside already publishes on WordPress. The app reads the REST API for stories, media and audio instead of loading the website. Push still has to be a native feature; the CMS does not replace that."
---

## A high-frequency FC Bayern news app

FCBinside is a high-frequency news product: transfers, match analysis, short stories, video and podcasts. Fans expect the feed on a phone to feel as current as the website — without waiting for two native teams to catch up, and without stuffing the WordPress site into a WebView.

The backend is **WordPress**. In Germany the app holds a **4.4 ★** App Store rating from 480 ratings. On Google Play the Android client sits in the **10,000+** install bucket.

## ballnews media GmbH

The customer is [ballnews media](https://ballnews.media/), a digital football publisher in Biberach. Vjekoslav Keskic started FCBinside.de in 2019 as an FC Bayern fan portal. The company behind it now runs several football brands across websites, apps, social channels and podcasts — journalism and community, “from fans, for fans.”

fcbinside.de, [bvbwld.de](https://bvbwld.de) and [schalketotal.de](https://schalketotal.de) sit in the range of **several million monthly visits**. WordPress stays the editorial system — the apps are native clients.

## White-label: FCBinside, BVBWLD and SchalkeTOTAL

We built the Flutter client for FCBinside first. The same product then shipped as:

- **FCBinside** — FC Bayern news, the flagship, iOS and Android.
- **BVBWLD** — the Borussia Dortmund brand (bvbwld.de), in the stores from 2024.
- **SchalkeTOTAL** — the Schalke 04 brand (schalketotal.de), in the stores from 2024.

Three store listings, three editorial voices, one Dart codebase. What changes per brand is corporate design, content source, notification copy and in-app purchases. What does not change is the feed, article view, audio, settings, ads and the ad-free subscription.

## Native Flutter instead of a website wrapper

Wrapping fcbinside.de in a WebView would have been cheaper on day one and wrong on day two.

A news app has to do things a mobile browser is bad at: **push** that arrives when a transfer breaks, a **feed that scrolls** at 60 fps with images and ads, **video and audio** that keep playing, **store subscriptions** that actually remove ads, and an article view that does not wait for a full WordPress page. After a rumour, tens of thousands of devices can wake up together. They should hit a REST API, not pull the entire CMS theme through a WebView.

It is not the website behind an app icon. Push, billing and ads sit in the app, where they belong. The result is a native client on iOS and Android from the same sources.

## Ads in the Flutter client

The free app is an ad-supported product. The paid tier is the same client with the ads off, sold as a monthly, quarterly or yearly subscription in the stores.

That only works if ads are **in the app**, not on a webpage the app happens to display. We integrated native ad SDKs into the Flutter UI so units can sit in the feed with the same scroll performance as the stories. Each white-label brand can run its own ad inventory. Mediation, viewability and privacy prompts stay on the platform side, where the networks expect them.

A WebView wrapper typically cannot pass those checks cleanly. It also cannot offer a credible ad-free subscription, because the “app” is still showing the public website.

## Outcome: one Flutter product, three brands

ballnews media ships FC Bayern, BVB and Schalke coverage from one mobile codebase. **The editorial teams keep WordPress.** Fans get a native app instead of a bookmark. Tapped keeps the Flutter client in a shape that can take another brand without starting over.
