import React from 'react';
import { View,  Text, StyleSheet, TouchableOpacity, Image,  ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';


export default class FindScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
        return {
          headerTitle: 'Find Us',
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
        <View style={{flex: 1}}>

            <Image
          style={{width: '100%', height: 200}}
          source={require('./images/church.png')}
        />

        <ScrollView>
        <View style={{height: 450}}> 
        <Text style={styles.MainText}>Directions</Text>
        <View style={styles.MainView}>
            <Text style={styles.AddressText}>Antrim Elim Church
            {'\n'}
            Parkhall Road
            {'\n'}
            Antrim
            {'\n'}
            BT41 1BU</Text>

     <View>
            <Entypo name="location-pin" size={30} color={'#E8AA65'}  style={styles.IconImage}  />
            </View>
    </View>
    
        <View>
            <Text style={styles.MainText}>Phone</Text>
            <View style={styles.MainView}>
            <Text style={styles.AddressText}>+44 7368 830527</Text>
            <View>
            <Entypo name="phone" size={30} color={'#E8AA65'}  style={styles.IconImage2}  />
            </View>
        </View>
        </View>

        <View>
            <Text style={styles.MainText}>Email</Text>
            <View style={styles.MainView}>
            <Text style={styles.AddressText}>antrimelimchurch@gmail.com</Text>
            
            <Entypo name="mail" size={30} color={'#E8AA65'}  style={styles.IconImage3}  />
            </View>
        </View>
        </View>
        </ScrollView>
        </View>
    )
   }
}

const styles = StyleSheet.create({
MainText: {
paddingLeft: 20,
paddingTop: 40,
fontSize: 16,
color: '#E8AA65'
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
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 16
}
  
});