<template>
  <div>
    <van-tabs :active="defaultActive" line-width='50%' title-active-color='#ee0a24'	 @change="changeTab">
      <van-tab v-for="(item,index) in tabOption" :key="index" :title="item.title">
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultActive: 0,
      tabOption: [
        {
          title: "生活条件",
          url: "life"
        },
        {
          title: "生产条件",
          url: "production"
        }
      ]
    };
  },
   watch:{
    $route: {
      handler(newValue, oldValue) {
        this.tabOption.find((value,index)=>{
          if(newValue.name===value.title){
            this.defaultActive = index
            return true
          }
        })
      },
      immediate: true
    },
  },
  methods: {
    changeTab(index, title) {
      console.log(index,'生活生产的tab栏');
      this.$router.replace(`/lifeProduction/${this.tabOption[index].url}`);
    }
  }
};
</script>