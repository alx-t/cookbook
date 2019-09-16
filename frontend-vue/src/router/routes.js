
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'Main', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/recipe/:id',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'Recipe', component: () => import('pages/Recipe.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'About', component: () => import('pages/About.vue') }
    ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
