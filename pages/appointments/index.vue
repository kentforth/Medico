<template>
  <div class="container">
    <div class="appointment">
      <h1>Appointments</h1>

      <!--TABLE-->
      <TableAppointments />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TableAppointments from '~/components/pages/Appointments/TableAppointments.vue'

@Component({ name: 'Appointments', components: { TableAppointments } })
export default class Appointments extends Vue {}
</script>

<style scoped lang="scss">
.container {
  padding-top: 2em;
}
</style>
