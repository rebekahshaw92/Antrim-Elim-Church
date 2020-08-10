import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView, 
    Linking,
    TouchableOpacity,
    ImageBackground
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  import Entypo from 'react-native-vector-icons/Entypo';

  export default class PrayerRequestsScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Prayer Requests',
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
          <Image source={require('./images/prayer.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Prayer Requests</Text>
      <Text style={styles.MainText}>If you would like us to prayer from you then please contact us on</Text>

      <View>
            <Text style={styles.MainText2}>Phone / Text</Text>
            <View style={styles.MainView}>
            <Text style={styles.AddressText}>+44 7368 830527</Text>
            <View>
            <Entypo name="phone" size={30} color={'#E8AA65'}  style={styles.IconImage2}  />
            </View>
            </View>
            </View>
            <View>
            <Text style={styles.MainText2}>WhatsApp</Text>
            <View style={styles.MainView}>
            <Text style={styles.AddressText}>+44 7368 830527</Text>
            <View>
            <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?text=hello&phone=+447368830527')}>
            <Icon name="logo-whatsapp" size={30} color={'#E8AA65'}  style={styles.IconImage2}  />
            </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text style={styles.MainText2}>Email</Text>
            <View style={styles.MainView}>
            <Text style={styles.AddressText}>antrimelimchurch@gmail.com</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:antrimelimchurch@gmail.com')}>
            <Entypo name="mail" size={30} color={'#E8AA65'}  style={styles.IconImage3}  />
            </TouchableOpacity>
            </View>
        </View>
        </View>

              </View>
              </ScrollView>
        )

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

  MainView:
 {
    flexDirection: 'row', 
 },

 IconImage: {
    paddingLeft: 160,
    paddingTop: 45,
    
 },

 IconImage2: {
    paddingLeft: 160,
    paddingTop: 15

 },

 IconImage3: {
    paddingLeft: 70,
    paddingTop: 20

 },


AddressText: {
    paddingLeft: 30,
    paddingTop: 20,
    fontSize: 16
},

MainText2: {
    paddingLeft: 30,
    paddingTop: 40,
    fontSize: 16,
    color: '#E8AA65',
    fontWeight: 'bold',
    },

});