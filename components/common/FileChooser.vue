<template>
  <div class="file-chooser">
    <input
      id="file"
      type="file"
      accept="image/png, image/jpeg, image/jpg, image/webp"
    />
    <label for="file" class="file-chooser__button">
      Select Image
      <SvgIcon name="user-2" :width="20" />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ name: 'FileChooser' })
export default class FileChooser extends Vue {}
</script>

<style scoped lang="scss">
.file-chooser {
  &__button {
    display: flex;
    background-color: $white;
    border: 1px solid $blue;
    height: rem(40px);
    border-radius: $border-radius;
    width: max-content;
    padding: rem(10px) rem(20px);
    color: $blue;
    font-weight: 600;
    cursor: pointer;

    .svg-icon {
      margin-left: rem(10px);
    }
  }
}
input[type='file'] {
  display: none;
}

label {
}
</style>
