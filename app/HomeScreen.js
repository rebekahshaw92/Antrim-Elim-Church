import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground, 
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class HomeScreen extends React.Component 
{
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'Home',
       headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Icon name="ios-search" color="#fff" size={30} style={{paddingRight: 20}}
       />
       </TouchableOpacity>
    
        ),
         headerTitleStyle:{
           color: "white",
           alignSelf: "center",
           fontSize: 20        
         }, 
         headerStyle:{
           backgroundColor: "#404042",
        },
        headerTintColor: 'white' 
      }
    }

 render() {
   
  return (
  <ScrollView>
     <View style={{flex:1}}>
     <TouchableOpacity onPress={() => this.props.navigation.navigate('Listen')}>
     <ImageBackground source={require('./images/bible.png')} style={{width: '100%', opacity: 0.8}}>
              <Text style={styles.MainText}>Sermons</Text>
              </ImageBackground>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}>
      <ImageBackground source={require('./images/events.png')} style={{width: '100%', opacity: 0.8}}>
              <Text style={styles.MainText}>Events</Text>
         </ImageBackground>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Connect')}>
         <ImageBackground source={require('./images/connect.png')} style={{width: '100%', opacity: 0.8}}>
              <Text style={styles.MainText}>Connect</Text>
         </ImageBackground>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
      <ImageBackground source={require('./images/church.png')} style={{width: '100%', opacity: 0.8}}>
              <Text style={styles.MainText}>About</Text>
         </ImageBackground>
         </TouchableOpacity>
     </View>

    </ScrollView>
  )
 }
}

const styles = StyleSheet.create({
  MainText:
  {
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 70,
    paddingLeft: 20,
    fontFamily: 'Avenir-Black',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
 
 },
});

