<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ name: 'ButtonRound' })
export default class ButtonRound extends Vue {}
</script>

<style scoped lang="scss">
.btn {
  outline: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
