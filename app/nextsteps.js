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


export default class NextStepsScreen extends React.Component  {
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'Next Steps',
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
                <Image source={require('./images/walking-454543_640.png')} style={{width: '100%', height: 150, opacity: 0.8}} />
         <View style={{flexDirection: 'row'}}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Baptism')}>
         <Text style={styles.TextView}>Baptism </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Baptism')}>
         <Text style={styles.TextView2}>> </Text>
         </TouchableOpacity>
         </View>
         <View style={{flexDirection: 'row'}}>
         <Text style={styles.TextView}>Flourish</Text>
         <Text style={styles.TextView3}>> </Text>
         </View>
         <View style={{flexDirection: 'row'}}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Member')}>
         <Text style={styles.TextView}>Become A Member</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Member')}>
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
    paddingLeft: 280,
    fontSize: 18
},

TextView3: {
    paddingTop: 20,
    paddingLeft: 288,
    fontSize: 18
},

TextView4: {
    paddingTop: 20,
    paddingLeft: 180,
    fontSize: 18
},



  });
  