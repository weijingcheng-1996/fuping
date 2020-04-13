<template>
  <div>
    <div class="projectInfo">项目信息</div>
    <van-cell-group v-for="(value,number) in data" :key="number">
      <van-cell
        v-for="(item,index) in value"
        :key="index"
        class="projectName"
        :title="item.title"
        :value="item.value"
        size="large"
        value-class="value"
      />
    </van-cell-group>
  </div>
</template>
<script>
import { getFactionInfo } from "@/api/Measures";
export default {
  data() {
    return {
      list: [
        {
          title: "项目名称",
          value: "",
          key: "ACR002"
        },
        {
          title: "项目类型",
          value: "",
          key: "ACR005"
        },
        {
          title: "项目子类型",
          value: "",
          key: "ACR009"
        },
        {
          title: "开始时间",
          value: "",
          key: "AAR020"
        },
        {
          title: "结束时间",
          value: "",
          key: "AAR021"
        }
      ],
      data: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await getFactionInfo();
      console.log(data);
      data.map(res => {
        var arr = JSON.parse(JSON.stringify(this.list));
        arr.map(value => {
          if (
            Object.prototype.toString.call(res[value.key]) ===
            "[object Object]"
          ) {
            value.value = res[value.key].label;
          } else {
            value.key === "aac031"
              ? (value.value = res[value.key].substr(0, 10) + "*********")
              : (value.value = res[value.key]);
          }
        });
        this.data.push([...arr]);
      });
    }
  }
};
</script>
<style scoped>
.projectInfo {
  font-size: 0.14rem;
  background-color: #f1f1f0;
  padding: 0.2rem 0.15rem 0.1rem 0.15rem;
}
.projectName {
  font-size: 17px;
}
.value{
  flex-grow: 2;
}
</style>