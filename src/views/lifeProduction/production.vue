<template>
  <div class="production">
    <div class="contentRoot">
      <div v-for="(item,index) in list" :key="index">
        <p class="label">{{item.label}}</p>
        <p class="content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          label: "耕地面积",
          content: "",
          key:'aac301'
        },
        {
          label: "有效浇灌面积",
          content: "",
          key:'aac302'
        },
        {
          label: "林地面积",
          content: "",
          key:'aac303'
        },
        {
          label: "退耕还林面积",
          content: "",
          key:'aac304'
        },
        {
          label: "林果面积",
          content: "",
          key:'aac305'
        },
        {
          label: "牧草地面积",
          content: "",
          key:'aac306'
        },
        {
          label: "水面面积",
          content: "",
          key:'aac307'
        },
        {
          label: "是否通生产用电",
          content: "",
          key:'aac308'
        },
        {
          label: "是否加入农民专业合作社",
          content: "",
          key:'aac084'
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.hanleData();
    }, 200);
  },
  methods: {
    hanleData() {
      var userInfo = this.$store.state.userInfo;
      this.list.map(value => {
        if (
          Object.prototype.toString.call(userInfo[value.key]) ===
          "[object Object]"
        ) {
          value.content = userInfo[value.key].label;
        } else {
          value.key === "aac031"
            ? (value.content = userInfo[value.key].substr(0, 10) + "*********")
            : (value.content = userInfo[value.key]);
        }
      });
    }
  }
};
</script>
<style scoped>
.production {
  padding: 0.4rem 0.1rem 0;
  background-color: #f0f0f0;
}
.contentRoot {
  background-color: white;
}
.contentRoot > div {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0;
  margin: 0 0.3rem;
  border-bottom: 1px solid #f0f0f0;
}
.label {
  font-size: 0.34rem;
}
.content {
  font-size: 0.34rem;
  color: #999;
}
</style>