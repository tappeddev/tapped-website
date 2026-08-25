---
title: "Storyways"
seo_title: "Storyways interactive books and ANTLR SugarCube runtime | Tapped"
description: "Tapped built Storyways: choose your path books as an app, with a backend, frontend, and a SugarCube runtime built with ANTLR and a grammar. The project is now sunsetted."
summary: "Choose your path books, rebuilt as an app, with a SugarCube runtime built from ANTLR and a grammar. Now sunsetted."
weight: 4
featured: false
translationKey: work-storyways
image: img/works/storyways.webp
image2x: img/works/storyways@2x.webp
image_alt: "Storyways reader for interactive books with branching plots"
client: "Fictionic"
stack:
  - Flutter
  - Dart
  - SugarCube
  - ANTLR
relatedService: /services/flutter-app-development
---

## Choose your path books, rebuilt as an app

Storyways is the old paper trick, “if you take the left path, turn to page 47”, as a product. You still decide what happens. The story still forks. Instead of flipping pages, you play it in an app: the book remembers what you did, branches react, and endings are yours.

## Backend, frontend, and a runtime around SugarCube

We built the whole system: a backend for books, accounts and delivery; a Flutter frontend for iOS and Android; in-app payments; and an entire runtime around [SugarCube](https://www.motoslave.net/sugarcube/2/).

SugarCube is a Twine story format, a full engine for interactive fiction. Authors write passages (the “pages”), then use macros, variables and code to control what the reader sees, what is remembered, and which path opens next. It is not a fixed decision tree. It is a programmable story: custom logic, custom UI behaviour, branching as wild as the author wants.

That flexibility only works if the product can actually run it. We used [ANTLR](https://www.antlr.org/), a tool for building compilers and runtimes, and the grammar around it, to build the actual Storyways runtime. Authors could design that story logic themselves in SugarCube; ANTLR and the grammar are what parsed and executed it in the app, instead of a one-off HTML export in a browser.

## Outcome and a sunset

Readers got interactive books. Authors got a platform that treated SugarCube as the story engine. Storyways was a product with a backend, a client, and a runtime built with ANTLR from a grammar for that format.

Building it taught us a lot that still gives us an edge in many products today. Unfortunately, Storyways has since been sunsetted.
