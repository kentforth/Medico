<template>
  <div class="modal">
    <form class="form" @submit.prevent="submit">
      <h1>Add New Appointment</h1>

      <!--FILE CHOOSER-->
      <div class="form__image">
        <SvgIcon name="user" :width="40" />
        <img src="~/assets/icons/user.svg" alt="" class="form__image-icon" />
        <FileChooser />
      </div>

      <!--INPUTS-->
      <div class="form__inputs">
        <Input :placeholder="placeholder.name" />
        <Input :placeholder="placeholder.doctor" />
        <Input :placeholder="placeholder.email" />
        <Input :placeholder="placeholder.date" />
        <Input :placeholder="placeholder.timeFrom" />
        <Input :placeholder="placeholder.timeTo" />
        <Input :placeholder="placeholder.number" />
        <Input :placeholder="placeholder.injure" />
      </div>

      <!--BUTTONS-->
      <div class="form__buttons">
        <Button :text="buttonCancel" class="btn-cancel" />
        <Button :text="buttonAdd" class="btn-add" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FileChooser from '~/components/common/FileChooser.vue'
import Input from '~/components/common/Form/Input.vue'
import Button from '~/components/common/Button.vue'

interface IPlaceholder {
  name: string
  doctor: string
  email: string
  date: string
  timeFrom: string
  timeTo: string
  number: string
  injure: string
}

@Component({ name: 'ModalAddItem', components: { Button, Input, FileChooser } })
export default class ModalAddItem extends Vue {
  placeholder: IPlaceholder = {
    name: 'Name',
    doctor: 'Doctor',
    email: 'Email',
    date: 'Date',
    timeFrom: 'Time From',
    timeTo: 'Time To',
    number: 'Number',
    injure: 'Injure',
  }

  buttonCancel: string = 'Cancel'
  buttonAdd: string = 'Add Appointment'

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
    padding: rem(20px) 0 0 0;
    border-radius: $border-radius;

    h1 {
      font-size: rem(25px);
      margin-left: rem(20px);
    }

    &__image {
      margin: rem(20px) 0 rem(15px) rem(20px);
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

    &__inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: rem(20px);
      margin: 0 rem(20px);

      .input {
        grid-column: span 2;

        &:nth-child(5),
        &:nth-child(6) {
          grid-column: span 1;
        }
      }
    }

    &__buttons {
      margin-top: rem(20px);
      background-color: $gray-soft;
      padding: rem(20px);
      display: flex;
      justify-content: space-between;

      .btn-cancel {
        background-color: $red;
        color: $white;
      }

      .btn-add {
        background-color: $blue-soft;
        color: $white;
      }
    }
  }
}
</style>
