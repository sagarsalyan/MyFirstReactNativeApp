import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './component/Home';
import PresentationalComponent from './component/PresentationalComponent';

export default class App extends React.Component {
  constructor(){
    super();
    this.updateState = this.updateState.bind(this);
  }
  state = {
    myState : "This is State"
  }
  updateState = () => this.setState(
    {
      myState : "State is Updated"
    }
  )
  render(){
    return (
      <View style={styles.container}>
        <Text>My First React App</Text>
        <Text onPress = {this.updateState}>{this.state.myState}</Text>
        <Home/>
        <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
