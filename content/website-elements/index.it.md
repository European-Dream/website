---
title: Elementi del sito
description: "Panoramica degli elementi di contenuto e degli shortcode disponibili sul sito European Dream, con esempi semplici per i contributori."
date: 2026-02-04
lastmod: 2026-02-04
type: page
language: it
draft: false
params:
  headerUnsplashId: 7hu0jZRuRaA
  metaTitle: "Elementi del sito European Dream"
  type: WebPage
---
Questa pagina presenta gli elementi di contenuto e i componenti disponibili sul sito European Dream.

Mostra come appaiono gli elementi comuni (testo, immagini, citazioni, elenchi, shortcode, ecc.) una volta pubblicati, insieme a semplici esempi su come utilizzarli.
Non è richiesta alcuna conoscenza tecnica per leggere o usare questa pagina.

**Nota sull'accessibilità**

European Dream considera l'**accessibilità** un valore fondamentale. Questo significa che tutti i contenuti pubblicati dovrebbero rimanere leggibili, comprensibili e utilizzabili dal maggior numero possibile di persone.

Per questo motivo, i contributori sono incoraggiati a tenere a mente alcuni semplici principi, come:
- usare titoli chiari e una struttura logica
- fornire testo significativo per link e immagini
- evitare contenuti che si basano solo su colore, layout o effetti visivi per trasmettere significato

Questi principi aiutano a mantenere il sito **inclusivo e accogliente per tutti 💚**.

---

## Titoli

I titoli di primo livello sono riservati al titolo della pagina, che viene generato automaticamente.
In pratica, questo significa usare titoli di secondo livello e inferiori nelle pagine e negli articoli, poiché il titolo di primo livello dovrebbe essere unico per ragioni di accessibilità.

## Titolo di secondo livello

### Titolo di terzo livello

#### Titolo di quarto livello

##### Titolo di quinto livello

###### Titolo di sesto livello

---

## Elenchi

### Elenco ordinato

1. Inizia a fare ciò che è necessario,
2. poi fai ciò che è possibile,
3. e improvvisamente stai facendo l'impossibile.

---

### Elenco non ordinato

- Ricchezza senza lavoro.
- Piacere senza coscienza.
- Conoscenza senza carattere.
- Commercio senza moralità.
- Scienza senza umanità.
- Religione senza sacrificio.
- Politica senza principi.

---

## Tabella

| Intestazione 1 | Intestazione 2 | Intestazione 3 | Intestazione 4 | Intestazione 5 |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| Riga:1 Cella:1 | Riga:1 Cella:2 | Riga:1 Cella:3 | Riga:1 Cella:4 | Riga:1 Cella:5 |
| Riga:2 Cella:1 | Riga:2 Cella:2 | Riga:2 Cella:3 | Riga:2 Cella:4 | Riga:2 Cella:5 |
| Riga:3 Cella:1 | Riga:3 Cella:2 | Riga:3 Cella:3 | Riga:3 Cella:4 | Riga:3 Cella:5 |
| Riga:4 Cella:1 | Riga:4 Cella:2 | Riga:4 Cella:3 | Riga:4 Cella:4 | Riga:4 Cella:5 |
| Riga:5 Cella:1 | Riga:5 Cella:2 | Riga:5 Cella:3 | Riga:5 Cella:4 | Riga:5 Cella:5 |
| Riga:6 Cella:1 | Riga:6 Cella:2 | Riga:6 Cella:3 | Riga:6 Cella:4 | Riga:6 Cella:5 |

---


## Citazioni

> Dovremmo sempre avere tre amici nella nostra vita —
> uno che cammina davanti, che guardiamo e seguiamo;
> uno che cammina al nostro fianco, che è con noi a ogni passo del nostro cammino;
> e poi, uno che raggiungiamo e portiamo con noi dopo aver aperto la strada.
>
> <cite>Michelle Obama</cite>

```
> Dovremmo sempre avere tre amici nella nostra vita —
> uno che cammina davanti, che guardiamo e seguiamo;
> uno che cammina al nostro fianco, che è con noi a ogni passo del nostro cammino;
> e poi, uno che raggiungiamo e portiamo con noi dopo aver aperto la strada.
>
> <cite>Michelle Obama</cite>
```

---

## Immagini

### Unsplash

{{< unsplash m6FEp9WVgq8 >}}

```
{{</* unsplash m6FEp9WVgq8 */>}}
```

### Figure

{{< figure
  src="/images/example.jpg"
  alt="Esempio"
  caption="Foto di [Martin Katler](https://unsplash.com/@martinkatler) su [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
>}}

```
{{</* figure
  src="/images/example.jpg"
  alt="Esempio"
  caption="Foto di [Martin Katler](https://unsplash.com/@martinkatler) su [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
*/>}}
```

### Personalizzate

![Mare](./images/example.jpg)
_Foto di [Martin Katler](https://unsplash.com/@martinkatler) su [Unsplash](https://unsplash.com)_

```
![Mare](./images/example.jpg)
_Foto di [Martin Katler](https://unsplash.com/@martinkatler) su [Unsplash](https://unsplash.com)_
```

---

## Link pulsante

Un link pulsante stilizzato che gestisce automaticamente la localizzazione delle lingue.

{{< button href="/a-call-to-dream/" text="Leggi il nostro Invito a sognare" >}}

```
{{</* button href="/a-call-to-dream/" text="Leggi il nostro Invito a sognare" */>}}
```

Il percorso `href` viene automaticamente prefissato con il codice della lingua corrente (es. `/it/a-call-to-dream/` per l'italiano). Durante la traduzione, mantenete l'`href` invariato e traducete solo il parametro `text`.

---

## Video YouTube

{{< youtube qXl8XByenME >}}

```
{{</* youtube qXl8XByenME */>}}
```
---

## Video Vimeo

{{< vimeo 29594820 >}}

```
{{</* vimeo 29594820 */>}}
```
