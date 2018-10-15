import React from 'react'
import { View } from 'react-native'
import { Container } from 'native-base';
import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk';
import Expo from "expo";

import MainScreen from './src/screens/MainScreen'
import DeckDetailScreen from './src/screens/DeckDetailScreen'
import DeckCreateScreen from './src/screens/DeckCreateScreen'

const RootNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: () => ({
      title: 'My Decks'
    }),
  },
  Detail: {
    screen: DeckDetailScreen,
    navigationOptions: () => ({
      title: 'Deck Detail'
    }),
  },
  DeckCreate: {
    screen: DeckCreateScreen,
    navigationOptions: () => ({
      title: 'Deck Create'
    }),
  },

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose

// const store = createStore(
//    rootReducer,
//    applyMiddleware(thunk)
//   );

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
      )
    )
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <Container>
          <RootNavigator />
        </Container>
      </Provider>
    );
  }

}
