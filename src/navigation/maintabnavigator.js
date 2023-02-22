import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NotScreen from '../screens/NotScreen';
import ChatsScreen from '../screens/ChatsScreen';
import { Ionicons, Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'whitesmoke',
        },
        tabBarStyle: {
          backgroundColor: 'whitesmoke',
        },
      }}
    >
      <Tab.Screen
        name="Status"
        component={NotScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={NotScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={NotScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({navigation})=>({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles-sharp" color={color} size={size} />
          ),
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate('Contacts')}
              name="new-message"
              size={24}
              color="royalblue"
              style={{
                marginRight: 10,
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={NotScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
