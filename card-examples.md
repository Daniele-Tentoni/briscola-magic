---
title: Esempi di carte
---

# Esempi di carte

In questa pagina sono proposti dei link a Scryfall per conoscere le carte con gli effetti più comuni.

<div v-for="(tag, i) in tags" :key="i">

## {{ tag.title }}

> {{ tag.desc }}

Cerca per {{ tag.title }} divisi per colore:

<ul>
  <li v-for="color in colors" :key="color">
    <a :href="`https://scryfall.com/search?q=legal%3Apauper+otag%3A${tag.tag}+color%3D${color}&order=cmc&dir=asc&as=grid&unique=cards`" target="_blank">
      <img :src="`${sym[color]}`" :alt="color" style="height: 1.2em; display: inline-block; vertical-align: middle;"></img>
    </a>
  </li>
</ul>

Puoi cercare su [Scryfall](https://scryfall.com) usando questo filtro:

```js-vue
{{ scryfallFilter(tag) }}
```

</div>

<script setup>
import { useManaSymbols } from "./.vitepress/composables/manaSymbols.ts";

const colors = ["W", "U", "B", "R", "G"];

const sym = useManaSymbols().symbols;

const tags = [
  {
    title: "Card advantage",
    tag: "card-advantage",
    desc: "Things that give you access to more cards. (The technical meaning of card advantage can be much broader than this, but this is what we're using here.)",
  },
  {
    title: "Combat tricks",
    tag: "combat-trick",
    desc: "Effects that can be used during combat to help a creature survive, destroy opposing creatures, or deal additional combat damage.",
  },
  {
    title: "Counterspells",
    tag: "counterspell",
    desc: "Spells that counter stuff. See child tags for variants on the behaviour; notably counterspell-soft which gives the opponent a buyout cost.",
  },
  {
    title: "Free cast another",
    tag: "free-cast-another",
  },
  {
    title: "Give evasion",
    tag: "gives-evasion",
  },
  {
    title: "Pinger",
    tag: "pinger",
    desc: "Effects that deal just 1-2 damage repeatedly.",
  },
  {
    title: "Removal",
    tag: "removal",
    desc: "Get things off the table.",
  }
];

const baseTags = "legal:pauper cmc<=7 -t:land";

const scryfallFilter = (tag) => `otag:${tag.tag} ${baseTags}`;
</script>
