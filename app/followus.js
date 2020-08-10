import React from 'react';
import {
  StyleSheet,
  View,
  Text, 
  Linking,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FollowScreen extends React.Component  {
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'Follow Us',
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
<>
<View>
<Image source={require('./images/28938_Find_Us_Socially.png')}
        style={{ width: '100%', height: 200}}
      />
</View>
<View style={{flexDirection: 'row', height: 130}}>
    <View>
    <TouchableOpacity onPress={() => Linking.openURL('http://facebook.com/AntrimElimChurch')}>
        <Text style={styles.TextContainer}>Like Us on FB!</Text>
        <Text style={styles.Text2}>Facebook</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.IconImage}>
        <TouchableOpacity onPress={() => Linking.openURL('http://facebook.com/AntrimElimChurch')}>
        <Icon name="logo-facebook" size={40} color={'#E8AA65'} />
        </TouchableOpacity>
        </View>
        </View>
        
        <View style={{flexDirection: 'row', height: 130}}>
    <View>
    <TouchableOpacity onPress={() => Linking.openURL('http://instagram.com/AntrimElimChurch')}>
        <Text style={styles.TextContainer2}>Follow Us on IG!</Text>
        <Text style={styles.Text2}>Instagram</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.IconImage2}>
        <TouchableOpacity onPress={() => Linking.openURL('http://instagram.com/AntrimElimChurch')}>
        <Icon name="logo-instagram" size={40} color={'#E8AA65'} />
        </TouchableOpacity>
        </View>
        </View>
        <View style={{flexDirection: 'row'}}>
    <View>
    <TouchableOpacity onPress={() => Linking.openURL('http:/twitter.com/AntrimElim')}>
        <Text style={styles.TextContainer2}>Follow Our Tweets!</Text>
        <Text style={styles.Text2}>Twitter</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.IconImage3}>
        <TouchableOpacity onPress={() => Linking.openURL('http:/twitter.com/AntrimElim')}>
        <Icon name="logo-twitter" size={40} color={'#E8AA65'} />
        </TouchableOpacity>
        </View>
        </View>
        </>
       );
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
    Text2: {
        fontSize: 20,
        padding: 10,
        marginLeft: 20,
        color: '#000',
      },

      TextContainer2: {
        fontSize: 20,
        padding: 10,
        marginLeft: 20,
        color: '#E8AA65',
        fontWeight: 'bold',
      },
      IconImage: {
        paddingTop: 40,
        paddingLeft: 150,
      },
      IconImage2: {
        paddingTop: 40,
        paddingLeft: 129,
      },
      IconImage3: {
        paddingTop: 30,
        paddingLeft: 95,
      },
    
    });