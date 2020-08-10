import React from 'react';
import { Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchScreen extends React.Component { 
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'Search',
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
          isLoading: true,
          text: '',
          searchBarFocused: false
        }
        this.arrayholder = [];
      }

      componentDidMount(){
      const fetch = require('node-fetch');
      return fetch('http://ff45578b1a2f.ngrok.io/sermons.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, () => {
          this.arrayholder = responseJson ;
        })
      }).catch((error) => {
        console.error(error);
      });
  }

   GetFlatListItem (id) {
    this.props.navigation.navigate("Sermons", { FlatListClickItemHolder: id});
    }

   SearchFilterFunction(text){
     const newData = this.arrayholder.filter((item) => {
         const itemData = item.Name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: newData,
         text: text
     })
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
       <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={(text) => this.SearchFilterFunction(text)}
       value={this.state.text}
       autoCorrect={false} 
       underlineColorAndroid='transparent'
       placeholder="Search Here"
        />
           <FlatList style={{paddingTop: 30}}
          data={ this.state.dataSource }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => <Text style={styles.rowViewContainer} onPress={this.GetFlatListItem.bind(this, item.id)}> {item.Name} </Text>}
          //enableEmptySections={true}
          keyExtractor={(item, index) => index.toString()}
          />
      </View>
    );
  }
 }

const styles = StyleSheet.create({

 MainContainer: {
  justifyContent: 'center',
  flex:1,
  margin: 7,
  },
 
 rowViewContainer: {
   fontSize: 17,
   padding: 10
  },

  TextInputStyleClass:{    
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFF"       
   }
});