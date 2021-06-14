import { createReducer, Action, on } from '@ngrx/store';
import { updateSignedIn } from './auth.action';
import { AuthState, initialAuthState } from './auth.state';

const reducer = createReducer(
  initialAuthState,

  on(updateSignedIn, ( state, { payload }) => {
    const { isSignedIn } = payload;
    return {
      ...state,
      isSignedIn
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action): any {
  return reducer(state, action);
}
