---
title: Website-Elemente
description: "Überblick über die Inhaltselemente und Shortcodes, die auf der European Dream-Website verfügbar sind, mit einfachen Beispielen für Mitwirkende."
date: 2026-02-04
lastmod: 2026-02-04
type: page
language: de
draft: false
params:
  headerUnsplashId: 7hu0jZRuRaA
  metaTitle: "European Dream Website-Elemente"
  type: WebPage
---
Diese Seite präsentiert die Inhaltselemente und Komponenten, die auf der European Dream-Website verfügbar sind.

Sie zeigt, wie gängige Elemente (Text, Bilder, Zitate, Listen, Shortcodes usw.) aussehen, wenn sie veröffentlicht werden, zusammen mit einfachen Beispielen, wie man sie verwendet.
Technische Kenntnisse sind nicht erforderlich, um diese Seite zu lesen oder zu nutzen.

**Hinweis zur Barrierefreiheit**

European Dream betrachtet **Barrierefreiheit** als einen fundamentalen Wert. Das bedeutet, dass alle veröffentlichten Inhalte für so viele Menschen wie möglich lesbar, verständlich und nutzbar bleiben sollten.

Aus diesem Grund werden Mitwirkende ermutigt, einige einfache Prinzipien im Hinterkopf zu behalten, wie:
- klare Überschriften und eine logische Struktur zu verwenden
- aussagekräftige Texte für Links und Bilder bereitzustellen
- Inhalte zu vermeiden, die sich nur auf Farbe, Layout oder visuelle Effekte verlassen, um Bedeutung zu vermitteln

Diese Prinzipien helfen, die Website **inklusiv und einladend für alle** zu halten.

---

## Überschriften

Überschriften erster Ebene sind für den Seitentitel reserviert, der automatisch generiert wird.
In der Praxis bedeutet das, dass in Seiten und Beiträgen Überschriften zweiter Ebene und darunter verwendet werden, da die Überschrift erster Ebene aus Gründen der Barrierefreiheit einzigartig sein sollte.

# Überschrift erster Ebene

## Überschrift zweiter Ebene

### Überschrift dritter Ebene

#### Überschrift vierter Ebene

##### Überschrift fünfter Ebene

###### Überschrift sechster Ebene

---

## Listen

### Nummerierte Liste

1. Fange an zu tun, was notwendig ist,
2. dann tue, was möglich ist,
3. und plötzlich tust du das Unmögliche.

---

### Aufzählungsliste

- Reichtum ohne Arbeit.
- Vergnügen ohne Gewissen.
- Wissen ohne Charakter.
- Handel ohne Moral.
- Wissenschaft ohne Menschlichkeit.
- Religion ohne Opfer.
- Politik ohne Prinzipien.

---

## Tabelle

| Kopfzeile 1  | Kopfzeile 2  | Kopfzeile 3  | Kopfzeile 4  | Kopfzeile 5  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Zeile:1 Zelle:1 | Zeile:1 Zelle:2 | Zeile:1 Zelle:3 | Zeile:1 Zelle:4 | Zeile:1 Zelle:5 |
| Zeile:2 Zelle:1 | Zeile:2 Zelle:2 | Zeile:2 Zelle:3 | Zeile:2 Zelle:4 | Zeile:2 Zelle:5 |
| Zeile:3 Zelle:1 | Zeile:3 Zelle:2 | Zeile:3 Zelle:3 | Zeile:3 Zelle:4 | Zeile:3 Zelle:5 |
| Zeile:4 Zelle:1 | Zeile:4 Zelle:2 | Zeile:4 Zelle:3 | Zeile:4 Zelle:4 | Zeile:4 Zelle:5 |
| Zeile:5 Zelle:1 | Zeile:5 Zelle:2 | Zeile:5 Zelle:3 | Zeile:5 Zelle:4 | Zeile:5 Zelle:5 |
| Zeile:6 Zelle:1 | Zeile:6 Zelle:2 | Zeile:6 Zelle:3 | Zeile:6 Zelle:4 | Zeile:6 Zelle:5 |

---


## Zitate

> Wir sollten immer drei Freunde in unserem Leben haben –
> einen, der vor uns geht, zu dem wir aufschauen und dem wir folgen;
> einen, der neben uns geht, der bei jedem Schritt unserer Reise bei uns ist;
> und dann einen, nach dem wir zurückgreifen und den wir mitnehmen, nachdem wir den Weg geebnet haben.
>
> <cite>Michelle Obama</cite>

```
> Wir sollten immer drei Freunde in unserem Leben haben –
> einen, der vor uns geht, zu dem wir aufschauen und dem wir folgen;
> einen, der neben uns geht, der bei jedem Schritt unserer Reise bei uns ist;
> und dann einen, nach dem wir zurückgreifen und den wir mitnehmen, nachdem wir den Weg geebnet haben.
>
> <cite>Michelle Obama</cite>
```

---

## Bilder

### Unsplash

{{< unsplash m6FEp9WVgq8 >}}

```
{{</* unsplash m6FEp9WVgq8 */>}}
```

### Abbildung

{{< figure
  src="/images/example.jpg"
  alt="Beispiel"
  caption="Foto von [Martin Katler](https://unsplash.com/@martinkatler) auf [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
>}}

```
{{</* figure
  src="/images/example.jpg"
  alt="Beispiel"
  caption="Foto von [Martin Katler](https://unsplash.com/@martinkatler) auf [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
*/>}}
```

### Benutzerdefiniert

![Meer](./images/example.jpg)
_Foto von [Martin Katler](https://unsplash.com/@martinkatler) auf [Unsplash](https://unsplash.com)_

```
![Meer](./images/example.jpg)
_Foto von [Martin Katler](https://unsplash.com/@martinkatler) auf [Unsplash](https://unsplash.com)_
```

---

## Button-Link

Ein gestalteter Button-Link, der die Sprachlokalisierung automatisch handhabt.

{{< button href="/a-call-to-dream/" text="Lesen Sie unseren Aufruf zu träumen" >}}

```
{{</* button href="/a-call-to-dream/" text="Lesen Sie unseren Aufruf zu träumen" */>}}
```

Der `href`-Pfad wird automatisch mit dem aktuellen Sprachcode versehen (z.B. `/de/a-call-to-dream/` für Deutsch). Beim Übersetzen lassen Sie den `href` unverändert und übersetzen Sie nur den `text`-Parameter.

---

## YouTube-Einbettung

{{< youtube qXl8XByenME >}}

```
{{</* youtube qXl8XByenME */>}}
```
---

## Vimeo-Einbettung

{{< vimeo 29594820 >}}

```
{{</* vimeo 29594820 */>}}
```
