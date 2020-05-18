import SagaAction from '../../../saga/Action';

export const initialState: any = {
  isLoading: false,
  data: null,
  error: null,
  isSignUpSuccess: false
};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case SagaAction.SIGNUP.value:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SagaAction.SIGNUP.getSuccess():
      console.log("signup success!");
      return {
        ...state,
        isLoading: false,
        data: true,
        error: null,
        isSignUpSuccess: true
      };
    case SagaAction.SIGNUP.getFail():
      console.log("signup fail!: ", action.error);
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
