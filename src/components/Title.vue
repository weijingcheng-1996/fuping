<template>
  <div class="title">
    <div v-show="isLink" class="isLink" @click="goBack"></div>
    <div class="titleContent">{{title}}</div>
  </div>
</template>

<script>
import { getInfo } from "@/api/UserInfo";
export default {
  props: ["content"],
  data() {
    return {
      title: "",
      isLink: false,
      userName: ""
    };
  },
  watch: {
    $route: {
      handler(newValue, oldValue) {
        if (newValue.matched[0].name === "homePage") {
          this.isLink = false;
          let userInfo = this.$store.state.userInfo;
          this.title = "贫困户-" + this.userName;
        } else {
          this.isLink = true;
          this.title = newValue.matched[0].name;
        }
      }
    }
  },
  created() {
    this.getList();
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getList() {
      getInfo()
        .then(res => {
          this.userName = res.aac029;
          this.$store.dispatch("createUserInfo", res);
          if (this.$route.name === "homePage") {
            this.title = "贫困户-" + this.userName;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.isLink {
  width: 0.12rem;
  height: 0.12rem;
  border-bottom: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  transform: rotate(135deg);
}
.title {
  display: flex;
  background-color: #cb3315;
  color: white;
  font-size: 0.35rem;
  padding: 0.25rem;
  position: relative;
  align-items: center;
}
.titleContent {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
