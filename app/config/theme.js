import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';

//app colors
const color = {
    black: '#1E1611',
    light_black: '#414141',
    main: '#232137',
    secondary: '#F18365',
    white: '#ffffff',
    light_grey: '#eaeaea',
    grey: '#ccc',
    red: 'red',
    underlayColor: '#ddd'
}

//set app font sizes
const fontSize = {
    small: normalize(12),
    regular: normalize(14),
    large: normalize(21),
    extralarge: normalize(28)
}

//set custom fonts
const helvetica = {
    bold: "",
    medium: "",
    regular: "",
    light: ""
}

const fontFamily = helvetica;


const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "#fff" : "#fff";

const tabIconStyle = { size: 19, color: tabColor, selected: color.secondary}
const navTitleStyle = { fontSize: fontSize.regular + 1 , fontFamily: fontFamily.medium, color: color.white, letterSpacing: 0.4 }
const navigationBarStyle = { backgroundColor: color.main, borderBottomWidth:0 }

export {
    color,
    fontSize,
    fontFamily,
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
    tabIconStyle,
    navTitleStyle,
    navigationBarStyle
}