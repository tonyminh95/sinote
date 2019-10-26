import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/LoginPage'
import Register from '@/pages/RegisterPage'
import Home from '@/pages/HomePage'
import NoteBook from '@/pages/NoteBookPage'
import NoteBookDetail from '@/pages/NoteBookDetailPage'
import Tag from '@/pages/TagPage'
import TagDetail from '@/pages/TagDetailPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/notebooks',
      name: 'NoteBook',
      component: NoteBook
    },
    {
      path: '/notebooks/:id',
      name: 'NoteBookDetail',
      component: NoteBookDetail
    },
    {
      path: '/tags',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/tags/:id',
      name: 'TagDetail',
      component: TagDetail
    },
  ],
  mode: 'history'
})

export default router
