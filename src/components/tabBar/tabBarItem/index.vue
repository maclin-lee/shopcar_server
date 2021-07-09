<template>
       <router-link :to="path" class="tabBarItem" tag="li">
            <span class="tabBarItem_txt">{{txt}}</span>
            <i :class="icon_url"></i>
       </router-link>
</template>
<script>
export default {
     name:"navbar",
     props:{
     	txt:{
     		type:String,
     		default:""
     	},
     	icon_url:{
     		type:String,
     		default:""
     	},
        path:{
            type:String,
            default:""
        }

     }        
}
</script>
<style scoped>
   .tabBarItem{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex:1;
    color:#959493;
    letter-spacing:2px;
   }
   .router-link-active{
    color:#e93b3d;
   }
   .tabBarItem i{
    display:inline-block;
    font-size:22px;

   }
   .tabBarItem span{
    display:inline-block;
   }

</style>