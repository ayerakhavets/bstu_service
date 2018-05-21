import { createStackNavigator } from 'react-navigation';
import CourseList from './CourseList.component';
// const DeanStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const DeanStack = createStackNavigator({ CourseList });

export default DeanStack;
