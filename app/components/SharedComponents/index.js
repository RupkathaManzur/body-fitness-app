import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Button} from 'react-native-elements'

import styles from './styles'
//controls the action of the buttons
const Loading = (props) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} color={"grey"}/> 
            {props.message.length > 0 && <Text style={styles.message}>{props.message}</Text>}
        </View>
    )
};

//the buttons changes the action when pressed and the view style
Loading.defaultProps = {
    message: ""
}

const Error = (props) => {
    const {message, onPress} = props.data;
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Ooops!</Text>
                <Text style={styles.message}>{message}</Text>

                <Button
                    raised
                    title={"TRY AGAIN"}
                    borderRadius={0}
                    containerViewStyle={styles.containerView}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    onPress={onPress}/>
            </View>
        </View>
    )
};


const Empty = (props) => {
    const {message, onPress} = props.data;
    return (
        <View style={[styles.container]}>
            <View style={styles.wrapper}>
                <Text style={styles.message}>{message}</Text>

                <Button
                    raised
                    title={"Refresh"}
                    borderRadius={0}
                    containerViewStyle={styles.containerView}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    onPress={onPress}/>
            </View>
        </View>
    )
};


Empty.defaultProps = {
    onPress: null
}

export {Loading, Error, Empty};