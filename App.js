import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

const iconWidth = 26;
const iconHeight = 26;

export default class App extends React.Component {

  state = {
    screenText: "Press a button"
  }

  changeText = (text) => {
      this.setState({
        screenText: text
      })
  }

  render(){
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, color: "white"}}>{this.state.screenText}</Text>
      <StatusBar style="auto" />

      <View style={styles.Navigation}>
      
        <View style={styles.NavBar}>
        
          <Pressable onPress={() => this.changeText("Favorites")} style={styles.IconBehave}>
            <Icon name="favorite-heart-button" height={iconHeight} width={iconWidth} color="red"></Icon>
          </Pressable>

          <Pressable onPress={() => this.changeText("Chat")} style={styles.IconBehave}>
            <Icon name="chat-bubble" height={iconHeight} width={iconWidth} color="red"></Icon>
          </Pressable>

          <Pressable onPress={() => this.changeText("Settings")} style={styles.IconBehave}>
            <Icon name="settings-cogwheel-button" height={iconHeight} width={iconWidth} color="red"></Icon>
          </Pressable>

          <Pressable onPress={() => this.changeText("Users")} style={styles.IconBehave}>
            <Icon name="user-shape" height={iconHeight} width={iconWidth} color="red"></Icon>
          </Pressable>
        
        </View>

      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Navigation: {
    position: "absolute",
    alignItems: "center",
    bottom: 20
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 30
  },
  IconBehave: {
    padding: 14
  }
});
