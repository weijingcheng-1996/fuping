<template>
  <div>
    <Grid :gridList='gridList' :gridNum="3" :textColor="'#CA3314'"/>
    <div class="deadline"></div>
    <div>
        <div v-for="(item,index) in personalList" :key='index' class="personalOption" @click="goPersonal(index)">
            <span>{{item}}</span>
        </div>
    </div>
  </div>
</template>


<script>
import Grid from "@/components/Grid";
export default {
  data() {
    return {
      gridList: [
        {
          title: "总医疗费用",
          icon: "/static/image/medicalCare/TotalMedicalExpenses.png",
          text: "￥189964.67",
          key: ""
        },
        {
          title: "医疗机构减免",
          icon: "/static/image/medicalCare/MedicalInstitutionRelief.png",
          text: "￥0",
          key: ""
        },
        {
          title: "医疗补偿",
          icon: "/static/image/medicalCare/MedicalCompensation.png",
          text: "￥59929.15",
          key: ""
        },
        {
          title: "大病补偿",
          icon: "/static/image/medicalCare/SeriousIllnessCompensation.png",
          text: "￥59322.62",
          key: ""
        },
        {
          title: "医疗救助",
          icon: "/static/image/medicalCare/medicalAssistance.png",
          text: "￥19197",
          key: ""
        },
        {
          title: "重特大疾病救助",
          icon: "/static/image/medicalCare/RescueOfMajorAndSeriousDiseases.png",
          text: "￥0",
          key: ""
        },
        {
          title: "医疗救助合计",
          icon: "/static/image/medicalCare/TotalMedicalAssistance.png",
          text: "￥19197",
          key: ""
        },
        {
          title: "个人支付",
          icon: "/static/image/medicalCare/PersonalPayment.png",
          text: "￥51515.9",
          key: ""
        }
      ],
      personalList:['土玉全','李阳快吉','土存成','尼玛措']
    };
  },
  components: {
    Grid
  },
  methods:{
      goPersonal(index){
          this.$router.push('/medicalCare/personalInfo')
          localStorage.setItem('index',index)
      }
  }
};
</script>
<style scoped>
    .deadline{
        background-color: #f8f8f8;
        font-size: 0.24rem;
        text-indent: 2em;
        /* padding: 0.12rem 0; */
        height: 0.4rem;
    }
    .personalOption{
        font-size: 0.28rem;
        border-bottom: 0.2rem solid rgba(248,248,248,1);
        padding: 0.3rem 0;
        padding-left: 0.24rem;
    }
    .personalOption:last-child{
        border-bottom: 0;
    }
</style>