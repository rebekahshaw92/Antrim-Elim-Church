import React from 'react';
import {
  StyleSheet,
  View,
  Text, 
  Linking,
  TouchableOpacity,
  Image,
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SettingsScreen extends React.Component  {
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'Settings',
       headerRight: () => (
       <Icon name="ios-search" color="#fff" size={30} style={{paddingRight: 20}}
       onPress={() => navigation.navigate('Search')}/>
        ),
         headerTitleStyle:{
           color: "white",
           alignSelf: "center",
           fontSize: 20        
         }, 
         headerStyle:{
           backgroundColor: "#404042"
        },
        headerTintColor: 'white'
      }
    }
        state = {
           isSwitchOn: false,
           isMySwitchOn: false,
        }
    

    mySwitch = ()  => this.setState(state => ({ isSwitchOn: !state.isSwitchOn}));
  
    SecondSwitch = ()  => this.setState(state => ({ isMySwitchOn: !state.isMySwitchOn}));   

    render(){
      const { isSwitchOn } = this.state;
      const { isMySwitchOn } = this.state
        return (
            <View style={{flex: 1, backgroundColor: '#D8D8D8'}}>
              
                <Text style={styles.TextContainer}>Push Notifications</Text>
               <View style={styles.MainContainer}>
                <Text style={styles.MainText}>New Sermons</Text>
                <Switch
                    trackColor={{ false: "#3B3B3B", true: "#E8AA65" }}
                    ios_backgroundColor="#3B3B3B"
                    onValueChange={this.mySwitch}
                    value={isSwitchOn}
                    style={{marginLeft: 112}}
                  />
                </View>
                <View style={styles.MainContainer}>
                <Text style={styles.MainText}>New Events</Text>
                <Switch
                    trackColor={{ false: "#3B3B3B", true: "#E8AA65" }}
                    ios_backgroundColor="#3B3B3B"
                    onValueChange={this.SecondSwitch}
                    value={isMySwitchOn}
                    style={{marginLeft: 128}}
                  />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  TextContainer: {
   fontSize: 20,
   padding: 10,
   paddingTop: 20,
   marginLeft: 20,
   color: '#E8AA65',
   fontWeight: 'bold',
 },

 MainText: {
  fontSize: 16,
  padding: 10,
  paddingTop: 10,
  marginLeft: 20,
  marginRight: 20,
  textAlign: 'justify'
},

MainContainer: {
  flexDirection: 'row',  
  backgroundColor: '#fff',
  marginLeft: 20,
  marginRight: 20,
  padding: 20,
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  
},

SwitchContainer: {
  flex: 1,
  alignItems: 'center',
  marginTop: 100
}

});
