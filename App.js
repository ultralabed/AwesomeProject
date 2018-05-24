import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './component/Home';
import Share from './component/Share';
import List from './component/List';
import Topics, { Topic } from './component/Topics';


export default App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>Home</Text>
        </Link>
        <Link
          to="/list"
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text>List</Text>
        </Link>
        <Link
          to="/share"
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text>Share</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text>Topics</Text>
        </Link>
      </View>
      <View>
        <Route exact path="/" component={Home}/>
        <Route path="/share" component={Share}/>
        <Route path="/list" component={List}/>
        <Route path="/topics" component={Topics}/>
      </View>
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})
