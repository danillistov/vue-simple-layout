<template>

    <li>
      {{ title }} {{ price }}$ {{count}} {{total = count * price}}
      <v-btn v-on:click="$emit('remove')" flat icon><v-icon>clear</v-icon></v-btn>
    </li>

</template>

<script>
    export default {
   props:['title','price','count','total']
 }
</script>
