# Simboli carte

You can use with this code:

```
<img
    src="<symbol>"
    alt="alt text"
    style="height: 1em; display: inline-block; vertical-align: middle;">
</img>
```

<ul>
<li v-for="(symbol, i) in symbols" :key="i">

<img :src="`${symbol}`" :alt="i.toString()" style="height: 1em; display: inline-block; vertical-align: middle;"></img>: `{{ symbol }}`

</li>
</ul>

<script setup lang="ts">
  import { useManaSymbols } from "./.vitepress/composables/manaSymbols";

  const { symbols } = useManaSymbols();
</script>
