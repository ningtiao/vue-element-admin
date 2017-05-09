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
      style="text-align:center;">
      </el-pagination>
    </el-col>

    <!--编辑界面-->
    <el-dialog title="编辑" v-model="editFormVisible">
      <el-form label-width="80px" :model="editForm" ref="editForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editForm.number">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number  v-model="editForm.age" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker type="date" v-model="editForm.date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="editForm.county"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="Submit" :loading="loading" class="title1">提交</el-button>
      </div>
    </el-dialog>   
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
      editFormVisible: false,
      filter: {
        pageSize:15, // 页大小
        currentPage: 1, // 当前页
      },
      editForm: {
        id: 0,
        name: '',
        sex: -1,
        age: 0,
        birth: '',
        addr: ''
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
      close() {
        this.editFormVisible = false;
      },
      //显示编辑界面
      handleEdit: function (index, row) {
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);//合并对象操作
        console.log(this.editForm.name)
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
              this.userData.splice(index, 1);
              this.loading = false;
            }, 2000);
            this.getuserData();
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
      Submit() {
        this.$refs.editForm.validate((valid) =>{
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.loading = true;
              setTimeout(() => {
              this.$message({
                message: '修改成功',
                type: 'success'
              });
              this.loading = false;
            }, 2000);
            this.editFormVisible = false;
            this.getuserData();
            })
          }
        });
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
.title1
  font-size: 12px;
</style>