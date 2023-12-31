import { createRouter, createWebHistory } from 'vue-router'
import login from './gateway/login.vue'
import signup from './gateway/signup.vue'
import sidebar from './home/sidebar.vue'
import headerSection from './home/headerSection.vue'
import contactTable from './tables/contactTable.vue';
import home from './Home/home.vue'
import tagsTable from './tables/tagsTable.vue'
import empty from './empty.vue'
import userTable from './tables/userTable.vue';
import organizationsTable from './tables/organizationTable.vue';

const router = createRouter({
  history: createWebHistory(), //use to store the history of navigated routes 
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/signup', //its a pathway in the url to be display
      name: 'signup',     //
      component:signup,   //components that need to be display in this path 
    },
    {
      path:'/contacts',
      name:'contactTable',
      component:contactTable,
    },
    {
      path:'/tags',
      name:'tags',
      component:tagsTable
    },
    {
      path:'/empty',
      name:'empty',
      component:empty
    },
    {
      path:'/users/:orgId, :orgName',
      name:'userTable',
      component:userTable,
      props: route => ({ 
        orgId: route.params.orgId,
        orgName: route.params.orgName,
      }),
    },
    {
      path:'/organizations',
      name:'organizationsTable',
      component:organizationsTable
    },
    {
      path:'/home',
      name:'home',
      component:()=>import('./Home/home.vue'),
      children:[
        {path:'',components:{headerSection:headerSection, sidebar:sidebar}},
      ],
    }
  ],
})
export default router;