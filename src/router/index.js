import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./home"
import Detail from "./detail"
import Mine from "./mine"
import Shopcar from "./shopcar"
import Admin from "./admin"
import Category from "./category"
import List from "./list"
Vue.use(VueRouter)
const routes=[
     {
     	path:"",
     	redirect:"/home",
     },
     Home,
     Detail,
     Mine,
     Shopcar,
     Admin,
     Category,
     List,

]
let Router=new VueRouter({
	mode:"history",
	routes,
})
export default Router