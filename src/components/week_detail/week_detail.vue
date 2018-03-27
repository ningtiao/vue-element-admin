<template>
  <div class="app-container">
    <full-calendar ref="calendar" :config="config" :events="events"/>
</div>
</template>
<script>
export default {
  name: "month",
  data() {
    return {
      config: {
        header: {
          left: "prev,next today",
          center: "title",
          right: ""
        },
        defaultView: 'agendaWeek',
        businessHours: {
            // 时间段
            dow: [1,2,3,4,5],
            start:'10:00',
            //开始时间 (10am in this example)
            end:'21:00'
        },
      },
      events: []
    };
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>