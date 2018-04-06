
import { StackNavigator } from 'react-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';


export const StackIndex = StackNavigator({
    Screen1: {
        screen: Screen3
    },
    Screen2: {
        screen: Screen2
    },
    Screen3: {
        screen: Screen3
    }
});