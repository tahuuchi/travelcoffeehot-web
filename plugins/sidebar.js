import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'font-awesome/css/font-awesome.min.css';
import Vue from 'vue';
import {
  SidebarMenu
} from 'vue-sidebar-menu'

Vue.use(SidebarMenu);
Vue.component('sidebar', SidebarMenu)