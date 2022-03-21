<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/"  class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/newpage" class="nav-link">新分頁</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: '這是新分頁'}"  class="nav-link">新分頁</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <nav class="nav">
    <router-link to="/"  class="nav-link active">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/newpage" class="nav-link">新分頁</router-link>
    <router-link :to="{name: '這是新分頁'}"  class="nav-link">新分頁</router-link>
  </nav> -->
  <div class="container text-center">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: process.env.VUE_APP_TESTMSG
    }
  }
}
</script>

<style lang="scss">
@import "bootstrap";
</style>
