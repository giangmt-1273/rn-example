import {connect} from 'react-redux';
import LandingScreen from './LandingScreen';
import {navigateTo} from '../../../navigation/Navigate';
import SCREEN_NAME from '../Const';

const mapStateToProps = (state: any) => ({
  
});

const mapDispatchToProps = (dispatch: any) => ({
  goToSignup: () => navigateTo(SCREEN_NAME.SIGNUP_SCREEN),
  goToLogin: () => navigateTo(SCREEN_NAME.LOGIN_SCREEN),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingScreen);
