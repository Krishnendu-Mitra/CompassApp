import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { render } from 'react-dom';

AppRegistry.registerComponent(appName, () => App);

const rootTag = document.getElementById('root') || document.createElement('div');
if (!document.getElementById('root')) {
    document.body.appendChild(rootTag);
}

AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag,
});
