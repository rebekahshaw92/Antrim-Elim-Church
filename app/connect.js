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


export default class ConnectScreen extends React.Component  {
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'Connect',
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
                <ImageBackground source={require('./images/connect.png')} style={{width: '100%', opacity: 0.8}}>
              <Text style={styles.MainText}>Connect</Text>
         </ImageBackground>
         <View style={{flexDirection: 'row'}}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Next')}>
         <Text style={styles.TextView}>Next Step </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Next')}>
         <Text style={styles.TextView2}>> </Text>
         </TouchableOpacity>
         </View>
         <View style={{flexDirection: 'row'}}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Find')}>
         <Text style={styles.TextView}>Find Us</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Find')}>
         <Text style={styles.TextView3}>> </Text>
         </TouchableOpacity>
         </View>
         <View style={{flexDirection: 'row'}}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('PrayerRequests')}>
         <Text style={styles.TextView}>Prayer Requests</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('PrayerRequests')}>
         <Text style={styles.TextView4}>> </Text>
         </TouchableOpacity>
         </View>
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

   TextView: {
       paddingTop: 20,
       paddingLeft: 20,
       fontSize: 18
   },

   TextView2: {
    paddingTop: 20,
    paddingLeft: 258,
    fontSize: 18
},

TextView3: {
    paddingTop: 20,
    paddingLeft: 283,
    fontSize: 18
},

TextView4: {
    paddingTop: 20,
    paddingLeft: 200,
    fontSize: 18
},

  });
  
  
