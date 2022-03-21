<template>
  <div>dynamic router by props</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['myPropsId'],
  created () {
    // console.log(this.$route.params.myId)
    // const seed = 'f17dfd77731ce163'
    console.log('props:', this.myPropsId)
    const seed = this.myPropsId
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res)
    })
  }
}
</script>
