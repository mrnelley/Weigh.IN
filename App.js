import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { fetchUsers } from './constants/api';

export default class App extends React.Component {
  static defaultProps = {
    fetchUsers
  }

  state = {
    loading : false,
    users : []
  }

  async componentDidMount(){
    this.setState({loading : true})
    const data = await this.props.fetchUsers();
    setTimeout(() => this.setState({loading : false, users : data.users}), 2000)
  }

  render() {
    if (this.state.loading){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="small"/>
        </View>
      )
    } else
    return (
      <View style={styles.container}>
        <Text>Weigh.In</Text>
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
