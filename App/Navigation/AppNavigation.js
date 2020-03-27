import { createAppContainer } from 'react-navigation'
import DetailMovieScreen from '../Containers/DetailMovieScreen'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MoviesScreen from '../Containers/MoviesScreen'
import TestScreen from '../Containers/TestScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  Details: { screen: DetailMovieScreen, },
  Movies: { screen: MoviesScreen },
  Test: { screen: TestScreen },
  Launch: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MoviesScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
