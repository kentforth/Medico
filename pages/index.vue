<template>
  <div>sdfsdf</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ name: 'Home' })
export default class Home extends Vue {
  created() {
    this.$router.push({ name: 'dashboard' })
  }
}
</script>
