import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 30,
      backgroundColor: Colors.transparent
    },
    button: {
      flex: 1,
    },
    text: {
      padding: 20,
      fontSize: 20,
      textAlign: 'center'
    }
  }
}

export default ApplicationStyles
