import React, { Component } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { connect } from 'react-redux'
import TestAction from '../Redux/TestRedux'

// Styles
import styles from './Styles/TestScreenStyle'

class TestScreen extends Component {
  
  render () {
    return (
      <View style={styles.mainContainer}>
          <Button 
            onPress={this.props.addValue}
            style={styles.button}
            title={"Tambah"} />

        <Text style={styles.text}>{this.props.value}</Text>

        <Button 
            onPress={this.props.reduceValue}
            style={styles.button}
            title={"Kurangi"} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.test.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addValue: () => dispatch(TestAction.addValue()),
    reduceValue: () => dispatch(TestAction.reduceValue())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen)
