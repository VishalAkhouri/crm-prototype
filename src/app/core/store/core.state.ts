import { AuthState, initialAuthState } from '../auth/store/auth.state';

export interface CoreState {
  auth: AuthState
}

export const initialCoreState: CoreState = {
  auth: {
    ...initialAuthState
  }
}
