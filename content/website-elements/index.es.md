---
title: Elementos del Sitio Web
description: "Resumen de los elementos de contenido y shortcodes disponibles en el sitio web de European Dream, con ejemplos simples para los colaboradores."
date: 2026-02-04
lastmod: 2026-02-04
type: page
language: es
draft: false
params:
  headerUnsplashId: 7hu0jZRuRaA
  metaTitle: "Elementos del Sitio Web de European Dream"
  type: WebPage
---
Esta página presenta los elementos de contenido y componentes disponibles en el sitio web de European Dream.

Muestra cómo se ven los elementos comunes (texto, imágenes, citas, listas, shortcodes, etc.) cuando se publican, junto con ejemplos simples de cómo usarlos.
No se requieren conocimientos técnicos para leer o usar esta página.

**Nota de accesibilidad**

European Dream considera la **accesibilidad** un valor fundamental. Esto significa que todo el contenido publicado debe seguir siendo legible, comprensible y utilizable por la mayor cantidad de personas posible.

Por esta razón, se anima a los colaboradores a tener en cuenta algunos principios simples, como:
- usar encabezados claros y una estructura lógica
- proporcionar texto significativo para enlaces e imágenes
- evitar contenido que dependa solo del color, el diseño o los efectos visuales para transmitir significado

Estos principios ayudan a mantener el sitio web **inclusivo y acogedor para todos 💚**.

---

## Encabezados

Los encabezados de primer nivel están reservados para el título de la página, que se genera automáticamente.
En la práctica, esto significa usar encabezados de segundo nivel e inferiores en páginas y publicaciones, ya que se espera que el encabezado de primer nivel sea único por razones de accesibilidad.

# Encabezado de primer nivel

## Encabezado de segundo nivel

### Encabezado de tercer nivel

#### Encabezado de cuarto nivel

##### Encabezado de quinto nivel

###### Encabezado de sexto nivel

---

## Listas

### Lista Ordenada

1. Empieza haciendo lo que es necesario,
2. luego haz lo que es posible,
3. y de repente estarás haciendo lo imposible.

---

### Lista No Ordenada

- Riqueza sin trabajo.
- Placer sin conciencia.
- Conocimiento sin carácter.
- Comercio sin moralidad.
- Ciencia sin humanidad.
- Religión sin sacrificio.
- Política sin principios.

---

## Tabla

| Encabezado 1 | Encabezado 2 | Encabezado 3 | Encabezado 4 | Encabezado 5 |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Fila:1 Celda:1 | Fila:1 Celda:2 | Fila:1 Celda:3 | Fila:1 Celda:4 | Fila:1 Celda:5 |
| Fila:2 Celda:1 | Fila:2 Celda:2 | Fila:2 Celda:3 | Fila:2 Celda:4 | Fila:2 Celda:5 |
| Fila:3 Celda:1 | Fila:3 Celda:2 | Fila:3 Celda:3 | Fila:3 Celda:4 | Fila:3 Celda:5 |
| Fila:4 Celda:1 | Fila:4 Celda:2 | Fila:4 Celda:3 | Fila:4 Celda:4 | Fila:4 Celda:5 |
| Fila:5 Celda:1 | Fila:5 Celda:2 | Fila:5 Celda:3 | Fila:5 Celda:4 | Fila:5 Celda:5 |
| Fila:6 Celda:1 | Fila:6 Celda:2 | Fila:6 Celda:3 | Fila:6 Celda:4 | Fila:6 Celda:5 |

---


## Citas

> Siempre deberíamos tener tres amigos en nuestras vidas —
> uno que camina adelante, al que admiramos y seguimos;
> uno que camina a nuestro lado, que está con nosotros en cada paso de nuestro viaje;
> y luego, uno al que tendemos la mano y traemos con nosotros después de haber despejado el camino.
>
> <cite>Michelle Obama</cite>

```
> Siempre deberíamos tener tres amigos en nuestras vidas —
> uno que camina adelante, al que admiramos y seguimos;
> uno que camina a nuestro lado, que está con nosotros en cada paso de nuestro viaje;
> y luego, uno al que tendemos la mano y traemos con nosotros después de haber despejado el camino.
>
> <cite>Michelle Obama</cite>
```

---

## Imágenes

### Unsplash

{{< unsplash m6FEp9WVgq8 >}}

```
{{</* unsplash m6FEp9WVgq8 */>}}
```

### Figure

{{< figure
  src="/images/example.jpg"
  alt="Ejemplo"
  caption="Foto de [Martin Katler](https://unsplash.com/@martinkatler) en [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
>}}

```
{{</* figure
  src="/images/example.jpg"
  alt="Ejemplo"
  caption="Foto de [Martin Katler](https://unsplash.com/@martinkatler) en [Unsplash](https://unsplash.com)"
  class="ma0 w-75"
*/>}}
```

### Personalizado

![Mar](./images/example.jpg)
_Foto de [Martin Katler](https://unsplash.com/@martinkatler) en [Unsplash](https://unsplash.com)_

```
![Mar](./images/example.jpg)
_Foto de [Martin Katler](https://unsplash.com/@martinkatler) en [Unsplash](https://unsplash.com)_
```

---

## Enlace de botón

Un enlace de botón estilizado que gestiona automáticamente la localización de idiomas.

{{< button href="/a-call-to-dream/" text="Lea nuestra Llamada A Soñar" >}}

```
{{</* button href="/a-call-to-dream/" text="Lea nuestra Llamada A Soñar" */>}}
```

La ruta `href` se prefija automáticamente con el código del idioma actual (por ejemplo, `/es/a-call-to-dream/` para español). Al traducir, mantenga el `href` sin cambios y traduzca únicamente el parámetro `text`.

---

## Inserción de Youtube

{{< youtube qXl8XByenME >}}

```
{{</* youtube qXl8XByenME */>}}
```
---

## Inserción de Vimeo

{{< vimeo 29594820 >}}

```
{{</* vimeo 29594820 */>}}
```
