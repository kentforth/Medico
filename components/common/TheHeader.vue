<template>
  <div class="header">
    <div class="container">
      <!--SEARCH-->
      <InputSearch
        :placeholder="inputPlaceholder"
        :search-type="inputPlaceholder"
      />
      <div class="settings">
        <!--NOTIFICATION-->
        <div class="notification">
          <div class="notification__circle">
            <div>5</div>
          </div>
          <SvgIcon name="bell" :width="30" />
        </div>

        <!--PROFILE-->
        <div class="profile">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
          <SvgIcon name="arrow" :width="10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import InputSearch from '~/components/common/Form/InputSearch.vue'

@Component({ name: 'TheHeader', components: { InputSearch } })
export default class TheHeader extends Vue {
  searchType: string = 'appointment'
  inputPlaceholder: string = `Search an ${this.searchType}`
}
</script>

<style scoped lang="scss">
.header {
  padding: rem(16px);

  .container {
    display: flex;
    justify-content: space-between;

    .settings {
      display: flex;
      align-items: center;

      .notification {
        margin-top: rem(5px);
        position: relative;
        cursor: pointer;

        &__circle {
          position: absolute;
          top: -8px;
          right: -5px;
          z-index: 2;

          div {
            background-color: $red;
            border-radius: 50%;
            font-size: rem(10px);
            display: flex;
            justify-content: center;
            align-items: center;
            color: $white;
            width: rem(22px);
            height: rem(22px);
            border: 3px solid $white;
          }
        }

        .svg-icon {
          transform: rotate(25deg);
        }
      }

      .profile {
        margin-left: rem(20px);
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
        }

        .svg-icon {
          margin-left: rem(10px);
        }
      }
    }
  }
}
</style>
