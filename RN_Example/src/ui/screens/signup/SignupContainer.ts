import {connect} from 'react-redux';
import SignupScreen from './SignupScreen';
import {handleSignUp} from './Action';
import {navigateAndRest, goBack} from '../../../navigation/Navigate';
import SCREEN_NAME from '../../screens/Const';

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.signup.isLoading,
    error: state.signup.error,
    isSignUpSuccess: state.signup.isSignUpSuccess,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  handleSignUp: (email, passs) => dispatch(handleSignUp(email, passs)),
  backToLanding: () => goBack(1),
  goToMain: () => navigateAndRest(SCREEN_NAME.TABSTACK)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupScreen);
