import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/views/Home';
import CreateComponent from '@/components/post/Create';
import EditComponent from '@/components/post/Edit';
import PostComponent from '@/components/post/Post';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
  },
  {
    path: '/create',
    name: 'Create',
    component: CreateComponent,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: EditComponent,
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: PostComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
