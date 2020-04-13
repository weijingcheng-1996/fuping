<template>
  <div>
    <div v-for="(data,number) in list" :key="number">
      <div class="space"></div>
      <van-cell-group class="content" v-for="(item,index) of data" :key="index">
        <van-cell v-show="item.value" :title="item.name" :value="item.value" size="large" />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import { getHelpInfo } from "@/api/Help";
export default {
  data() {
    return {
      info: [
        {
          name: "姓名",
          value: "",
          key: "AAB002"
        },
        {
          name: "单位名称",
          value: "",
          key: "AAP001"
        },
        {
          name: "是否是驻村队员",
          value: "",
          key: "AAK039"
        },
        {
          name: "开始时间",
          value: "",
          key: "AAR020"
        },
        {
          name: "终止时间",
          value: "",
          key: "AAR021"
        },
        {
          name: "技术特长",
          value: "",
          key: "AAK037"
        },
        {
          name: "职务级别",
          value: "",
          key: "AAF031"
        },
        {
          name: "单位隶属关系",
          value: "",
          key: "AAP004"
        },
        {
          name: "学历",
          value: "",
          key: "AAK036"
        }
      ],
      list: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getHelpInfo().then(data => {
        console.log(data);
        data.map(res => {
          var arr = JSON.parse(JSON.stringify(this.info));
          arr.map(value => {
            if (
              Object.prototype.toString.call(res[value.key]) ===
              "[object Object]"
            ) {
              value.value = res[value.key].label;
            } else {
              value.value = res[value.key];
            }
            return value;
          });
          this.list.push([...arr]);
        });
      });
    }
  }
};
</script>
<style scoped>
.space {
  width: 100%;
  height: 0.3rem;
  background-color: #f1f1f0;
}
.content {
  margin: 0 0.05rem;
}
</style>