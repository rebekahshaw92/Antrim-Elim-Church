import React from 'react';
import { View,  Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MoreScreen extends React.Component {
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'More',
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
      <View style={{flexDirection: 'row', height: 100}}>
        <View style={styles.IconImage}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Find')}>
            <FontAwesome name="location-arrow" size={40} color={'#E8AA65'} />
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 50, paddingLeft: 40}}>
          <Text style={{fontSize: 20}}>Find Us</Text>
        </View>
     </View>
     <View style={{flexDirection: 'row', height: 130}}>
        <View style={styles.IconImage}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
        <Icon
              name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
              size={40}
              color={"#E8AA65"}
            />
        </TouchableOpacity>
        </View>
         <View style={{paddingTop: 50, paddingLeft: 40}}>
           <Text style={{fontSize: 20}}>Settings</Text>
            </View>
            </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
   IconImage: {
       paddingTop: 40,
       paddingLeft: 40,
     },  
});
