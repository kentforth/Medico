<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Visit Time</th>
          <th>Phone Number</th>
          <th>Doctor</th>
          <th>Injury/Condition</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="appointment in appointments" :key="appointment.id">
          <td>
            <img :src="appointment.image" alt="" />
          </td>
          <td>{{ appointment.name }}</td>
          <td class="table__email">
            <p>@ {{ appointment.email }}</p>
          </td>
          <td>{{ appointment.date }}</td>
          <td>{{ appointment.visitTime }}</td>
          <td>
            <div class="table__phone">
              <SvgIcon name="phone" :width="20" />
              {{ appointment.phone }}
            </div>
          </td>
          <td>{{ appointment.doctor }}</td>
          <td>{{ appointment.injury }}</td>
          <td>
            <div class="table__action-buttons">
              <ButtonRound class="btn-edit">
                <SvgIcon name="pencil" :width="15" />
              </ButtonRound>
              <ButtonRound class="btn btn-delete">
                <SvgIcon name="trash" :width="15" />
              </ButtonRound>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ButtonRound from '~/components/common/ButtonRound.vue'

@Component({ name: 'TableAppointments', components: { ButtonRound } })
export default class TableAppointments extends Vue {
  appointments: object[] = [
    {
      id: 1,
      image:
        'https://i1.wp.com/thatrandomagency.com/wp-content/uploads/2021/06/headshot.png?resize=618%2C617&ssl=1',
      name: 'Natalia Andreichenko',
      email: 'kennasdasdadasdtguru@mail.com',
      date: '10 Feb 2018',
      visitTime: '9:15-9:45',
      phone: '+79095485966',
      doctor: 'Dr. Benjamin',
      injury: 'mumps',
    },
    {
      id: 2,
      image:
        'https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2020/05/0.jpg?resize=500%2C500&ssl=1',
      name: 'John Smith',
      email: 'kenntguru@mail.com',
      date: '10 Feb 2021',
      visitTime: '9:15-9:45',
      phone: '+79095485966',
      doctor: 'Dr. Benjamin',
      injury: 'hypothermia',
    },
    {
      id: 3,
      image:
        'https://i.dailymail.co.uk/i/pix/2014/03/26/article-0-1C91BEE700000578-336_306x393.jpg',
      name: 'Olga Kurilenko',
      email: 'kenntguru@mail.com',
      date: '10 Feb 2021',
      visitTime: '9:15-9:45',
      phone: '+79095485966',
      doctor: 'Dr. Benjamin',
      injury: 'hypothermia',
    },
  ]
}
</script>

<style scoped lang="scss">
.table {
  margin-top: rem(20px);
  table {
    width: 100%;
    border-collapse: collapse;
    background: $gray-soft;

    th {
      font-size: rem(16px);
    }

    th {
      padding: rem(10px);
      &:nth-child(1) {
        width: rem(70px);
      }
      &:nth-child(2) {
        width: rem(200px);
      }

      &:nth-child(4),
      &:nth-child(5) {
        width: rem(120px);
      }
      &:nth-child(6) {
        width: rem(150px);
      }
      &:nth-child(7) {
        width: rem(200px);
      }
    }

    td {
      padding: rem(10px);
    }

    tr {
      text-align: left;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        transition: 0.3s ease;
      }
      td {
        img {
          width: rem(40px);
          height: rem(40px);
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
        }

        &:first-child {
          padding-left: rem(20px);
        }

        &:nth-child(3) {
          width: rem(170px);
          p {
            width: rem(170px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }

    tbody {
      max-height: 500px;
      overflow-y: scroll;
      background-color: $gray-light;
    }

    .table-text p {
      width: 400px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__email {
    color: $blue;
  }

  &__phone {
    display: flex;
    align-items: center;
    color: $blue;
  }

  &__action-buttons {
    display: flex;

    .btn-edit {
      transition: 0.3s ease;
      background-color: $blue-soft;

      .svg-icon {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(314deg)
          brightness(104%) contrast(105%);
      }

      &:hover {
        background-color: $blue-dark;
      }
    }

    .btn-delete {
      transition: 0.3s ease;
      margin-left: 15px;
      background-color: $red;

      &:hover {
        background-color: $red-dark;
      }
    }
  }
}
</style>
