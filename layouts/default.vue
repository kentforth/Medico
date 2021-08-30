<template>
  <div class="default">
    <TheHeader />
    <TheSidebar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapMutations } from 'vuex'
import TheSidebar from '~/components/common/TheSidebar.vue'
import TheHeader from '~/components/common/TheHeader.vue'

@Component({
  name: 'Default',
  components: { TheHeader, TheSidebar },
  methods: {
    ...mapMutations('header', {
      setSearchInputPlaceholder: 'SET_SEARCH_INPUT_PLACEHOLDER',
      setSearchType: 'SET_SEARCH_TYPE',
    }),
  },
})
export default class Default extends Vue {
  searchType: string = ''

  setSearchInputPlaceholder!: (placeholderText: string) => void
  setSearchType!: (searchType: string) => void

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

  created() {
    const searchType: string =
      this.$route.name!.charAt(0).toUpperCase() +
      this.$route.name?.slice(1).toLowerCase()
    this.searchType = searchType
    this.setSearchType(searchType)
    this.setSearchInputPlaceholder(this.placeHolderText)
  }
}
</script>

<style scoped lang="scss">
.default {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 70px max-content;

  .header {
    grid-column: 2;
  }

  .sidebar {
    grid-row: 1 / span 2;
  }
}
</style>
