import React, { Component } from 'react';
import { Platform, StatusBar, View, StyleSheet } from 'react-native';
import { Root, Icon } from 'native-base';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

// import auth screens
// import Login from './screens/auth/Login';
// import app screens
import Home from '../screens/Home';



const TabIcon = ({ selected, focused, IconName, IconType }) => {
    return (
        <Icon name={ IconName } type={ IconType } style={{ color: focused ? '#008ecf':'#7d7d7d', fontSize: 24, marginBottom: focused ? 5:0 }}/>
    )
}
class MainApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                { Platform.OS === 'ios' && <View style={styles.statusBarBackground } />}
                { Platform.OS === 'android' && <View style={styles.statusBarUnderlay } />}
                <Root>
                    <StatusBar
                        backgroundColor={'#fff'}
                        barStyle='light-content'
                        translucent={false}
                    />
                    <Router>
                        <Scene key="root">
                            <Scene key="tabbar" tabs hideNavBar activeTintColor={'#008ecf'}>
                                <Scene key="home" title="Home" component={ Home } initial IconName="home" IconType="Entypo" icon={ TabIcon } hideNavBar/>
                            </Scene>
                            {/*<Scene key="login" component={ Login } hideNavBar />*/}
                        </Scene>
                    </Router>
                </Root>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps) (MainApp);

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