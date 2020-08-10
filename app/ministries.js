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

  export default class MinistriesScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Ministries',
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
             <TouchableOpacity onPress={() => this.props.navigation.navigate('Foodbank')}>
            <ImageBackground source={require('./images/foodbank.png')} style={{width: '100%'}}>
            <Text style={styles.MainText}>Foodbank</Text>
               </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CoffeeMorning')}>
            <ImageBackground source={require('./images/53149_Morning_Coffee.png')} style={{width: '100%'}}>
                    <Text style={styles.MainText}>Coffee Morning</Text>
               </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Women')}>
            <ImageBackground source={require('./images/AE_WOMEN.png')} style={{width: '100%'}}>
                    <Text style={styles.MainText}>Women's Ministries</Text>
               </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Childern')}>
            <ImageBackground source={require('./images/KIDS.png')} style={{width: '100%'}}>
                    <Text style={styles.MainText}>Kids</Text>
               </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Youth')}>
            <ImageBackground source={require('./images/youth.png')} style={{width: '100%'}}>
                    <Text style={styles.MainText}>Youth</Text>
               </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Diners')}>
            <ImageBackground source={require('./images/DINERSCLUB.png')} style={{width: '100%'}}>
                    <Text style={styles.MainText}>Seniors Diners Club</Text>
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
          color: '#fff',
       },
      
      });