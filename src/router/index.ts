import { createRouter, createWebHistory } from 'vue-router'
import DomainRouter from '../router/auth-domain'
import authGuard from '@/guard/auth.guard'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...DomainRouter.buildRoutes()],
})
router.beforeEach(authGuard)

export default router
