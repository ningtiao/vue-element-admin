  <template>
    <div class="header-table">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="姓名" icon="search"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >新增</el-button>
        </el-form-item>
        <el-form-item>
          <el-date-picker
        v-model="value1"
        placeholder="选择日期时间">
        </el-date-picker>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <el-table :data="userData" highlight-current-row v-loading="loading" element-loading-text="拼命加载中" style="width: 100%;">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120" >
      </el-table-column>
      <el-table-column prop="number" label="性别" :formatter="formatSex" width="100" >
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="100" >
      </el-table-column>
      <el-table-column prop="date" label="生日" width="120" >
      </el-table-column>
      <el-table-column prop="county" label="地址" min-width="180">
      </el-table-column>
      <el-table-column label="按钮">
        <template scope="scope">
          <el-button type="success">成功按钮</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-pagination layout="prev,total,pager, next" 
      :page-size="filter.pageSize"
      :current-page="filter.currentPage"
      @current-change="handleCurrentChange" 
      @size-change="handleSizeChange"
      :total="total"
      style="float:right;">
      </el-pagination>
    </el-col>
    </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data() {
     return {
      goods: [],
      userData:[],
      loading: false,
      total: 0,
      value1:'',
      filter: {
        pageSize:15, // 页大小
        currentPage: 1, // 当前页
        },
     }
   },
    created() {
        this.getuserData(data =>{
          this.goods = data
          this.getuser(data)
        })
    },
    methods: {
      //性别显示转换
      formatSex: function (row, column) {
        return row.number == 1 ? '男' : row.number == 0 ? '女' : '女';
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.$confirm('确认删除吗?', '提示' , {
          type: 'warning'
        }).then(() => {
          this.loading = true;
            setTimeout(() => {
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              this.loading = false;
            }, 2000);
            this.userData.splice(index, 1);
        })
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        let datalist = this.goods
        this.filter.currentPage = val;
        this.getuser(datalist)
        console.log(`当前页: ${val}`);
      },
      getuserData(callback){
        this.loading = true
        this.$http.get('/api/user').then((response) => {
          if(typeof callback === "function"){
            this.goods = response.data.result;
            this.total =  response.data.total
            console.log(this.goods);
            setTimeout(() => {
              this.loading = false;
            }, 2000);
            callback(this.goods)
          }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getuser(data) {
        let pageSize = this.filter.pageSize
        console.log(pageSize)
        let total = this.total
        let curNo = (this.filter.currentPage - 1) * pageSize
        let num = total % pageSize
        console.log(curNo + '页');
        let userDatalist = []
        for(let i = 0; i < pageSize; i++) {
            userDatalist.push(data[curNo + i])
        }
        this.userData = userDatalist;
        console.log(userDatalist)
      }
    },
 }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>