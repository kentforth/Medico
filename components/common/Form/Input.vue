<template>
  <div class="input">
    <ValidationProvider
      v-slot="{ errors }"
      :rules="rules"
      class="validation-provider"
      :name="fieldName"
    >
      <input
        :class="{ 'error-border': !!errors[0] }"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <slot></slot>
      <div v-show="!!errors[0]" class="input__error-text">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Input',
})
export default class Input extends Vue {
  @Prop({ required: true, type: String }) placeholder!: string
  @Prop({ type: String }) fieldName!: string
  @Prop({ type: String }) value!: string
  @Prop({ type: String }) rules!: string
  @Prop({ required: true, type: String }) type!: string
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

  &__error-text {
    color: $red;
    margin-left: 10px;
    font-size: 13px;
    transition: 0.35s;
  }
}

.error-border {
  border: 1px solid $red !important;
  transition: 0.35s;
}
</style>
