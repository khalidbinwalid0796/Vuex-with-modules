<template>
  <div>
    <user-header></user-header>
    <user-bread-crum></user-bread-crum>
    <router-view></router-view>
    <user-footer></user-footer>
  </div>
</template>


<script>
import UserHeader from "./inc/UserHeader";
import UserFooter from "./inc/UserFooter";
import UserBreadCrum from "./inc/UserBreadCrum";
export default {
  name: "UserMaster",
  components: {
    UserHeader,
    UserFooter,
    UserBreadCrum
  }
};
</script>