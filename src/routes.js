/*import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue'*/
import TopContents from './components/TopContents.vue'
import categoryList from './components/categoryList.vue'
import categoryListIndex from './components/categoryListIndex.vue'
import categoryListDetail from './components/categoryListDetail.vue'
import ItemDetail from './components/ItemDetail.vue'

export const routes = [
  { path: '', component:TopContents },
  { path: '/category', component:categoryList, children: [
    { path: '', component: categoryListIndex },
    { path: ':id', component: categoryListDetail }
  ]},
  { path: '/item/:name',component:ItemDetail },
 /* { path: '/user/:id', component:User },
  { path: '/user', component:User, children: [
    { path: '', component: UserStart },
    { path: ':id', component: UserDetail },
    { path: ':id/edit', component: UserEdit },
  ]},*/
]
