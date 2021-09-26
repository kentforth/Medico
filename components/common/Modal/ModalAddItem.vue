<template>
  <div class="modal">
    <client-only>
      <ValidationObserver ref="observer" tag="div" class="components__item">
        <form class="form" @submit.prevent="onSubmit">
          <h1>Add New Appointment</h1>

          <!--FILE CHOOSER-->
          <div class="form__image">
            <SvgIcon v-if="!hasProfileImage" name="user" :width="40" />
            <img v-else :src="profileImage" alt="" class="form__image-icon" />
            <FileChooser @change="getImage" />
          </div>

          <!--INPUTS-->
          <div class="form__inputs">
            <Input
              v-model="form.name"
              type="text"
              :placeholder="placeholder.name"
              rules="required"
              field-name="name"
            />
            <Input
              v-model="form.doctor"
              type="text"
              :placeholder="placeholder.doctor"
              rules="required"
              field-name="doctor"
            />
            <Input
              v-model="form.email"
              type="email"
              :placeholder="placeholder.email"
              rules="required|email"
              field-name="email"
            />
            <el-date-picker
              v-model="form.date"
              onkeydown="return false;"
              type="date"
              rules="required"
              format="dd-MM-yyyy"
              default-value="2010-10-01"
            />
            <Input
              v-model="form.timeFrom"
              type="text"
              :placeholder="placeholder.timeFrom"
              rules="required"
              field-name="timeFrom"
            />
            <Input
              v-model="form.timeTo"
              type="text"
              :placeholder="placeholder.timeTo"
              rules="required"
              field-name="timeTo"
            />
            <Input
              v-model="form.number"
              :placeholder="placeholder.number"
              type="number"
              rules="required|numeric"
              field-name="number"
            />
            <Input
              v-model="form.injure"
              :placeholder="placeholder.injure"
              type="text"
              rules="required"
              field-name="injure"
            />
          </div>

          <!--BUTTONS-->
          <div class="form__buttons">
            <Button
              type="button"
              :text="buttonCancel"
              class="btn-cancel"
              @click.native="cancel"
            />
            <Button type="submit" :text="buttonAdd" class="btn-add" />
          </div>
        </form>
      </ValidationObserver>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { DatePicker } from 'element-ui'
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

@Component({
  name: 'ModalAddItem',
  components: { Button, Input, FileChooser, [DatePicker.name]: DatePicker },
})
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

  profileImage: string | ArrayBuffer | null = ''
  buttonCancel: string = 'Cancel'
  buttonAdd: string = 'Add Appointment'
  hasProfileImage: boolean = false

  form = {
    name: '',
    doctor: '',
    email: '',
    date: '',
    timeFrom: '',
    timeTo: '',
    number: '',
    injure: '',
  }

  get image(): string {
    return '~assets/icons/user.svg'
  }

  /**
   * get file from input
   */
  getImage(files: Blob[]): void {
    if (files && files[0]) {
      const reader = new FileReader()
      reader.readAsDataURL(files[0])

      reader.onload = (event) => {
        this.setImage(event)
      }
    }
  }

  /**
   * set image from file
   * @param event
   */
  setImage(event: ProgressEvent<FileReader>): void {
    this.profileImage = (event as any).target.result
    this.hasProfileImage = true
  }

  public onSubmit(): void {
    ;(this as any).$refs.observer.validate().then((success: boolean) => {
      if (success) {
        console.log('success')
      }
    })
  }

  cancel(): void {
    console.log('cancel')
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
    width: 450px;
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
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center top;

      svg {
        width: 40px;
        height: 40px;
      }
    }

    &__inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: rem(20px);
      margin: rem(30px) rem(20px) 0 rem(20px);

      .el-input {
        grid-column: span 2;
        width: 100%;
      }

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
