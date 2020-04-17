<template>
  <div>
    <div class="deadline">数据截止2019年12月31号</div>
    <div>
        <div class="medicalInfo" v-for="(item,index) in list" :key='index'>
            <p class="medicalTime">
                <span>{{item.year}}年</span>
                <span>{{item.mounth}}月</span>
            </p>
            <div class="hospitalInfo" >
                <p class="hospital">{{item.hospital}}</p>
                <div class="hospitalization">
                    <p class="hospitalizationOption">
                        入院时间：{{item.beHospitalized}}
                    </p>
                    <p class="hospitalizationOption">
                        出院时间：{{item.leaveHospital}}
                    </p>
                    <p class="hospitalizationOption">
                        医疗机构减免：{{item.MedicalInstitutionRelief}}
                    </p>
                    <p class="hospitalizationOption">
                        医疗补偿：{{item.MedicalCompensation}}
                    </p>
                    <p class="hospitalizationOption">
                        大病补偿：{{item.SeriousIllnessCompensation}}
                    </p>
                    <p class="hospitalizationOption">
                        医疗救助：{{item.medicalAssistance}}
                    </p>
                    <p class="hospitalizationOption">
                        重大疾病救助：{{item.MajorDiseaseRelief}}
                    </p>
                    <p class="hospitalizationOption">
                        医疗救助合计：{{item.TotalMedicalAssistance}}
                    </p>
                </div>
                <p class="hospitalizationOption">个人支付：{{item.PersonalExpenses}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            mockList:[
                {
                    year:'2017',
                    mounth:'10',
                    hospital:'青海省妇女儿童医院',
                    beHospitalized:'2017-09-12',
                    leaveHospital:'2017-10-23',
                    MedicalInstitutionRelief:'0',
                    MedicalCompensation:'59929.15',
                    SeriousIllnessCompensation:'59322.62',
                    medicalAssistance:'19197',
                    MajorDiseaseRelief:'0',
                    TotalMedicalAssistance:'19197',
                    PersonalExpenses:'51515.9'
                },
                {
                    year:'2017',
                    mounth:'08',
                    hospital:'青海省第四人民医院',
                    beHospitalized:'2017-08-15',
                    leaveHospital:'2017-08-21',
                    MedicalInstitutionRelief:'0',
                    MedicalCompensation:'33311.66',
                    SeriousIllnessCompensation:'13941.67',
                    medicalAssistance:'7988',
                    MajorDiseaseRelief:'0',
                    TotalMedicalAssistance:'7988',
                    PersonalExpenses:'10815.5'
                },
                {
                    year:'2017',
                    mounth:'07',
                    hospital:'青海大学附属医院',
                    beHospitalized:'2017-04-06',
                    leaveHospital:'2017-07-03',
                    MedicalInstitutionRelief:'0',
                    MedicalCompensation:'33354.15',
                    SeriousIllnessCompensation:'20319.11',
                    medicalAssistance:'7663',
                    MajorDiseaseRelief:'0',
                    TotalMedicalAssistance:'7663',
                    PersonalExpenses:'6285.16'
                },
                {
                    year:'2017',
                    mounth:'5',
                    hospital:'青海大学附属医院',
                    beHospitalized:'2017-04-13',
                    leaveHospital:'2017-05-04',
                    MedicalInstitutionRelief:'0',
                    MedicalCompensation:'38496.4',
                    SeriousIllnessCompensation:'17313.07',
                    medicalAssistance:'8662',
                    MajorDiseaseRelief:'0',
                    TotalMedicalAssistance:'8662',
                    PersonalExpenses:'34877.25'
                },
                {
                    year:'2017',
                    mounth:'04',
                    hospital:'青海省心脑血管病专科医院',
                    beHospitalized:'2017-04-06',
                    leaveHospital:'2017-04-14',
                    MedicalInstitutionRelief:'0',
                    MedicalCompensation:'19343.84',
                    SeriousIllnessCompensation:'15466.66',
                    medicalAssistance:'8293',
                    MajorDiseaseRelief:'0',
                    TotalMedicalAssistance:'8293',
                    PersonalExpenses:'24015.07'
                },
                {
                    year:'2017',
                    mounth:'3',
                    hospital:'青海大学附属医院',
                    beHospitalized:'2017-03-16',
                    leaveHospital:'2017-03-30',
                    MedicalInstitutionRelief:'0',
                    MedicalCompensation:'33766.92',
                    SeriousIllnessCompensation:'14407.23',
                    medicalAssistance:'8681',
                    MajorDiseaseRelief:'0',
                    TotalMedicalAssistance:'8681',
                    PersonalExpenses:'36206.41'
                },
                {
                    year:'2016',
                    mounth:'12',
                    hospital:'青海省人民医院',
                    beHospitalized:'2016-11-18',
                    leaveHospital:'2016-12-05',
                    MedicalInstitutionRelief:'0',
                    MedicalCompensation:'34218.34',
                    SeriousIllnessCompensation:'17278.37',
                    medicalAssistance:'9255',
                    MajorDiseaseRelief:'0',
                    TotalMedicalAssistance:'9255',
                    PersonalExpenses:'9584.46'
                }
            ],
            list:[]
        }
    },
    created(){
        const index = localStorage.getItem('index')
        let a = []
        switch(index){
            case '0':
                a = this.mockList.slice(0,2)
                break
            case '1':
                a = this.mockList.slice(2,4)
                break
            case '2':
                a = this.mockList.slice(4,6)
                break
            case '3':
                a = this.mockList.slice(6,8)
                break
            default:
                a = this.mockList
        }
        this.list.push(...a)
    }
}
</script>

<style scoped>
.deadline {
  background-color: #ffffff;
  font-size: 0.28rem;
  padding: 0.3rem;
}
.medicalTime{
    font-size: 0.32rem;
    padding: 0.3rem 0;
    display: flex;
    justify-content: space-between;
}
.hospital{
    font-size: 0.28rem;
}
.hospitalization{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.hospitalizationOption{
    width: 50%;
    padding: 0.18rem 0;
    font-size: 0.24rem;
    border-bottom: 1px solid #F8F8F8;
}
.hospitalInfo{
    padding: 0.34rem 0.23rem 0.14rem 0.29rem;
    width: 6.9rem;
    border-radius: 0.16rem;
    background-color: #ffffff;
    margin-bottom: 0.2rem;
    box-sizing: border-box;

}
.personalPayment{
    width: 100%;
    text-align: end;
}
.medicalInfo{
    background-color: #EDEDED;
    padding: 0 0.3rem;
    overflow: hidden;
}
.hospitalInfo>.hospitalizationOption:last-child {
    border-bottom: 0;
}
</style>