<template>	
	 <div class="user">
		  <el-table
		    :data="curData"
		    border
		    style="width: 100%;"
		    class="table">
		    <el-table-column
		      prop="date"
		      label="日期"
		      width="100"
		      class="rows"
		     >
		    </el-table-column>
		    <el-table-column
		      prop="username"
		      label="用户名"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop="email"
		      label="邮箱"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="password"
		      label="密码"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      label="操作"
		      width="120">
		         <template slot-scope="scope">
			        <el-button
			          size="mini"
			          @click="handleEdit(scope.$index, scope.row)">{{scope.row.isFree?"已冻结":"未冻结"}}
			        </el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除
			        </el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		  <div class="pages">
		  	   <el-pagination
				  background
				  layout="prev, pager, next"
				  :page-size="pageSize"
				  :current-page.sync="curPage"
				  :total="tableData.length">
				</el-pagination>
		  </div>

	 </div>
</template>
<script>

export default {
     name:"user",
     data() {
      return {
        tableData:[],
        pageSize:3,
        curPage:1,
      }
    },
    created(){
       this.$apis.user.getAdmin().then(res=>{
       	  console.log(res)
       	  if(res.data.status==1){
       	  	 this.tableData=res.data.data
       	  }
       })
    },
    computed:{
          curData(){
          	return this.tableData.slice((this.curPage-1)*this.pageSize,this.curPage*this.pageSize)||[]
          }
    },
    methods:{
    	 handleEdit(index,row){
    	 	  // console.log(row.isFree)
              this.$apis.user.setFree({
              	username:row.username,
              	isFree:!row.isFree
              }).then(res=>{
              	  console.log(res.data)
              	  this.tableData[index].isFree=!row.isFree
              })	 	 
    	 },
    	 handleDelete(idex,row){
    	 	console.log(idex,row)
    	 	this.$apis.user.deleteUser(row.username)
    	 	.then((res)=>{
    	 		  console.log(res)
                  if(res.data.status==1){
                  	 this.tableData.splice(idex,1)
                  }
    	 	})
    	 }
    }        
}
</script>
<style scoped>
     .pages{
     	margin-top:10px;
     }
</style>