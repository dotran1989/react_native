import React, { Component } from 'react';
import { DetailScreen, ThirdScreen } from './screenNames';
import { Text, View, ActivityIndicator } from 'react-native';
import Button from 'react-native-button';

export default class MainComponent extends Component {
    static navigationOptions = ({ navigation }) => {

        const { params = {} } = navigation.state;

        console.log(`params: ${JSON.stringify(params)}`);

        let headerTitle = 'Main';
        let headerTitleStyle = { color: 'red' };
        let headerRight = (<Button 
            containerStyle={styles.btnSaveContainerStyle}
            style={styles.btnSaveStyle}
            onPress={() => {
                params.onSave();
            }}
            >
                Save
            </Button>);
        let headerBackTitle = 'Back';
        return { headerTitle, headerTitleStyle, headerRight, headerBackTitle }
    }

    _onSave() {
        // console.log('You pressed Save');

        // prenvent click Save btn 2 times
        if (this.props.navigation.state.params.isSaving == true) {
            return;
        }

        this.props.navigation.setParams({ isSaving: true });
        // Do some tasks for about 3 seconds
        setInterval(() => {
            console.log('I finished some tasks in 3 seconds');
            this.props.navigation.setParams({ isSaving: false })
        }, 3000);
    }

    componentDidMount() {
        this.props.navigation.setParams({ onSave: this._onSave.bind(this), isSaving: false })
    }

    render() {
        const { containerStyle, textStyle, buttonContainerStyle, buttonTextStyle } = styles;

        const { navigation } = this.props;

        let dataSendToDetail = {
            name: "Star Wars",
            releaseYear: 1977
        };

        let mainView = (navigation.state.params && navigation.state.params.isSaving == true) ? <ActivityIndicator /> :
            <View style={containerStyle}>
                <Text style={textStyle}>This is Main Screen</Text>
                <Button
                    containerStyle={buttonContainerStyle}
                    style={buttonTextStyle}
                    onPress={() => {
                        this.props.navigation.navigate(DetailScreen, dataSendToDetail);
                    }}
                >
                Navigate to Detail
                </Button>
                <Button
                    containerStyle={buttonContainerStyle}
                    style={buttonTextStyle}
                    onPress={() => {
                        this.props.navigation.navigate(ThirdScreen);
                    }}
                >
                Navigate to Third
                </Button>
            </View>
        return mainView;
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    buttonContainerStyle: {
        padding: 10,
        margin: 20,
        width: 200,
        height: 45,
        borderRadius: 10,
        backgroundColor: 'darkviolet'
    },
    buttonTextStyle: {
        fontSize: 18,
        color: 'white'
    },
    btnSaveContainerStyle: {
        margin: 5, 
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'darkviolet'
    },
    btnSaveStyle: {
        margin: 5,
        fontSize: 15,
        color: 'white'
    }
}