import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import SearchSreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
  Search: SearchSreen,
  ResultsShow: ResultsShowScreen
  }, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Buisness Search'
    }
  }
);

export default createAppContainer(navigator)
