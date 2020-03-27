import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DetailMovieScreenStyle'

class DetailMovieScreen extends Component {
  render () {
    const { movie } = this.props.navigation.state.params;
    console.log(movie);
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.container}>
            <View style={styles.topView}>
              <Image 
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path }} 
                style={styles.image_poster} 
              />
              <View style={styles.movieDetail}>
                <Text>Title:</Text>
                <Text style={styles.fontBold}>{movie.title}</Text>
                <Text />
                <Text>Releass:</Text>
                <Text style={styles.fontBold}>{movie.release_date}</Text>
                <Text />
                <Text>Rating</Text>
                <Text style={styles.fontBold}>{movie.vote_average}</Text>
              </View>
            </View>
            <View style={styles.bottomView}>
              <Text style={styles.attrBold}>Overview:</Text>
              <Text>{movie.overview}</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovieScreen)
