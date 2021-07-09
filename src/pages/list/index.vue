<template>
    <div class="list">
    	<nav-bar :title="title"></nav-bar>
    	<scroll-view 
    	 :vertical="isVer"
    	 class="scroll"
    	 ref="BScroll"
    	 @pullUpLoad="loadData"
    	 @refreshDown="downLoad"
    	 :data="listData">
    	 <div class="proList">
    	 	<prolist-item 
    	 	v-for="(item,idx) in listData"
    	 	:prolistItem="item"
    	 	@click.native.stop="goBack(item.id)"> 		
    	 	</prolist-item>
    	 </div>	
    	</scroll-view>
    	<Loader :isLoading="isloading"></Loader>
    	<div class="tip" v-if="!isLoadData">
    		<span>没有给多数据加载了</span>
    	</div>
    	<!-- <div class="loadingPop" v-if="isLoading">
    		
    	</div> -->
    </div>	
</template>
<script>
import NavBar from "components/navBar"
import ScrollView from "components/scroller"
import ProlistItem from "pages/list/prolistItem"
import Loader from "components/loader"
export default {
     name:"list",
     data(){
        return{
        	 title:"",
        	 listData:[],
        	 isVer:true,
        	 page:1,
        	 pageSize:5,
        	 isLoadData:true,
        	 isloading:false,
        }
     },
     components:{
     	NavBar,
     	ProlistItem,
     	ScrollView,
     	Loader,
     },
     beforeRouteEnter(to,from,next){
           next(vm=>{
           	  vm.title=to.params.title
           })
     },
     created(){
     	this.$apis.shopcar.getProList().then(res=>{
     		  this.listData=res.data
     		  // this.isloading=false;
     		  
     	})
     },
     methods:{
     	goBack(id){
             this.$router.push("/detail/"+id)
     	},
     	downLoad(){
             this.page=1
             this.isLoadData=true
             this.isloading=false
             this.$apis.shopcar.getProList().then(res=>{
             	 this.listData=res.data
             })  
     	},
     	loadData(){
     		 let page=++this.page
     		 let pageSize=this.pageSize
     		 let params="/"+page+"/"+pageSize
     		 this.isloading=true;
             if(!this.isLoadData) return
             this.$apis.shopcar.getProList(params).then(res=>{
             	     if(res.status==200){
             	     	this.isloading=false;
             	     	 if(res.data.length==0){
	                           this.isLoadData=false
	             	      }else{
	             	      	 this.listData.push(...res.data)
	             	      }
             	     }
             	    console.log(res)
             	     
                     
             })
     		// console.log("加载更多。。")
     	}
     }        
}
</script>
<style scoped>
.scroll{
	margin-top:44px;
}
.proList{
  width:100%;
  display:flex;
  flex-direction:column;
  /*margin-top:44px;*/
}
.tip{
	width:100%;
	height:50px;
	line-height:50px;
	text-align:center;
	margin-bottom:10px;
	position:absolute;
	background-color:#fff;
	font-size:16px;
	color:#333;
	letter-spacing:5px;
	bottom:40px;
}
</style>