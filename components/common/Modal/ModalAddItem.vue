<template>
  <div class="modal">
    <form class="form" @submit.prevent="submit">
      <h1>Add New Appointment</h1>
      <div class="form__image">
        <SvgIcon name="user" :width="40" />
        <img src="~/assets/icons/user.svg" alt="" class="form__image-icon" />
        <FileChooser />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FileChooser from '~/components/common/FileChooser.vue'

@Component({ name: 'ModalAddItem', components: { FileChooser } })
export default class ModalAddItem extends Vue {
  submit(): void {
    console.log('success')
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    background-color: $white;
    width: 40%;
    padding: rem(20px);
    border-radius: $border-radius;

    h1 {
      font-size: rem(25px);
    }

    &__image {
      margin: rem(20px) 0 rem(15px) 0;
      display: grid;
      grid-template-columns: 50px 1fr;
      align-items: center;
      grid-gap: rem(20px);
      width: rem(300px);

      .file-chooser {
        grid-column: 2;
        grid-row: 1;
      }
    }

    &__image-icon {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
