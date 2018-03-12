<template>
  <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-select v-model="value" clearable placeholder="所属机构">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="value" clearable placeholder="状态">
              <el-option
                v-for="item in status"
                :key="item.statusId"
                :label="item.label"
                :value="item.statusId">
              </el-option>
          </el-select>
        </el-form-item>
                <el-form-item >
          <el-input placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button type="primary"><i class="el-icon-search"></i>搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <el-table :data="list" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
      <el-table-column prop="uid" label="序号">
      </el-table-column>
      <el-table-column prop="cname" label="姓名">
      </el-table-column>
      <el-table-column prop="number" label="阅读数">
      </el-table-column>
      <el-table-column prop="date" label="时间">
      </el-table-column>
      <el-table-column  label="状态" width="120" >
        <template slot-scope="scope">
           <el-button size="small" :type="scope.row.status | statusFilter" @click="isStatus(scope.$index, scope.row)" v-if="scope.row.status == 1">启用</el-button>
          <el-button size="small"  :type="scope.row.status | statusFilter" @click="isStatus(scope.$index, scope.row)" v-if="scope.row.status == 2">禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作 ">
        <template slot-scope="scope" >
         <el-button size="small" type="primary">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--工具条-->
    <!-- <el-col :span="24" class="toolbar"> -->
      <el-pagination layout="total, prev, pager, next"
                      background
                     :page-size="10"
                     @size-change="handleSizeChange"
                     :total="total"
                      @current-change="handleCurrentChange"
                     style="text-align:center;">
      </el-pagination>
      <!-- <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination> -->
    <!-- </el-col> -->
  </div>
</template>

<script>
import { getList } from '@/api/table'
export default {
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      page: 1,
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
  created() {
    this.fetchData()
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        2: 'danger'
      }
      return statusMap[status]
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        const limit = 10
        const pageList = response.data.filter((item, index) => index < limit * this.page && index >= limit * (this.page - 1))
        console.log(pageList)
        this.total = response.data.length
        this.list = pageList
        this.listLoading = false
      })
    },
    handleSizeChange(val) {
      this.page = val
      console.log(this.page)
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.page = val
      console.log(this.page)
      this.fetchData()
    }
  }
}
</script>