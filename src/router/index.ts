import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },


    {
      path: '/event-listing',
      name: 'event-listing',
      component: () => import('../views/Event_listingView.vue')
    },
    {
      path: '/event-detail',
      name: 'event-detail',
      component: () => import('../views/Event_detailView.vue')
    }

  ]

})

export default router
