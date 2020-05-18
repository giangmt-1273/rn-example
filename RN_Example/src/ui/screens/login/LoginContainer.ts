import {connect} from 'react-redux';
import LoginScreen from './LoginScreen';
import {handleLogin} from './Action';
import {navigateAndRest, goBack} from '../../../navigation/Navigate';
import SCREEN_NAME from '../Const';

const mapStateToProps = (state: any) => {
    return {
      isLoading: state.login.isLoading,
      error: state.login.error,
      isSignUpSuccess: state.login.isSignUpSuccess,
    };
  };
  
  const mapDispatchToProps = (dispatch: any) => ({
    handleLogin: (email, passs) => dispatch(handleLogin(email, passs)),
    backToLanding: () => goBack(1),
    goToMain: () => navigateAndRest(SCREEN_NAME.TABSTACK)
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
