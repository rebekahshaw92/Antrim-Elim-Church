import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MainScreen from './MainScreen';
import EventScreen from './events';
import SecondActivity from './sermons';
import AboutScreen from './about';
import FollowScreen from './followus';
import SearchScreen from './search';
import HomeScreen from './HomeScreen';
import GiveScreen from './give';
import MoreScreen from './more';
import FindScreen from './findus';
import MainSermonScreen from './MainSermons';
import PastorScreen from './ThePastor';
import TimesScreen from './times';
import MinistriesScreen from './ministries';
import FoodbankScreen from './Foodbank';
import WomenScreen from './women';
import CoffeeMorningScreen from './coffemorning';
import ChildernScreen from './childern';
import YouthScreen from './Youth';
import PrayerScreen from './prayer';
import DinersScreen from './diners';
import ConnectScreen from './connect';
import NextStepsScreen from './nextsteps';
import BaptismScreen from './baptism';
import MemberScreen from './member';
import PrayerRequestsScreen from './prayerrequests';
import SettingsScreen from './settings';

import { initialRoute } from './Notifications';
import Notifications from "./Notifications.1";

export const HomeStack = createStackNavigator({
  Home:
  {
   screen: HomeScreen,
      },
  Listen: {
    screen: MainSermonScreen,
          },
  Events: {
    screen: EventScreen,
         },
   About: {
    screen: AboutScreen,
            },

  Follow:
  {
        screen: FollowScreen,
      },

    MainSermons: {
      screen: MainScreen,
                  }, 
    Sermons: {
      screen: SecondActivity,
            },
    Find: {
      screen: FindScreen,
         },   
   Search: {
          screen: SearchScreen,
                },  
   Pastor: {
          screen: PastorScreen
   },   
   Times: {
    screen: TimesScreen
}, 
Ministries: {
  screen: MinistriesScreen
},

Foodbank: {
  screen: FoodbankScreen
},

CoffeeMorning: {
  screen: CoffeeMorningScreen
},

Women: {
  screen: WomenScreen
},

Childern: {
  screen: ChildernScreen
},

Youth: {
  screen: YouthScreen
},

Prayer: {
  screen: PrayerScreen
},
Diners: {
  screen: DinersScreen
},
Connect: {
  screen: ConnectScreen
},
Next: {
  screen: NextStepsScreen
},
Baptism: {
  screen: BaptismScreen
},
Member: {
  screen: MemberScreen
},
PrayerRequests: {
  screen: PrayerRequestsScreen
},
      Settings: {
        screen: SettingsScreen
      },
});

export const SettingsStack = createStackNavigator({ 
  More:
  {
        screen: MoreScreen,
      },
    });


    export const EventStack = createStackNavigator({ 
      Events: {
        screen: EventScreen,
      }
    });

    export const GiveStack = createStackNavigator({ 
      Give: {
        screen: GiveScreen,
              },
    });

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title:  'Home',
      tabBarIcon: ({ focused }) => (
        <Icon
          name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
          size={30}
          color={focused ? '#E8AA65' : '#58585A'}
        />
      ),
    },
  },
  Give: {
    screen: GiveStack,
    navigationOptions: {
      title:  'Give',
      tabBarIcon: ({ focused }) => (
        <Icon
          name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
          size={30}
          color={focused ? '#E8AA65' : '#58585A'}
        />
      ),
    },
  },
  Events: {
    screen: EventStack,
    navigationOptions: {
      title:  'Events',
      tabBarIcon: ({ focused }) => (
        <Icon
          name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
          size={30}
          color={focused ? '#E8AA65' : '#58585A'}
        />
      ),
    },
  },
  More: {
    screen: SettingsStack,
    navigationOptions: {
      title:  'More',
      tabBarIcon: ({ focused }) => (
        <Icon
          name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'}
          size={30}
          color={focused ? '#E8AA65' : '#58585A'}
        />
      ),
    },   
  },
},
{
  initialRouteName: 'Home',
  tabBarOptions: {
      labelPosition: 'below-icon',
      activeTintColor: '#E8AA65',
      inactiveTintColor: '#58585A',
      fontSize: 50,
      style: {
        height: 50,
        backgroundColor: '#3B3B3B',
       }
    },
  });


export default createAppContainer(TabNavigator);

