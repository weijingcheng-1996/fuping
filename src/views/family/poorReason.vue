<template>
  <div class="poorReason">
    <div class="contentRoot">
      <div v-for="(item,index) in list" :key='index'>
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
        list:[
            {
                label:'识别标准',
                content:'',
                key:'aac005'
            },
            {
                label:'是否军烈属',
                content:'',
                key:'aac012'
            },
            {
                label:'主要致贫原因',
                content:'',
                key:'aac007'
            },
            {
                label:'其他致贫原因',
                content:'',
                key:'aac008'
            },
            {
                label:'返贫原因',
                content:'',
                key:'aac009'
            },
            {
                label:'联系电话',
                content:'',
                key:'aar012'
            },
        ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.hanleData()
    },200);
  },
  methods:{
    hanleData(){
       var userInfo = this.$store.state.userInfo;
      this.list.map(value=>{
        if(Object.prototype.toString.call(userInfo[value.key]) === '[object Object]'){
          value.content=userInfo[value.key].label
        }else{
          value.key==='aac031'?value.content=userInfo[value.key].substr(0,10)+'*********':value.content=userInfo[value.key]
        }
      })
    }
  }
};
</script>
<style scoped>
.poorReason {
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
  margin:0 0.3rem;
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