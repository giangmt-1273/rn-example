import {connect} from 'react-redux';
import SplashScreen from './SplashScreen';
import {navigateAndRest} from '../../../navigation/Navigate';
import SCREEN_NAME from '../../screens/Const';
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  goToLanding: () => navigateAndRest(SCREEN_NAME.LANDING_SCREEN),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
