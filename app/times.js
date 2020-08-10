import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView, 
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';

  export default class TimesScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Times',
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
          <Image source={require('./images/churchdoor.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Times</Text>

      <Text style={styles.MainText}>Sundays at 11am and 6:30pm</Text>
      
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
        fontSize: 18,
        padding: 10,
        paddingTop: 10,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'justify'
      },
    
    });
    