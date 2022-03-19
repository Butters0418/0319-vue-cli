<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <MyCard></MyCard>
</template>

<script>
// @ is an alias to /src
import MyCard from '@/components/MyCard.vue'

export default {
  components: {
    MyCard
  }
}
</script>
