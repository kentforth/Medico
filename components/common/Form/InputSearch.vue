<template>
  <div class="input" :class="{ 'input-hide': searchType === 'Dashboard' }">
    <input type="text" :placeholder="placeholderText" />
    <SvgIcon name="search" :width="15" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'

@Component({
  name: 'InputSearch',
  computed: {
    ...mapState('header', {
      placeholder: 'placeholder',
      searchType: 'searchType',
    }),
  },
})
export default class InputSearch extends Vue {
  placeholder!: string
  public get placeholderText(): string {
    return this.placeholder
  }
}
</script>

<style scoped lang="scss">
.input {
  width: rem(400px);
  position: relative;

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

  .svg-icon {
    position: absolute;
    top: 13px;
    right: 15px;
  }
}

.input-hide {
  pointer-events: none;
  opacity: 0;
}
</style>
