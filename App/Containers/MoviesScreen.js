import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import MoviesAction from '../Redux/MoviesRedux';

// Styles
import styles from './Styles/MoviesScreenStyle'

class MoviesScreen extends Component {
  constructor(props) {
    super(props);

    this.props.getMoviesPopular();
  
    this.state = {
      isLoading: false,
      data: { title: "dummy data", vote_average: 5}
   }
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate();
    if (newProps.movies.error === null && newProps.movies.data !== null) {
        this.setState({
          data: newProps.movies.data.results
        });
    } else {
      console.log(">> error");
    }
  }

  renderRefreshControl() {
    this.setState({ isLoading: true })
    this.props.getMoviesPopular()
  }

  onRowDataPressed = (rowData) => () => {
    alert(rowData.title)
  }

  renderRow (rowData) {
    return (
      <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Details', {
          movie: rowData
        })}
        style={styles.row}
      >
        <Image 
          source={{ uri: 'https://image.tmdb.org/t/p/w500' + rowData.poster_path }} 
          style={styles.image_poster} 
        />
        <Text style={styles.boldLabel}>{rowData.title}</Text>
        <Text style={styles.label}>Rating: {rowData.vote_average}</Text>
      </TouchableOpacity>
    )
  }

  render () {
    console.log("props", this.props)
    const movies = this.state.data;
    return (
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={({item}) => this.renderRow(item)}
          keyExtractor={(item, index) => item.id}
          onRefresh={() => this.renderRefreshControl()}
		      refreshing={this.state.isLoading}
          initialNumToRender={5}
          numColumns={2}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesPopular: () => dispatch(MoviesAction.moviesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen)
