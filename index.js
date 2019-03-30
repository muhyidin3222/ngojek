import { AppRegistry, View, Text, YellowBox } from 'react-native';
import App from './src/main'
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Remote debugger']);
AppRegistry.registerComponent(appName, () => App);
