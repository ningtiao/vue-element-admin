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
        defaultView: 'agendaWeek',
        selectable: true,
        showNonCurrentDates: false,
        slotDuration: '00:30:00', // 一格时间槽代表多长时间，默认00:30:00（30分钟）
        slotEventOverlap: false,
        selectOverlap: false, // 确定用户是否被允许选择被事件占用的时间段，默认true可占用时间段
        selectConstraint: 'businessHours', // 限制用户选择指定时间段的日程数据：an event ID, "businessHours", object
        minTime: '08:00:00', // 周/日视图左边时间线显示的最小日期，默认00:00:00
        maxTime: '22:00:00', // 周/日视图左边时间线显示的最大日期，默认24:00:00
        height: 850, // 组件高度，默认aspectRatio即纵横比；parent父容器大小；auto自动不带滚动条；支持数字和函数返回像素；支持$('#calendar').fullCalendar('option', 'height', 700);
        locale: 'zh-cn', // 国际化，前提引用lang-all.js，参见官方demo-->languages.html
        // displayEventTime : false,       // 每一个日程块中是否显示时间，默认true显示
        // displayEventEnd : true,         // 是否显示日程块中的“结束时间”，默认true，如果false则只显示开始时间
        businessHours: [
          {
            // 时间段
            dow: [0, 1, 2, 3, 4, 5, 6],
            start: '08:00',
            // 开始时间 (10am in this example)
            end: '12:00'
          },
          {
            // 时间段
            dow: [0, 1, 2, 3, 4, 5, 6],
            start: '14:00',
            // 开始时间 (10am in this example)
            end: '18:00'
          },
          {
            // 时间段
            dow: [0, 1, 2, 3, 4, 5, 6],
            start: '18:00',
            // 开始时间 (10am in this example)
            end: '22:00'
          }
        ],
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