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

  export default class WomenScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Womens Ministries',
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
          <Image source={require('./images/AE_WOMEN.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Women's Ministries</Text>
      <Text style={styles.MainText}>t is our desire that women of all ages, backgrounds and nationalities to feel loved, accepted, encouraged, and equipped to shine and flourish in their relationship with Jesus Christ.  We want to inspire women to be intentional about prayer, being in the word, serving others and sharing the love of Christ in their homes, families, workplaces and communities.  We also want to provide opportunities for friendships to be made and nurtured as we grow in grace.</Text>
      <Text style={styles.TextContainer}>Shine</Text>
      <Text style={styles.MainText}>We invite all women to join us for our monthly SHINE event where we seek to encourage women to prioritise and grow in prayer, the word of God and friendship with one another – and to shine for Jesus.  We provide a varied programme throughout September to June – follow us on social media for regular updates.  SHINE meets Monthly on the second Wednesday at 7:30pm unless otherwise announced.</Text>
      <Text style={styles.MainText}>There is something so special when a group of women join together to encounter God – so we invite you to come with expectation. </Text>
      <Text style={styles.MainText}>We serve a perfect and awesome God who welcomes each of us ‘just as we are’ with wide-open arms.</Text>
      <Text style={styles.MainText}>YOU are welcome!</Text>
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