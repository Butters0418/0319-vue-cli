<template>
  <div>new page</div>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item">元件a</router-link >
        <router-link to="/newpage/b" class="list-group-item">元件b</router-link >
        <router-link to="/newpage/namedview/c2a" class="list-group-item">元件c,元件a</router-link >
        <router-link to="/newpage/namedview/a2b" class="list-group-item">元件a,元件b</router-link >
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>

</template>
