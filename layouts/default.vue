<template>
  <div class="default">
    <TheHeader />
    <TheSidebar />
    <Nuxt />
  </div>
</template>

<script>
import TheSidebar from '@/components/common/TheSidebar'
import TheHeader from '@/components/common/TheHeader'
export default {
  name: 'Default',
  components: { TheHeader, TheSidebar },
}
</script>

<style scoped lang="scss">
.default {
  display: grid;
  grid-template-columns: max-content 1fr;

  .header {
    grid-column: 2;
  }
}
</style>
