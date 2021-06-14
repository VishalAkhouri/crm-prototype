import { createAction } from '@ngrx/store';

export const updateSignedIn = createAction(
  '[Auth] Update Signed In', (payload: { isSignedIn: boolean}) => ({ payload })
);
