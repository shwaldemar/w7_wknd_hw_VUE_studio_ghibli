import Vue from 'vue';
import Router from 'vue-router';
import FilmsView from '@/views/FilmsView';
import FavouritesView from '@/views/FavouritesView';

Vue.use(Router)

const router = new Router({
  routes: [
  {
    path: '/films',
    name: 'films-view',
    component: FilmsView
  },
  {
    path: '/favourites',
    name: '/favourites-view',
    component: FavouritesView
  }
]
})

export default router;
