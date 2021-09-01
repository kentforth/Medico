<template>
  <div class="input">
    <input type="text" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Input',
})
export default class Input extends Vue {
  @Prop({ required: true, type: String }) placeholder!: string
}
</script>

<style scoped lang="scss">
.input {
  input {
    width: 100%;
    border-radius: rem(20px);
    font-size: rem(16px);
    padding: rem(10px) rem(40px) rem(10px) rem(20px);
    outline: none;
    background-color: $gray-soft;
    border: 1px solid $gray-soft;
    font-family: 'Lato', sans-serif;
    color: $black;

    &::placeholder {
      color: $gray-dark;
    }

    &:hover {
      transition: 0.3s ease-out;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }

    &:focus {
      border-color: $blue;
      background-color: $white;
    }
  }
}
</style>
