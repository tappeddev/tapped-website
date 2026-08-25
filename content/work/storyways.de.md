---
title: "Storyways"
seo_title: "Storyways interaktive Bücher und ANTLR SugarCube Runtime | Tapped"
description: "Tapped hat Storyways entwickelt: Spielbücher als App, mit Backend, Frontend und einer SugarCube Runtime, entwickelt mit ANTLR und einer Grammatik. Das Projekt ist inzwischen eingestellt."
summary: "Spielbücher, neu als App, mit einer SugarCube Runtime aus ANTLR und einer Grammatik. Inzwischen eingestellt."
weight: 4
featured: false
translationKey: work-storyways
image: img/works/storyways.webp
image2x: img/works/storyways@2x.webp
image_alt: "Storyways Reader für interaktive Bücher mit verzweigtem Plot"
client: "Fictionic"
stack:
  - Flutter
  - Dart
  - SugarCube
  - ANTLR
relatedService: /services/flutter-app-development
---

## Spielbücher, neu als App

Storyways ist der alte Papiertrick, „wenn du den linken Weg nimmst, blättere zu Seite 47“, als Produkt. Du entscheidest, was passiert. Die Geschichte verzweigt. Statt Seiten umzublättern, spielst du sie in einer App: das Buch merkt sich, was du getan hast, Zweige reagieren, Enden gehören dir.

## Backend, Frontend und eine Runtime um SugarCube

Wir haben das gesamte System entwickelt: ein Backend für Bücher, Accounts und Auslieferung; ein Flutter Frontend für iOS und Android; In-App-Payments; und eine komplette Runtime um [SugarCube](https://www.motoslave.net/sugarcube/2/).

SugarCube ist ein Twine Story Format, eine vollständige Engine für interaktive Literatur. Autor:innen schreiben Passagen (die „Seiten“) und steuern mit Macros, Variablen und Code, was Leser:innen sehen, was gespeichert bleibt und welcher Weg als Nächstes aufgeht. Kein starrer Entscheidungsbaum. Eine programmierbare Geschichte: eigene Logik, eigenes UI Verhalten, Verzweigungen so frei, wie die Autor:innen sie brauchen.

Diese Flexibilität greift nur, wenn das Produkt sie auch ausführen kann. Wir haben [ANTLR](https://www.antlr.org/) verwendet, ein Werkzeug für Compiler und Runtimes, und die Grammatik darum herum, um die eigentliche Storyways Runtime zu entwickeln. Autor:innen konnten diese Story Logik selbst in SugarCube gestalten; ANTLR und die Grammatik haben sie in der App geparst und ausgeführt, statt als einmaligen HTML Export im Browser.

## Ergebnis und das Ende

Leser:innen bekamen interaktive Bücher. Autor:innen eine Plattform, die SugarCube als Story Engine behandelt. Storyways war ein Produkt mit Backend, Client und einer Runtime, die mit ANTLR und einer Grammatik für dieses Format entwickelt war.

Bei der Umsetzung haben wir sehr viel gelernt, was uns heute in vielen Produkten einen Vorteil verschafft. Leider ist Storyways inzwischen eingestellt.
