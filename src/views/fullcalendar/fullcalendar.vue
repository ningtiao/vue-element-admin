<template>

  <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-select v-model="value" clearable placeholder="老师">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="value" clearable placeholder="学科">
              <el-option
                v-for="item in status"
                :key="item.statusId"
                :label="item.label"
                :value="item.statusId">
              </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
            <el-select v-model="type"
                        clearable style="width: 150px" class="filter-item"
                        placeholder="视图">
                <el-option label="月视图" value="1"></el-option>
                <el-option label="周视图" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
           <el-button type="primary"><i class="el-icon-search"></i>搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">新增排课</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <div v-if="type == 1">
      <Month> </Month>
    </div>

    <div v-if="type == 2">
      <WeekDetail></WeekDetail>
    </div>
</div>
</template>
<script>
import WeekDetail from '@/components/week_detail/week_detail'
import Month from '@/components/month/month'
export default {
  name: 'month',
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      page: 1,
      type: '1',
      isShowMonth: true,
      isShowWeek: false,
      status: [
        {
          statusId: 1,
          label: '启用'
        }, {
          statusId: 0,
          label: '禁用'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value: ''
    }
  },
  components: {
    WeekDetail,
    Month
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
