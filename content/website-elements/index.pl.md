---
title: Elementy strony
description: "Przegląd elementów treści i skrótów dostępnych na stronie European Dream, z prostymi przykładami dla współtwórców."
date: 2026-02-04
lastmod: 2026-02-04
type: page
language: pl
draft: false
params:
  headerUnsplashId: 7hu0jZRuRaA
  metaTitle: "Elementy strony European Dream"
  type: WebPage
---
Ta strona prezentuje elementy treści i komponenty dostępne na stronie European Dream.

Pokazuje, jak wyglądają typowe elementy (tekst, obrazy, cytaty, listy, skróty itp.) po opublikowaniu, wraz z prostymi przykładami ich użycia.
Do przeczytania lub korzystania z tej strony nie jest wymagana wiedza techniczna.

**Uwaga o dostępności**

European Dream uważa **dostępność** za fundamentalną wartość. Oznacza to, że wszystkie opublikowane treści powinny pozostać czytelne, zrozumiałe i użyteczne dla jak największej liczby osób.

Z tego powodu zachęcamy współtwórców do pamiętania o kilku prostych zasadach, takich jak:
- używanie jasnych nagłówków i logicznej struktury
- dostarczanie znaczącego tekstu dla linków i obrazów
- unikanie treści, które polegają tylko na kolorze, układzie lub efektach wizualnych do przekazywania znaczenia

Te zasady pomagają utrzymać stronę **inkluzywną i przyjazną dla wszystkich 💚**.

---

## Nagłówki

Nagłówki pierwszego poziomu są zarezerwowane dla tytułu strony, który jest generowany automatycznie.
W praktyce oznacza to używanie nagłówków drugiego poziomu i niższych na stronach i postach, ponieważ nagłówek pierwszego poziomu powinien być unikalny ze względów dostępności.

## Nagłówek drugiego poziomu

### Nagłówek trzeciego poziomu

#### Nagłówek czwartego poziomu

##### Nagłówek piątego poziomu

###### Nagłówek szóstego poziomu

---

## Listy

### Lista uporządkowana

1. Zacznij robić to, co konieczne,
2. potem rób to, co możliwe,
3. a nagle robisz rzeczy niemożliwe.

---

### Lista nieuporządkowana

- Bogactwo bez pracy.
- Przyjemność bez sumienia.
- Wiedza bez charakteru.
- Handel bez moralności.
- Nauka bez człowieczeństwa.
- Religia bez poświęcenia.
- Polityka bez zasad.

---

## Tabela

| Nagłówek 1     | Nagłówek 2     | Nagłówek 3     | Nagłówek 4     | Nagłówek 5     |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| Wiersz:1 Kom:1 | Wiersz:1 Kom:2 | Wiersz:1 Kom:3 | Wiersz:1 Kom:4 | Wiersz:1 Kom:5 |
| Wiersz:2 Kom:1 | Wiersz:2 Kom:2 | Wiersz:2 Kom:3 | Wiersz:2 Kom:4 | Wiersz:2 Kom:5 |
| Wiersz:3 Kom:1 | Wiersz:3 Kom:2 | Wiersz:3 Kom:3 | Wiersz:3 Kom:4 | Wiersz:3 Kom:5 |
| Wiersz:4 Kom:1 | Wiersz:4 Kom:2 | Wiersz:4 Kom:3 | Wiersz:4 Kom:4 | Wiersz:4 Kom:5 |
| Wiersz:5 Kom:1 | Wiersz:5 Kom:2 | Wiersz:5 Kom:3 | Wiersz:5 Kom:4 | Wiersz:5 Kom:5 |
| Wiersz:6 Kom:1 | Wiersz:6 Kom:2 | Wiersz:6 Kom:3 | Wiersz:6 Kom:4 | Wiersz:6 Kom:5 |

---


## Cytaty

> Powinniśmy zawsze mieć w życiu trzech przyjaciół —
> jednego, który idzie przed nami, na którego patrzymy i za którym podążamy;
> jednego, który idzie obok nas, który jest z nami na każdym kroku naszej drogi;
> i wreszcie jednego, po którego sięgamy i którego prowadzimy za sobą, gdy już utorujemy drogę.
>
> <cite>Michelle Obama</cite>

```
> Powinniśmy zawsze mieć w życiu trzech przyjaciół —
> jednego, który idzie przed nami, na którego patrzymy i za którym podążamy;
> jednego, który idzie obok nas, który jest z nami na każdym kroku naszej drogi;
> i wreszcie jednego, po którego sięgamy i którego prowadzimy za sobą, gdy już utorujemy drogę.
>
> <cite>Michelle Obama</cite>
```

---

## Obrazy

### Unsplash

{{< unsplash m6FEp9WVgq8 >}}

```
{{</* unsplash m6FEp9WVgq8 */>}}
```

### Figure

{{< figure
  src="/images/example.jpg"
  alt="Przykład"
  caption="Zdjęcie: [Martin Katler](https://unsplash.com/@martinkatler) na [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
>}}

```
{{</* figure
  src="/images/example.jpg"
  alt="Przykład"
  caption="Zdjęcie: [Martin Katler](https://unsplash.com/@martinkatler) na [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
*/>}}
```

### Niestandardowe

![Morze](./images/example.jpg)
_Zdjęcie: [Martin Katler](https://unsplash.com/@martinkatler) na [Unsplash](https://unsplash.com)_

```
![Morze](./images/example.jpg)
_Zdjęcie: [Martin Katler](https://unsplash.com/@martinkatler) na [Unsplash](https://unsplash.com)_
```

---

## Link przycisku

Stylizowany link przycisku, który automatycznie obsługuje lokalizację języka.

{{< button href="/a-call-to-dream/" text="Przeczytaj nasze Wezwanie do marzeń" >}}

```
{{</* button href="/a-call-to-dream/" text="Przeczytaj nasze Wezwanie do marzeń" */>}}
```

Ścieżka `href` jest automatycznie poprzedzana kodem bieżącego języka (np. `/pl/a-call-to-dream/` dla polskiego). Podczas tłumaczenia pozostawcie `href` bez zmian i tłumaczcie tylko parametr `text`.

---

## Osadzenie YouTube

{{< youtube qXl8XByenME >}}

```
{{</* youtube qXl8XByenME */>}}
```
---

## Osadzenie Vimeo

{{< vimeo 29594820 >}}

```
{{</* vimeo 29594820 */>}}
```
