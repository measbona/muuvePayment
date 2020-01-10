import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SplashScreen from '../screen/splashScreen'
import HomeScreen from '../screen/homeScreen'
const stackNavigator = createSwitchNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  SplashScreen: {
    screen: SplashScreen
  }
},
{
  initialRouteName: 'SplashScreen'
}
)
export default createAppContainer(stackNavigator)
