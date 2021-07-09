<template>
  <div id="app">
    <keep-alive>
         <router-view></router-view>
    </keep-alive>
    
    <tabBar>
    	<tabBarItem 
    	v-for="(item,idx) in tab_list" 
        :txt="item.txt"
        :icon_url="item.icon_url"
        :path="item.path">	
    	</tabBarItem>
    </tabBar>
  </div>
</template>

<script>
import tabBar from "./components/tabBar"
import tabBarItem from "./components/tabBar/tabBarItem"
export default {
  name: 'app',
  components: {
  	tabBarItem,
  	tabBar,
   },
  data(){
     return {
     	tab_list:[
            {
            	txt:"主页",
            	icon_url:"iconfont icon-index",
            	path:"/home"
            },
            {
            	txt:"分类",
            	icon_url:"iconfont icon-category",
            	path:"/category"
            },
            {
            	txt:"详情",
            	icon_url:"iconfont icon-detail",
            	path:"/detail"
            },
            {
                txt:"我的",
                icon_url:"iconfont icon-mine",
                path:"/mine"
            }
     	],
     }
   },
   mounted(){
      console.log("app..sjj")
   }
}
</script>

<style>

</style>
