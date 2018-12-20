import React from 'react';
import { Platform, View, StyleSheet, AsyncStorage } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import ApiKeys from './constants/ApiKeys';
import { navigateOnce } from './navigator/Navigator';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { store } from './reducers/app-redux';
import { persistStore } from "redux-persist";
import MainApp from "./navigator/MainApp";

persistStore(store, {storage: AsyncStorage});

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: true,
      isAuthenticated: true,
    };

    // Initialize firebase...
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({
        isAuthenticationReady: true,
        isAuthenticated: !!user
    });
  };

  render() {
    if ((!this.state.isLoadingComplete || !this.state.isAuthenticationReady)) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
          <Provider store={ store }>
              <MainApp />
          </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
          'Ionicons': require('./assets/fonts/ionicons.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});
