import { useCallback } from 'react'
import { connect } from 'react-redux'
import { StatusBar, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '@Images'

// Components
import Button from '@Components/Button/Base'

// Styles
import styles from './Styles/LaunchScreenStyle'
import { apply } from '@Themes/OsmiProvider'

const LaunchScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={apply('gray-900')} />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
