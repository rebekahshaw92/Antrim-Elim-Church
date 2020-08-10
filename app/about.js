import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView, 
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class AboutScreen extends React.Component  {
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'About',
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

render() {
  
  return (
    <ScrollView>
    <View style={{flex:1}}>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Follow')}>
      <ImageBackground source={require('./images/28938_Find_Us_Socially.png')} style={{width: '100%'}}>
              <Text style={styles.MainText}>Follow Us</Text>
         </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Times')}>
      <ImageBackground source={require('./images/churchdoor.png')} style={{width: '100%'}}>
              <Text style={styles.MainText}>Times</Text>
         </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Pastor')}>
      <ImageBackground source={require('./images/pastor.png')} style={{width: '100%'}}>
              <Text style={styles.MainText}>The Pastor</Text>
         </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Ministries')}>
      <ImageBackground source={require('./images/churchpic.png')} style={{width: '100%'}}>
              <Text style={styles.MainText}>Ministries</Text>
         </ImageBackground>
      </TouchableOpacity>
  </View>
  </ScrollView>
  );
}
}

const styles = StyleSheet.create({
 MainText:
  {
    textAlign: 'left',
    paddingTop: 160,
    paddingBottom: 10,
    paddingLeft: 20,
    fontFamily: 'Avenir-Black',
    fontSize: 30,
    color: '#fff'
 
 },

});