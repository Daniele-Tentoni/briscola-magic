---
title: Card example
---

<script setup>
import {computed, ref} from "vue"

const colors = ["W", "U", "B", "R", "G"];

const tags = [{title: "Cantrip", tag: "cantrip"}, {title: "Combat tricks", tag: "combat-trick"}, {title: "Counterspells", tag: "counterspell"}];

const scryfallFilter = computed(() => "");
</script>

# Esempi di carte

<div v-for="tag, i in tags" :key="i">

## {{ tag.title }}

Cerca per {{ tag.title }} divisi per colore:

<ul>
<li v-for="color in colors" :key="color"><a :href="`https://scryfall.com/search?q=legal%3Apauper+oracletag%3A${tag.tag}$+color%3D${color}&order=cmc&dir=asc&as=grid&unique=cards`" target="_blank">{{ color }}</a></li>
</ul>

Puoi cercare su [Scryfall](https://scryfall.com) usando questo filtro:

```-vue
legal:pauper oracletag:{{ tag.tag }}
```

</div>
