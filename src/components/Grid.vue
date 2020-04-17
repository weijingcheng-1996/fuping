<template>
  <div>
    <div class="gridContent">
      <div
        v-for="(item, index) in gridList"
        :key="index"
        class="gridItem"
        :class="isBorder(index)"
        @click="item.url?hangleClick(item.url):''"
        :style="{width:100/gridNum+'%'}"
      >
        <p class="gridItemTitle">{{item.title}}</p>
        <img :src="item.icon" class="gridIcon" alt />
        <p class="gridText" :style="{color:textColor}">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["gridList","gridNum","textColor"],
  computed: {
    isBorder() {
      return index => {
        let gridClass = [];
        const num = (index * 1 + 1) % this.gridNum;
        let remainder = this.gridList.length%this.gridNum?this.gridList.length%this.gridNum:this.gridNum
        if (index * 1 + 1 > this.gridList.length - remainder) {
          gridClass.push("borderBottom");
        }
        if (num === 0) {
          gridClass.push("borderRight");
        }
        return gridClass.length > 0 ? gridClass.join(" ") : " ";
      };
    }
  },
  methods:{
    hangleClick(url){
      this.$router.push(url)
    }
  }
};
</script>

<style scoped>
.gridContent {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.gridItem {
  padding: 0.4rem 0.2rem;
  font-size: 0.28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 3rem;
  border-bottom: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
}
.gridItemTitle {
  font-size: 0.24rem;
  color: #333333;
  padding-bottom: 0.25rem;
}

.gridIcon {
  width: 0.7rem;
  height: 0.7rem;
  margin-bottom: 0.5rem;
}
.gridText {
  text-align: center;
  flex-grow: 1;
  word-wrap: break-word;
  width: 100%;
  white-space: normal;
}
.borderRight {
  border-right: 0 !important;
}
.borderBottom {
  border-bottom: 0 !important;
}
/* .gridItem:nth-child(4n+1):nth-last-child(-n+4),
.gridItem:nth-child(4n+1):nth-last-child(-n+4)~.gridItem {
  border-bottom: 0;
} */
</style>