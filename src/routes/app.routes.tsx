import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import { EditMeal } from '../Screens/EditMeal';
import Estatisticas from '../Screens/Estatisticas';
import Meal from '../Screens/Meal';
import { NewMeal } from '../Screens/NewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />
            <Screen
                name='edit'
                component={EditMeal}
            />
            <Screen
                name='statics'
                component={Estatisticas}
            />
            <Screen
                name='meal'
                component={Meal}
            />
            <Screen
                name='new'
                component={NewMeal}
            />
        </Navigator>
    );
}