import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const defaultStyles = StyleSheet.create({
    
    container: {
        marginTop : 30,
        backgroundColor : 'gray',
    },
    
    keyboardContainer: {
        justifyContent : 'center',
        alignItems : 'center',
    },
    
    keyContainer: {
        width : "27%",
        aspectRatio : 1,
        margin : 3,
        backgroundColor : 'rgba(0, 0, 0, 0.1)',
        borderRadius : 100,
    },
    
    touch: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    
    fontSize: {
        fontSize : 27,
    },
    
    keyboardListWrapper: {
        justifyContent : "space-around",
    },
    
    pinContainer : {
        flexDirection : "row",
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 40,
    },
    
    pinElement: {
        margin : 10,
    },
    
    pinElementFont: {
        fontSize : 30,
    },
    
    pinListWrapper: {
        justifyContent : "center",
    },
});