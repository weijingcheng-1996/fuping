<template>
  <div class="life">
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
          label: "与村主干路距离",
          content: "",
          key:'aac315'
        },
        {
          label: "入户路类型",
          content: "",
          key:'aac316'
        },
        {
          label: "住房面积",
          content: "",
          key:'aac317'
        },
        {
          label: "饮水是否困难",
          content: "",
          key:'aac311'
        },
        {
          label: "饮水是否安全",
          content: "",
          key:'aac312'
        },
        {
          label: "有无卫生厕所",
          content: "",
          key:'aac319'
        },
        {
          label: "主要燃料类型",
          content: "",
          key:'aac320'
        },
        {
          label: "是否危房户",
          content: "否",
          key:'aac318'
        },
        {
          label: "危房级别",
          content: "",
          key:'aac322'
        },
        {
          label: "是否通生活用电",
          content: "是",
          key:'aac308'
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
.life {
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