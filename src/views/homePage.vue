<template>
  <div class="homePage">
    <Grid :gridList="gridList" :gridNum="3"/>
    <div class="optionList">
      <router-link v-for="(item,index) in optionList" :key="index" :to="item.url" class="option">
        <img :src="item.icon" class="optionListLabel" alt />
        <p class="labelContent">{{item.label}}</p>
        <div class="isLink"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Grid from '@/components/Grid'
export default {
  name: "homePage",
  components:{
    Grid
  },
  data() {
    return {
      gridList: [
        {
          title: "户主",
          icon: "/static/image/homepage/menu_name.png",
          text: "",
          key: "aac029"
        },
        {
          title: "户主证件号",
          icon: "/static/image/homepage/menu_id_no.png",
          text: "",
          key: "aac031"
        },
        {
          title: "脱贫状态",
          icon: "/static/image/homepage/menu_leave_poor_status.png",
          text: "",
          key: "aar010"
        },
        {
          title: "家庭人口",
          icon: "/static/image/homepage/menu_family_number.png",
          text: "",
          key: "aac017",
          url: "/family/familyInfo"
        },
        {
          title: "脱贫时间",
          icon: "/static/image/homepage/menu_first_date.png",
          text: "",
          key: "aac023"
        },
        {
          title: "重点帮扶标志",
          icon: "/static/image/homepage/menu_familiy_status.png",
          text: "",
          key: "aac015"
        }
      ],
      optionList: [
        {
          label: "家庭基本情况",
          url: "/family",
          icon: "/static/image/homepage/familyInfo.png"
        },
        {
          label: "生产生活条件",
          url: "/lifeProduction",
          icon: "/static/image/homepage/condition.png"
        },
        {
          label: "异地搬迁信息",
          url: "/relocate",
          icon: "/static/image/homepage/moving.png"
        },
        {
          label: "帮扶责任人结对信息",
          url: "/helpObject",
          icon: "/static/image/homepage/couple.png"
        },
        {
          label: "帮扶措施",
          url: "/measures",
          icon: "/static/image/homepage/measures.png"
        },
        {
          label: "医疗信息",
          url: "/medicalCare/info",
          icon: "/static/image/homepage/medicalCare.png"
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
      this.gridList.map(value => {
        if (
          Object.prototype.toString.call(userInfo[value.key]) ===
          "[object Object]"
        ) {
          value.text = userInfo[value.key].label;
        } else {
          value.key === "aac031"
            ? (value.text = userInfo[value.key].substr(0, 10) + "*********")
            : (value.text = userInfo[value.key]);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isLink {
  width: 0.12rem;
  height: 0.12rem;
  border-bottom: 2px solid #c8c8cd;
  border-right: 2px solid #c8c8cd;
  transform: rotate(-45deg);
}
.optionList {
  display: flex;
  flex-direction: column;
  /* padding: 0 0.4rem; */
}
.optionListLabel {
  width: 0.4rem;
  height: 0.4rem;
}
.labelContent {
  font-size: 0.34rem;
  flex-grow: 1;
  margin-left: 0.2rem;
  color: black;
}
.option {
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
  border-bottom: 1px solid #e5e5e5;
  margin: 0 0.4rem;
}
.optionList::before {
  display: block;
  content: "";
  width: 7.5rem;
  height: 0.4rem;
  background-color: #f8f8f8;
}
</style>
