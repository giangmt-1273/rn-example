import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import {
  BaseComponent,
  BaseProps,
  MList,
  MText,
  LoginButton,
  MTouchable,
} from '../../components';
import { Colors, FontSize, Size, Images } from '../../../assets';
import i18next from '../../../lang';
import bgImage from '../splash.png';

interface Props extends BaseProps {
  goToSignup();
  goToLogin();
}

export default class LandingScreen extends BaseComponent<Props> {
  usingScrollView(): boolean {
    return false;
  }

  renderViewContent() {
    return (
      <ImageBackground style={styles.container} source={bgImage}>
        <View>
          <LoginButton
            text='Đăng nhập bằng Facebook'
            bgColor='rgba(51, 124, 171, 0.7)'
            borderRadius={Size.SIZE_30}
          />
          <LoginButton
            text='Đăng nhập bằng Gmail'
            bgColor='rgba(51, 124, 171, 0.7)'
            borderRadius={Size.SIZE_30}
          />
          <LoginButton
            text='Tạo tài khoản mới'
            borderRadius={Size.SIZE_30}
            borderWidth={1}
            borderColor='white'
            onPress={() => {
              this.props.goToSignup();
            }}
          />
        </View>
        <MTouchable
          style={styles.btnLogin}
          onPress={() => {
            this.props.goToLogin();
          }}>
          <MText style={styles.text}>Đăng nhập</MText>
        </MTouchable>
      </ImageBackground>
    );
  }

  showHeader(): boolean {
    return false;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  btnLogin: {
    marginTop: Size.SIZE_50,
    marginLeft: Size.SIZE_20,
  },
  text: {
    color: 'white',
    fontSize: Size.SIZE_16
  }
});
