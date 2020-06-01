import React, { PureComponent } from 'react';
import { StyleSheet, View, ViewProps, Image } from 'react-native';
import { MTouchable, MText } from '../components';
import { Colors, Size } from '../../assets';

interface Props extends ViewProps {
    onPress?: any;
    text?: string;
    image?: string;
    borderRadius?: any;
    borderWidth?: any;
    borderColor?: string;
    bgColor?: string;
    textStyles?: any;
    disable?: boolean;
    needDelay?: boolean;
}

export default class LoginButton extends PureComponent<Props> {
    static defaultProps = {
        onPress: f => f,
    };

    render(): React.ReactNode {
        return (
            <MTouchable
                disabled={this.props.disable}
                {...this.props}
                style={[styles.defaultButton,
                {
                    backgroundColor: this.props.bgColor,
                    borderColor: this.props.borderColor,
                    borderRadius: this.props.borderRadius,
                    borderWidth: this.props.borderWidth
                }]}
                onPress={() => {
                    this.props.onPress();
                }}>

                <View style={styles.viewInside}>
                    {/* <Image source={this.props.image}></Image> */}
                    <MText style={styles.title} numberOfLines={1}>
                        {this.props.text}
                    </MText>
                </View>
            </MTouchable>
        );
    }
}

const styles = StyleSheet.create({
    viewInside: {
        width: '100%',
        justifyContent: 'center',
        height: Size.SIZE_60,
    },
    defaultButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Size.SIZE_10,
        marginHorizontal: Size.SIZE_40
    },
    title: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: Size.SIZE_16
    },
});
