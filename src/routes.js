import Home from './components/Home.vue'
import ItemDetail from './components/ItemDetail.vue'

export const routes = [
  { 
    path: '', 
    component:Home , 
  },
  { 
    path: '/item/:name',
    component:ItemDetail ,
    props: route => ({
      itemId: Number(route.params.name),
    }) 
  },
]
