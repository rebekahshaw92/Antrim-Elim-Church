import React from 'react';
import { View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import Slider  from '@react-native-community/slider';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Ionicons';


const img_speaker = require('./resources/ui_speaker.png');
const img_pause = require('./resources/ui_pause.png');
const img_play = require('./resources/ui_play.png');
const img_playjumpleft = require('./resources/ui_playjumpleft.png');
const img_playjumpright = require('./resources/ui_playjumpright.png');

export default class SecondActivity extends React.Component 
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

    constructor(props){
      super(props);
      this.state = {
          playState:'paused', //playing, paused
          playSeconds:0,
          duration:0,
          FileUrlHolder: ''
          
      }     
      this.sliderEditing = false;
  }

  componentDidMount(){
const fetch = require('node-fetch');
  fetch('http://ff45578b1a2f.ngrok.io/Filter.php', {
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
            FileUrlHolder: responseJson[0].FileUrl 
          });
        
    }).catch((error) => {
      console.error(error);
    });
    
      this.play();
      
      this.timeout = setInterval(() => {
          if(this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing){
              this.sound.getCurrentTime((seconds, isPlaying) => {
                  this.setState({playSeconds:seconds});
              })
          }
      }, 100);
  }

  componentWillUnmount(){
      if(this.sound){
          this.sound.release();
          this.sound = null;
      }
      if(this.timeout){
          clearInterval(this.timeout);
      }
  }

  onSliderEditStart = () => {
      this.sliderEditing = true;
  }
  onSliderEditEnd = () => {
      this.sliderEditing = false;
  }
  onSliderEditing = value => {
      if(this.sound){
          this.sound.setCurrentTime(value);
          this.setState({playSeconds:value});
      }
    }

    async play(){
    if(this.state.FileUrlHolder){
      if(this.sound){
         this.sound.play(this.playComplete);
         this.setState({playState:'playing'});
     }else{
        const filepath = this.state.FileUrlHolder;
        console.log('[Play]', filepath);
        
          this.sound = new Sound(filepath, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                  console.log('failed to load the sound', error);
                  Alert.alert('Notice', 'audio file error. (Error code : 1)');
                 this.setState({playState:'paused'});
             }else{
                  this.setState({playState:'playing', duration:this.sound.getDuration()});
                  this.sound.play(this.playComplete);
              }
          });    
     }
  }
}

  playComplete = (success) => {
      if(this.sound){
          if (success) {
              console.log('successfully finished playing');
          } else {
              console.log('playback failed due to audio decoding errors');
              Alert.alert('Notice', 'audio file error. (Error code : 2)');
          }
          this.setState({playState:'paused', playSeconds:0});
          this.sound.setCurrentTime(0);
      }
  }

  pause = () => {
      if(this.sound){
          this.sound.pause();
      }

      this.setState({playState:'paused'});
  }

  jumpPrev15Seconds = () => {this.jumpSeconds(-15);}
  jumpNext15Seconds = () => {this.jumpSeconds(15);}
  jumpSeconds = (secsDelta) => {
      if(this.sound){
          this.sound.getCurrentTime((secs, isPlaying) => {
              let nextSecs = secs + secsDelta;
              if(nextSecs < 0) nextSecs = 0;
              else if(nextSecs > this.state.duration) nextSecs = this.state.duration;
              this.sound.setCurrentTime(nextSecs);
              this.setState({playSeconds:nextSecs});
          })
      }
  }

  getAudioTimeString(seconds){
      const h = parseInt(seconds/(60*60));
      const m = parseInt(seconds%(60*60)/60);
      const s = parseInt(seconds%60);

      return ((h<10?'0'+h:h) + ':' + (m<10?'0'+m:m) + ':' + (s<10?'0'+s:s));
  }

  render(){

      const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
      const durationString = this.getAudioTimeString(this.state.duration);

      return (
          <View style={{flex:1, justifyContent:'center', backgroundColor:'black'}}>
              <Image source={img_speaker} style={{width:150, height:150, marginBottom:15, alignSelf:'center'}}/>
              <View style={{flexDirection:'row', justifyContent:'center', marginVertical:15}}>
                  <TouchableOpacity onPress={this.jumpPrev15Seconds} style={{justifyContent:'center'}}>
                      <Image source={img_playjumpleft} style={{width:30, height:30}}/>
                      <Text style={{position:'absolute', alignSelf:'center', marginTop:1, color:'white', fontSize:12}}>15</Text>
                  </TouchableOpacity>
                  {this.state.playState == 'playing' && 
                  <TouchableOpacity onPress={this.pause} style={{marginHorizontal:20}}>
                      <Image source={img_pause} style={{width:30, height:30}}/>
                  </TouchableOpacity>}
                  {this.state.playState == 'paused' && 
                  <TouchableOpacity onPress={this.play.bind(this)} style={{marginHorizontal:20}}>
                      <Image source={img_play} style={{width:30, height:30}}/>
                  </TouchableOpacity>}
                  <TouchableOpacity onPress={this.jumpNext15Seconds} style={{justifyContent:'center'}}>
                      <Image source={img_playjumpright} style={{width:30, height:30}}/>
                      <Text style={{position:'absolute', alignSelf:'center', marginTop:1, color:'white', fontSize:12}}>15</Text>
                  </TouchableOpacity>
              </View>
              <View style={{marginVertical:15, marginHorizontal:15, flexDirection:'row'}}>
                  <Text style={{color:'white', alignSelf:'center'}}>{currentTimeString}</Text>
                  <Slider
                      onTouchStart={this.onSliderEditStart}
                      onTouchEnd={this.onSliderEditEnd}
                      onValueChange={this.onSliderEditing}
                      value={this.state.playSeconds} maximumValue={this.state.duration} maximumTrackTintColor='gray' minimumTrackTintColor='white' thumbTintColor='white' 
                      style={{flex:1, alignSelf:'center', marginHorizontal:Platform.select({ios:5})}}/>
                  <Text style={{color:'white', alignSelf:'center'}}>{durationString}</Text>
              </View>
          </View>
      )
  }
}