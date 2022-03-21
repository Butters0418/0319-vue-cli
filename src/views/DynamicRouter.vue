<template>
  <div>dynamic router</div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    console.log(this.$route.params.myId)
    // const seed = 'f17dfd77731ce163'
    const seed = this.$route.params.myId
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res)
    })
  }
}
</script>
