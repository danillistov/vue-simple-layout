<template>

    <li>
      {{ title }}
      <v-btn v-on:click="$emit('remove')" flat icon><v-icon>clear</v-icon></v-btn>
    </li>

</template>

<script>
    export default {
   props:['title']
 }
</script>
