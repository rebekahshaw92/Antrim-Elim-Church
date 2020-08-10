import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  ImageBackground, 
  Header
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default class MainScreen extends React.Component 
{
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'Sermons',
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

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount(){
    const fetch = require('node-fetch');
    fetch('http://ff45578b1a2f.ngrok.io/FilterCat.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
        // Getting the id.
        id: this.props.navigation.state.params.FlatListClickItemHolder
    })

   }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      });
    }).catch((error) => {
      console.error(error);
    });
}
  FlatListViewItemSeparator = () => {
    return (
      <View
      style={{
        height: .5,
        width: "100%",
        backgroundColor: "#000",
      }}
    />
    );
  }

  OpenSecondActivity(id) {
    this.props.navigation.navigate("Sermons", { FlatListClickItemHolder: id});
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.MainContainer}>
        <FlatList style={{paddingTop: 30}}
          data={ this.state.dataSource }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()} />
      </View>
    );
  }
     
     _renderItem = ({item}) => {

      return(
          <View style={styles.MainView}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.rowViewContainer} onPress={this.OpenSecondActivity.bind(this, item.id)}>{item.Name}</Text>
              {/* <Text style={styles.SermonByText}>{item.SermonBy}</Text> */}
              <Text style={styles.SermonByText}> - {item.DateRecorded}</Text>
          </View>
          </View>
      );
    }
    
  }

const styles = StyleSheet.create({
 MainContainer:
 {
    justifyContent: 'center',
    flex:1
 },

 MainView:
 {
    justifyContent: 'center',
    flex:1,
    flexDirection: 'row'
 },

MainText:
 {
   textAlign: 'center',
   paddingTop: 20,
   paddingBottom: 40,
   paddingLeft: 10,
   fontFamily: 'Avenir-Black',
   fontSize: 40,
   color: '#fff'

},
 
 rowViewContainer: {
    fontSize: 16,
    paddingTop: 10,
    marginLeft: 10
    
  },
 
  textViewContainer: {
    padding:5,
    fontSize: 16,
    color: '#000',
   },

   SermonByText: {
    paddingTop:10,
    //marginLeft: 10,
    fontSize: 16,
    color: '#5a5a5a',
   }
});