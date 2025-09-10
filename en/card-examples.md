# Card examples

<div v-for="tag, i in tags" :key="i">

## {{ tag.title }}

Look for {{tag.title}} organized by color:

<ul>
  <li v-for="color in colors" :key="color"><a :href="`https://scryfall.com/search?q=legal%3Apauper+oracletag%3A${tag.tag}$+color%3D${color}&order=cmc&dir=asc&as=grid&unique=cards`" target="_blank">{{ color }}</a></li>
</ul>

You can search those cards on [Scryfall](https://scryfall.com) using this filter:

```
`legal:pauper color={{ color }} oracletag:{{ tag.tag }}`
```

</div>

<script setup>
  import {ref} from "vue"

  const colors = ["W", "U", "B", "R", "G"];

  const tags = [{title: "Cantrip", tag: "cantrip"}, {title: "Combat tricks", tag: "combat-trick"}, {title: "Counterspells", tag: "counterspell"}];
</script>
