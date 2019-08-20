import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu1'
import Menu2 from '@/components/Menu2'
import Menu3 from '@/components/Menu3'
import sm1 from '@/components/sm1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Menu1',
      name: 'Menu1',
      component: Menu
    },
    {
      path: '/Menu2',
      name: 'Menu2',
      component: Menu2
    },
    {
      path: '/Menu3/',
      name: 'Menu3',
      component: Menu3,
      children:[
        {
          path: 'SubMenu1',
          name: 'SubMenu1',
          component: sm1
        }
      ]    
    }

      ]
   
})
