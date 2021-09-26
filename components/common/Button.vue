<template>
  <button class="button" :type="type" @click="click">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({ name: 'Button' })
export default class Button extends Vue {
  @Prop({ required: true, type: String }) text!: string
  @Prop({ required: true, type: String }) type!: string

  public click(): void {
    this.$emit('click')
  }
}
</script>

<style scoped lang="scss">
.button {
  border-radius: $border-radius;
  font-size: rem(20px);
  outline: none;
  border: none;
  padding: rem(10px) rem(15px);
  font-family: 'Lato', sans-serif;
  cursor: pointer;
}
</style>
