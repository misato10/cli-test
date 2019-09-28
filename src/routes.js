import Home from './components/Home.vue'
import ItemDetail from './components/ItemDetail.vue'
import Feature from './components/Feature.vue'

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
  { 
    path: '/feature/:name',
    component:Feature ,
    props: route => ({
      featureName: String(route.params.name),
    }) 
  },
]
