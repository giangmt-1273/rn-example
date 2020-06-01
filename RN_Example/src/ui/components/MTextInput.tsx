import React, { PureComponent } from 'react';
import { StyleSheet, View, ViewProps, Text } from 'react-native';
import { Colors, Size } from '../../assets';
import { TextInput } from 'react-native-gesture-handler';

interface Props extends ViewProps {
    text?: string;
    borderBottomColor?: string;
    value?: string;
    onChangeText?: any;
    secureTextEntry?: boolean;
}

export default class MTextInput extends PureComponent<Props> {
    static defaultProps = {
        onChangeText: f => f,
    };

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.text}</Text>
                <TextInput style={[styles.viewInside,
                {
                    borderBottomColor: this.props.borderBottomColor,
                }]}
                placeholder={this.props.text}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                secureTextEntry={this.props.secureTextEntry}
                >   
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    viewInside: {
        height: 40,
        borderBottomWidth: 2,
        marginTop: 8
    },
    title: {
        color: Colors.main,
        fontSize: Size.SIZE_16
    },
});
