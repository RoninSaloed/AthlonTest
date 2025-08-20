import { getItemFromStorage } from '@/helpers/storage'
import { CommonDomainRoutes } from '@/routes/auth-domain.routes'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export default async (
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const token: string | null = getItemFromStorage('AccessToken')

  if (token && to.name === CommonDomainRoutes.N_LOGIN) {
    return next({ name: CommonDomainRoutes.N_HOME })
  }

  if (!token && to.name !== CommonDomainRoutes.N_LOGIN) {
    return next({
      name: CommonDomainRoutes.N_LOGIN,
    })
  }

  return next()
}
