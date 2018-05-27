// @flow
import { createStackNavigator } from 'react-navigation';
import AddCheck from './AddCheck.component';
import CheckList from './CheckList.component';
import { colors } from '../../../Components';

const addCheck = 'Чек';
const checkList = 'Выплаты';

export default createStackNavigator({
  [`${checkList}`]: CheckList,
  [`${addCheck}`]: AddCheck
},
{
  navigationOptions: ({ navigation }) => ({
    title: navigation.state.routeName,
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.greenLight
    }
  })
});
