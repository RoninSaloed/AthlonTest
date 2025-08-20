export class CommonDomainRoutes {
  static readonly HOME = '/' as const

  static readonly AUTH = 'auth' as const

  static readonly ABSOLUTE_AUTH = `/${CommonDomainRoutes.AUTH}` as const
  static readonly ABSOLUTE_HOME = `${CommonDomainRoutes.HOME}` as const

  static readonly N_HOME = 'Home' as const

  static readonly N_LOGIN = 'Login' as const
}
