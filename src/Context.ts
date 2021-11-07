import { AlertService, ApiService } from './core/services'

interface ContextDependencies {
  apiService: ApiService
  alertService: AlertService
}

export class Context {
  static apiService: ApiService
  static alertService: AlertService

  static initialize(dependencies: ContextDependencies): void {
    Context.apiService = dependencies.apiService
    Context.alertService = dependencies.alertService
  }
}
