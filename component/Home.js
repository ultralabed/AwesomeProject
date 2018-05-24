import React, { PureComponent } from 'react'
import {
  Text,
  StyleSheet,
  View,
} from 'react-native'
import { Button, SearchBar, Slider, WingBlank, WhiteSpace } from 'antd-mobile';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  render() {
    return (
      <View>
        <SearchBar
          value={this.state.inputValue}
          placeholder="Search"
          onChange={(value) => console.log('on search value is', value)}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
        />
        <Button>Start</Button>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Text>Slider</Text>
          <Slider
            style={{ marginLeft: 30, marginRight: 30 }}
            defaultValue={20}
            min={0}
            max={100}
            onChange={(value) => console.log('change', value)}
            onAfterChange={() => console.log('afterChange')}
          />
        </WingBlank>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});
