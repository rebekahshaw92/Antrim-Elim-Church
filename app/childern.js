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

  export default class ChildernScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Kids',
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
          <Image source={require('./images/KIDS.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Sunday School</Text>
      <Text style={styles.MainText}>At Antrim Elim we are so excited about leading children to Jesus, helping them to grow in their knowledge and love for him and teaching them to live out their faith at home, school and wherever they may find themselves.</Text>
      <Text style={styles.MainText}>Sunday School runs during our morning worship service.  We encourage families to bring their children and worship together at the beginning of the service and then leave with the team at approximately 11:20am.  Children of primary school age are welcome to be part of a great hour of worship, stories, games and fun in the Oasis Centre.  All our children’s workers have received the appropriate screening and training for their roles.   All children attending Sunday School must be collected by a parent following the morning service.</Text>
      <Text style={styles.TextContainer}>Crèche</Text>
      <Text style={styles.MainText}>We have a great uniquely designed crèche for all babies and children under P1.  They church service is fed into the room so you can enjoy the worship and preaching whilst your youngling can play freely.  Please note the crèche is not ‘staffed’ and requires a parent to be with their child at all times.  Baby changing facilities are available.</Text>
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

});