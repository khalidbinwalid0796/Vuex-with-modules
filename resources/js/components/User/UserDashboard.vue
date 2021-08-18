<!-- 
  //working code
<template>
  <div>
   <h2>User Dashboard</h2>
  </div>
</template>

<script>
export default {
    name: "UserDashboard"
};  
</script>

<style>

</style>
 -->

<template>
  <div>
   <h2>User Dashboard</h2>
   <h2>User Name : {{ user.name }}</h2>
  </div>
</template>

<script>
export default {
    name: "UserDashboard",
    computed : {
      user() {
        return this.$store.getters['user/getAuthUser']
      }
    }
};  
</script>

<style>

</style>