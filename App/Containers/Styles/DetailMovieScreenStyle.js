import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image_poster: {
    flex: 1,
    width: Metrics.screenWidth / 2 - Metrics.doubleBaseMargin,
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    // backgroundColor: 'green'
  },
  bottomView: {
    flex: 1,
    padding: 15,
    // backgroundColor: 'blue'
  }, 
  movieDetail: {
    flex: 1,
    padding: 15,
    // backgroundColor: 'white'
  },
  fontBold: {
    fontWeight: 'bold'
  },
  attrBold: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 5
  }
})
