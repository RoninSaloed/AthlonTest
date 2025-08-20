import { CommonDomainRoutes } from '@/routes/auth-domain.routes'
import type { RouteRecordRaw } from 'vue-router'

class DomainRouter {
  private readonly config = [
    {
      path: CommonDomainRoutes.ABSOLUTE_AUTH,
      component: () => import('../../pages/auth-domain/LoginPage.vue'),
      name: CommonDomainRoutes.N_LOGIN,
    },
    {
      path: CommonDomainRoutes.ABSOLUTE_HOME,
      name: CommonDomainRoutes.N_HOME,

      component: () => import('../../pages/main-domain/HomePage.vue'),
    },
  ]

  buildRoutes(): RouteRecordRaw[] {
    return this.config
  }
}
export default new DomainRouter()
