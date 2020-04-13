<template>
  <div>
    <div class="familyInfo">
      <p class="title">家庭成员</p>
      <div class="contentRoot">
        <div v-for="(item,index) in familyInfo" :key="index" @click="changTab(index)">
          <p class="label">{{item}}</p>
          <van-icon v-show="chooseFamily === index" name="success" size="0.4rem" color="#11c393" />
        </div>
      </div>
    </div>
    <p class="title">成员具体信息</p>
    <div class="contentRoot">
      <div v-for="(item,index) in list" :key="index">
        <p class="label">{{item.label}}</p>
        <p class="content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getFamilyInfo } from "@/api/Family";
export default {
  data() {
    return {
      familyInfo: [],
      list: [
        {
          label: "姓名",
          content: "",
          key: "aab002"
        },
        {
          label: "与户主之间的关系",
          content: "",
          key: "aab006"
        },
        {
          label: "性别",
          content: "",
          key: "aab003"
        },
        {
          label: "证件类型",
          content: "居民身份证(户口薄)",
          key: "aab018"
        },
        {
          label: "证件号码",
          content: "",
          key: "aab004"
        },
        {
          label: "生日",
          content: "",
          key: "aab005"
        },
        {
          label: "民族",
          content: "",
          key: "aab007"
        },
        {
          label: "在校生情况",
          content: "",
          key: "aab009"
        },
        {
          label: "文化程度",
          content: "",
          key: "aab008"
        },
        {
          label: "是否参加大病保险",
          content: "",
          key: "aab022"
        },
        {
          label: "是否享受农村居民最低生活保障",
          content: "",
          key: "aab030"
        },
        {
          label: "是否参加商业补充医疗保险",
          content: "",
          key: "aab067"
        },
        {
          label: "是否参加城乡居民基本养老保险",
          content: "",
          key: "aab014"
        },
        {
          label: "是否参加城乡居民基本医疗保险",
          content: "",
          key: "aab013"
        },
        {
          label: "是否接受大病医疗救助",
          content: "",
          key: "aab030"
        },
        {
          label: "是否参加城镇职工基本养老保险",
          content: "",
          key: "aab021"
        },
        {
          label: "健康情况",
          content: "",
          key: "aab017"
        }
      ],
      info: [],
      chooseFamily: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await getFamilyInfo();
      console.log(data);
      this.info = data;
      data.map(value => {
        this.familyInfo.push(value.aab002);
      });
      this.getFamilyContent();
    },
    getFamilyContent() {
      let familyContent = this.info[this.chooseFamily];
      this.list.map(value => {
        if (
          Object.prototype.toString.call(familyContent[value.key]) ===
          "[object Object]"
        ) {
          value.content = familyContent[value.key].label;
        } else {
          switch (value.key) {
            case "aab004":
              value.content =
                familyContent[value.key].substr(0, 10) + "*********";
              break;
            default:
              value.content = familyContent[value.key]
                ? familyContent[value.key]
                : "无";
          }
        }
      });
    },
    changTab(index) {
      this.chooseFamily = index;
      this.getFamilyContent();
    }
  }
};
</script>
<style scoped>
.title {
  font-size: 0.28rem;
  padding: 0.2rem 0.3rem;
  background-color: #f0f0f0;
}
.familyInfo {
  padding: 0rem 0.1rem 0;
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