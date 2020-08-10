import React from 'react';
import { 
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    ActivityIndicator,
    TouchableOpacity
 }  from 'react-native';
 import Icon from 'react-native-vector-icons/Ionicons';

export default class MainSermonsScreen extends React.Component {
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
           fontSize: 20,
                  
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
      isLoading: true, 
      
    }
  }
  webCall= () => {
    const fetch = require('node-fetch');
       fetch('http://ff45578b1a2f.ngrok.io/category.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
      }).then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
      this.setState({
        isLoading: false,
        dataSource: responseJson,
        imageHolder: responseJson[0].eventImage
      }, () => {
        // In this block you can do something with new state.
      });
      //console.log(responseJson);
    }).catch((error) => {
    console.error(error);
  });
  }
   componentDidMount(){
 
    this.webCall();
   
   }

  FlatViewItemSeparator = () => {
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
    this.props.navigation.navigate("MainSermons", { FlatListClickItemHolder: id});
  }

  render() {
    if (this.state.isLoading){
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.MainContainer}>
   <FlatList
   
    data={ this.state.dataSource }
    
    ItemSeparatorComponent = {this.FlatListItemSeparator}

    renderItem={({item}) => 
    
        <View style={{flex:1}}>
          <TouchableOpacity onPress={this.OpenSecondActivity.bind(this, item.id)}>
          <Image source={{url: item.ImageURL}}
              style={{ width: '100%', height: 200 }}
            />
            </TouchableOpacity>
        </View>
    
      }

    keyExtractor={(item, index) => index.toString()}
    
    />

 </View>
);
}
    }

    const styles = StyleSheet.create({
        MainContainer:
        {
          justifyContent: 'center',
           flex: 1
        },
   
        eventContainer: {
         flex: 1, 
         flexDirection: 'row', 
         paddingLeft: 20,
         paddingTop: 40,
         paddingBottom: 20
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
           padding: 10,
           marginLeft: 10,
           flex: 1
         },
        
         textViewContainer: {
           padding:5,
           fontSize: 16,
           color: '#000'
          },
       
          SermonByText: {
           padding:10,
           marginLeft: 10,
           fontSize: 16,
           color: '#5a5a5a',
           flex: 1
          }
       });