import SagaAction from '../../../saga/Action';

export const initialState: any = {
  isLoading: false,
  data: null,
  error: null,
  isSignUpSuccess: null
};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case SagaAction.LOGIN.value:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case SagaAction.LOGIN.getSuccess():
      console.log("login success!");
      return {
        ...state,
        isLoading: false,
        data: true,
        error: null,
        isSignUpSuccess: true
      };
    case SagaAction.LOGIN.getFail():
      console.log("login fail!: ", action.error);
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
