import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, Button, Alert, Image } from 'react-native';
import {
    BaseComponent,
    BaseProps,
    MList,
    MText,
    LoginButton,
    MTouchable,
    MTexInput,
} from '../../components';
import { Colors, FontSize, Size, Images } from '../../../assets';
import i18next from '../../../lang';
import bgImage from '../splash.png';

interface Props extends BaseProps {
    handleLogin(email, password);
    backToLanding();
    goToMain();
}

interface States {
    email: string,
    password: string
}

export default class LoginScreen extends BaseComponent<Props, States> {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    usingScrollView(): boolean {
        return false;
    }

    clickLogin = () => {
        // console.log("data: ", this.state.email, this.state.password);
        this.props.handleLogin(this.state.email, this.state.password);
    }

    backToLanding = () => {
        this.props.backToLanding();
    }

    goToMain = () => {
        this.props.goToMain();
    }

    renderViewContent() {
        return (
            <ImageBackground source={bgImage} style={styles.container}>
                {this.props.error && Alert.alert(
                    '',
                    ('Login fail! - ' + this.props.error),
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: true }
                )}
                {this.props.isSignUpSuccess && Alert.alert(
                    '',
                    'Login success!',
                    [
                        { text: 'OK', onPress: this.props.goToMain },
                    ],
                    { cancelable: true }
                )}
                <View style={styles.navigation}>
                    <MTouchable onPress={this.backToLanding}>
                        <Text style={styles.backButton}>Back</Text>
                    </MTouchable>
                    <Text style={styles.title}>{this.props.isSignUpSuccess}</Text>
                </View>
                <View style={styles.content}>
                    <MTexInput
                        text="Email"
                        borderBottomColor={Colors.main}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />

                    <MTexInput
                        text="Password"
                        borderBottomColor={Colors.main}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry={true}
                    />

                    <LoginButton
                        text='Đăng nhập'
                        bgColor='rgba(51, 124, 171, 0.7)'
                        borderRadius={Size.SIZE_30}
                        onPress={this.clickLogin}
                    />
                </View>
            </ImageBackground>
        );
    }

    showHeader(): boolean {
        return false;
    }
}

const styles = StyleSheet.create({
    navigation: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    backButton: {
        marginLeft: 20,
        color: Colors.main,
        fontSize: FontSize.FONT_SIZE_18,
    },
    title: {
        color: Colors.main,
        fontSize: FontSize.FONT_SIZE_18,
        marginRight: 20
    },
    container: {
        flex: 1,
    },
    content: {
        marginTop: 50
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
    signUpButton: {
        height: 50,
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: Colors.main
    }
});
