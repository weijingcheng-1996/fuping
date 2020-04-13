<template>
  <div calss="contentAll">
    <div class="space"></div>
    <van-cell-group class="content" v-for="(item,index) of list" :key="index">
      <van-cell :title="item.title" :value="item.value" size="large" title-style='flex-grow:2'/>
    </van-cell-group>
  </div>
</template>
<script>
import { getRemovalInfo } from "@/api/Removal";
export default {
  data() {
    return {
      list: [
        {
          title: "搬迁原因",
          value: "",
          key: "acr047"
        },
        {
          title: "搬迁方式",
          value: "",
          key: "acr075"
        },
        {
          title: "安置方式",
          value: "",
          key: "acr078"
        },
        {
          title: "安置地点",
          value: "",
          key: "acr079"
        },
        {
          title: "搬迁可能存在的困难",
          value: "",
          key: "acr081"
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await getRemovalInfo();
      this.list.map(value => {
        value.value = data[value.key].label;
      });
    }
  }
};
</script>
<style scoped>
.contentAll {
  background-color: red;
}
.space {
  width: 100%;
  height: 0.3rem;
  background-color: #f1f1f0;
}
.content {
  margin: 0 0.05rem;
  background-color: red;
}
</style>