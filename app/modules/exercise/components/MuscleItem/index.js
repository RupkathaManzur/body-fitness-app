import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import {Actions} from 'react-native-router-flux'

import styles from "./styles"

//structure for the last page that is thepage which contains the exercise instructions list

const MuscleItem = ({muscle, image}) => {
    return (
        <TouchableOpacity style={[styles.col, styles.col_half, styles.container]}
                          onPress={() => Actions.Exercises({muscle, title:muscle})}>
            <View style={[styles.col, styles.col_half, styles.wrapper]}>
                <Image style={{height: 50, width: 50}} source={image}/>
                <Text style={[styles.muscle]}>{muscle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MuscleItem;