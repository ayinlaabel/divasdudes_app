import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../screens/Dashboard';
import Payment from '../../screens/Payment';
import Savings from '../../screens/Savings';
import Card from '../../screens/Cards';
import More from '../../screens/More';
import { Text, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { IsNavbar, NavbarLabel } from '../style';
import { Colors } from '../colors';
import Banks from '../../screens/Banks';

const { brand, inactive } = Colors;
const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            // display: 'flex',
            maxHeight: 60,
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                type="font-awesome"
                name="tachometer"
                size={20}
                color={focused ? brand : inactive}
              />
              <NavbarLabel focused={focused}>Dashboard</NavbarLabel>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                type="font-awesome"
                name="paper-plane"
                size={20}
                color={focused ? brand : inactive}
              />
              <NavbarLabel focused={focused}>Payment</NavbarLabel>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Savings"
        component={Savings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <IsNavbar focused={focused}>
              <Icon
                type="ionicon"
                name="wallet"
                size={20}
                color={focused ? brand : inactive}
              />
              <NavbarLabel focused={focused}>Savings</NavbarLabel>
            </IsNavbar>
          ),
        }}
      />
      <Tab.Screen
        name="Card"
        component={Card}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                type="font-awesome"
                name="cc-mastercard"
                size={20}
                color={focused ? brand : inactive}
              />
              <NavbarLabel focused={focused}>Cards</NavbarLabel>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                type="ionicon"
                name="grid"
                size={20}
                color={focused ? brand : inactive}
              />
              <NavbarLabel focused={focused}>More</NavbarLabel>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navbar;
