<template>
  <div>
    <div class="adressHeader">
      <img src="/static/image/family/address_icon.png" class="addressIcon" alt="">
      <p>{{address}}</p>
    </div>
    <van-tabs :active="defaultActive" line-width='50%' title-active-color='#ee0a24' @change="changeTab">
      <van-tab v-for="(item,index) in tabOption" :key="index" :title="item.title"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
import {getAddressInfo} from '@/api/Address'
export default {
  data() {
    return {
      address: "",
      defaultActive: 0,
      tabOption: [
        {
          title: "贫困原因",
          url: "poorReason"
        },
        {
          title: "家庭成员信息",
          url: "familyInfo"
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
  created(){
    this.getUserAddress()
  },
  methods: {
    changeTab(index, title) {
      this.$router.replace(`/family/${this.tabOption[index].url}`);
    },
    async getUserAddress(){
      const data = await getAddressInfo()
      this.address = data.name
    }
  }
};
</script>
<style scoped>
.adressHeader{
  display: flex;
  align-items: center;
  font-size: 0.34rem;
  padding:0.2rem 0.3rem;
}
.addressIcon{
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.1rem;
}
</style>