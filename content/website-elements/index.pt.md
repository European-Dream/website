---
title: Elementos do site
description: "Visão geral dos elementos de conteúdo e shortcodes disponíveis no website do European Dream, com exemplos simples para contribuidores."
date: 2026-02-04
lastmod: 2026-02-04
type: page
language: pt
draft: false
params:
  headerUnsplashId: 7hu0jZRuRaA
  metaTitle: "Elementos do site European Dream"
  type: WebPage
---
Esta página apresenta os elementos de conteúdo e componentes disponíveis no website do European Dream.

Mostra como os elementos comuns (texto, imagens, citações, listas, shortcodes, etc.) aparecem quando publicados, juntamente com exemplos simples de como os utilizar.
Não é necessário conhecimento técnico para ler ou usar esta página.

**Nota sobre acessibilidade**

O European Dream considera a **acessibilidade** um valor fundamental. Isto significa que todo o conteúdo publicado deve permanecer legível, compreensível e utilizável pelo maior número possível de pessoas.

Por esta razão, encorajamos os contribuidores a ter em mente alguns princípios simples, tais como:
- usar títulos claros e uma estrutura lógica
- fornecer texto significativo para links e imagens
- evitar conteúdo que dependa apenas de cor, layout ou efeitos visuais para transmitir significado

Estes princípios ajudam a manter o website **inclusivo e acolhedor para todos 💚**.

---

## Títulos

Os títulos de primeiro nível estão reservados para o título da página, que é gerado automaticamente.
Na prática, isto significa usar títulos de segundo nível e inferiores nas páginas e publicações, já que o título de primeiro nível deve ser único por razões de acessibilidade.

## Título de segundo nível

### Título de terceiro nível

#### Título de quarto nível

##### Título de quinto nível

###### Título de sexto nível

---

## Listas

### Lista ordenada

1. Começa a fazer o que é necessário,
2. depois faz o que é possível,
3. e de repente estás a fazer o impossível.

---

### Lista não ordenada

- Riqueza sem trabalho.
- Prazer sem consciência.
- Conhecimento sem carácter.
- Comércio sem moralidade.
- Ciência sem humanidade.
- Religião sem sacrifício.
- Política sem princípios.

---

## Tabela

| Cabeçalho 1    | Cabeçalho 2    | Cabeçalho 3    | Cabeçalho 4    | Cabeçalho 5    |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| Linha:1 Cel:1  | Linha:1 Cel:2  | Linha:1 Cel:3  | Linha:1 Cel:4  | Linha:1 Cel:5  |
| Linha:2 Cel:1  | Linha:2 Cel:2  | Linha:2 Cel:3  | Linha:2 Cel:4  | Linha:2 Cel:5  |
| Linha:3 Cel:1  | Linha:3 Cel:2  | Linha:3 Cel:3  | Linha:3 Cel:4  | Linha:3 Cel:5  |
| Linha:4 Cel:1  | Linha:4 Cel:2  | Linha:4 Cel:3  | Linha:4 Cel:4  | Linha:4 Cel:5  |
| Linha:5 Cel:1  | Linha:5 Cel:2  | Linha:5 Cel:3  | Linha:5 Cel:4  | Linha:5 Cel:5  |
| Linha:6 Cel:1  | Linha:6 Cel:2  | Linha:6 Cel:3  | Linha:6 Cel:4  | Linha:6 Cel:5  |

---


## Citações

> Devíamos ter sempre três amigos nas nossas vidas —
> um que caminha à frente, a quem admiramos e seguimos;
> um que caminha ao nosso lado, que está connosco a cada passo da nossa jornada;
> e depois, um a quem estendemos a mão e trazemos connosco depois de abrirmos caminho.
>
> <cite>Michelle Obama</cite>

```
> Devíamos ter sempre três amigos nas nossas vidas —
> um que caminha à frente, a quem admiramos e seguimos;
> um que caminha ao nosso lado, que está connosco a cada passo da nossa jornada;
> e depois, um a quem estendemos a mão e trazemos connosco depois de abrirmos caminho.
>
> <cite>Michelle Obama</cite>
```

---

## Imagens

### Unsplash

{{< unsplash m6FEp9WVgq8 >}}

```
{{</* unsplash m6FEp9WVgq8 */>}}
```

### Figure

{{< figure
  src="/images/example.jpg"
  alt="Exemplo"
  caption="Foto de [Martin Katler](https://unsplash.com/@martinkatler) no [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
>}}

```
{{</* figure
  src="/images/example.jpg"
  alt="Exemplo"
  caption="Foto de [Martin Katler](https://unsplash.com/@martinkatler) no [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
*/>}}
```

### Personalizada

![Mar](./images/example.jpg)
_Foto de [Martin Katler](https://unsplash.com/@martinkatler) no [Unsplash](https://unsplash.com)_

```
![Mar](./images/example.jpg)
_Foto de [Martin Katler](https://unsplash.com/@martinkatler) no [Unsplash](https://unsplash.com)_
```

---

## Link de botão

Um link de botão estilizado que lida automaticamente com a localização de idiomas.

{{< button href="/a-call-to-dream/" text="Leia o nosso Apelo a Sonhar" >}}

```
{{</* button href="/a-call-to-dream/" text="Leia o nosso Apelo a Sonhar" */>}}
```

O caminho `href` é automaticamente prefixado com o código do idioma atual (por exemplo, `/pt/a-call-to-dream/` para português). Ao traduzir, mantenham o `href` inalterado e traduzam apenas o parâmetro `text`.

---

## Incorporação YouTube

{{< youtube qXl8XByenME >}}

```
{{</* youtube qXl8XByenME */>}}
```
---

## Incorporação Vimeo

{{< vimeo 29594820 >}}

```
{{</* vimeo 29594820 */>}}
```
