<template>
  <div class="container">
    <div class="appointment">
      <h1>Appointments</h1>

      <!--TABLE-->
      <TableAppointments />

      <!--BUTTON-->
      <ButtonRound class="btn-round">
        <SvgIcon name="stethoscope" :width="40" />
      </ButtonRound>

      <!--MODAL-->
      <ModalAddItem />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TableAppointments from '~/components/pages/Appointments/TableAppointments.vue'
import ButtonRound from '~/components/common/ButtonRound.vue'
import ModalAddItem from '~/components/common/Modal/ModalAddItem.vue'

@Component({
  name: 'Appointments',
  components: { ModalAddItem, ButtonRound, TableAppointments },
})
export default class Appointments extends Vue {}
</script>

<style scoped lang="scss">
.container {
  padding-top: 2em;

  .btn-round {
    background-color: $blue;
    padding: rem(20px);
    position: fixed;
    bottom: rem(30px);
    right: rem(30px);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: $transition;

    &:hover {
      background-color: $blue-dark;
    }
  }
}
</style>
