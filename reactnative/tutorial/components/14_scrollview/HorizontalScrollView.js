import React, { Component } from 'react';
import { View, Text, Image,
    ScrollView,
    Dimensions, 
    TextInput
} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class HorizontalScrollView extends Component {

    render() {
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                onMomentumScrollBegin={() => {
                    //alert('Begin scrolling');
                }}
                onMomentumScrollEnd={() => {
                    //alert('End scrolling');
                }}
                onScroll={(event) => {
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`;
                    console.log(logData);
                }}
                scrollEventThrottle={10} // get updating Cordinate each 10 miliseconds
            >
                <View style={styles.containerOne}>
                    <Text style={styles.textStyle}>
                        Screen 1
                    </Text>
                </View>
                <View style={styles.containerTwo}>
                    <Text style={styles.textStyle}>
                        Screen 2
                    </Text>
                </View>
                <View style={styles.containerThree}>
                    <Text style={styles.textStyle}>
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    containerOne: {
        backgroundColor: '#5f9ea0',
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTwo: {
        backgroundColor: 'tomato',
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerThree: {
        backgroundColor: '#663399',
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
}