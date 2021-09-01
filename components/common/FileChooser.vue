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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
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
    transition: 0.2s ease;

    .svg-icon {
      margin-left: rem(10px);
    }

    &:hover {
      background-color: $blue;
      color: $white;

      .svg-icon {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(30deg)
          brightness(103%) contrast(101%);
      }
    }
  }
}
input[type='file'] {
  display: none;
}

label {
}
</style>
