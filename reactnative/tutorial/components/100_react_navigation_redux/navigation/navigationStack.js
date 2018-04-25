import { StackNavigator } from 'react-navigation';
import Screen1 from '../components/screen1';
import Screen2 from '../components/screen2';

const navigator = StackNavigator({
    login: {
        screen: Login
    },
    screen1: {
        screen: Screen1
    },
    screen2: {
        screen: Screen2
    }
});

export default navigator;