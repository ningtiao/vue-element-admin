<template>
  <div class="app-container">
    <full-calendar ref="calendar" :config="config" :events="events"/>
</div>
</template>
<script>
import { getMonth } from '@/api/table'
export default {
  name: 'month',
  data() {
    return {
      config: {
        header: {
          left: 'prev,next today',
          center: 'title',
          right: ''
        },
        slotEventOverlap: false,
        showNonCurrentDates: false,
        defaultView: 'month',
        locale: 'zh-cn',
        events: function(start, end, timezone, callback) {
          var monthList = []
          console.log(start)
          getMonth().then(response => {
            monthList = response.data
            console.log(monthList)
            callback(monthList)
          })
        }
      },
      events: []
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>