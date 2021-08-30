<template>
  <div class="sidebar">
    <nuxt-link :to="{ name: 'dashboard' }" class="logo">
      <SvgIcon name="logo" :width="150" />
    </nuxt-link>

    <div class="links">
      <nuxt-link
        v-for="link in linksList"
        :key="link.name"
        class="links__item"
        :to="{ name: link.name }"
        @click.native="setSearhType(link.title)"
      >
        <SvgIcon :name="link.icon" :width="link.iconWidth" />
        <span>{{ link.title }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapMutations } from 'vuex'

@Component({
  name: 'TheSidebar',

  methods: {
    ...mapMutations('header', {
      setSearchInputPlaceholder: 'SET_SEARCH_INPUT_PLACEHOLDER',
      setSearchType: 'SET_SEARCH_TYPE',
    }),
  },
})
export default class TheSidebar extends Vue {
  searchType: string = ''
  linksList: object[] = [
    {
      title: 'Dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      iconWidth: 20,
    },
    {
      title: 'Appointments',
      name: 'appointments',
      icon: 'appointment',
      iconWidth: 20,
    },
  ]

  setSearchInputPlaceholder!: (placeholderText: string) => any
  setSearchType!: (searchType: string) => any

  // computed
  get placeHolderText(): string {
    switch (this.searchType) {
      case 'Dashboard':
        return 'search a dashboard'
      case 'Appointments':
        return 'search an appointment by patient name'
      default:
        return 'search'
    }
  }

  // methods
  setSearhType(title: string): void {
    this.searchType = title
    this.setSearchInputPlaceholder(this.placeHolderText)
    this.setSearchType(this.searchType)
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  width: $sidebar-width;
  background-color: $gray-light;
  height: 100vh;
  padding: rem(10px) 0 rem(22px) 0;

  .logo {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .links {
    display: grid;
    grid-template-columns: 1fr;

    &__item {
      display: flex;
      align-items: center;
      height: rem(35px);
      padding: 0 rem(25px);

      span {
        font-size: rem(18px);
        margin-left: rem(10px);
        color: $black;
        font-weight: 600;
      }

      &:hover {
        span {
          color: $blue;
          transition: $transition-links;
        }

        .svg-icon {
          filter: invert(41%) sepia(75%) saturate(5103%) hue-rotate(217deg)
            brightness(100%) contrast(97%);
          transition: all 0.2s ease-in-out;
        }
      }
    }

    .nuxt-link-exact-active span {
      color: $blue;
    }

    .nuxt-link-exact-active .svg-icon {
      filter: invert(41%) sepia(75%) saturate(5103%) hue-rotate(217deg)
        brightness(100%) contrast(97%);
    }
  }
}
</style>
