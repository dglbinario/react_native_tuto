'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';

type Props = {};

const App = StackNavigator({
    Home: { screen: SearchPage },
});
export default App;