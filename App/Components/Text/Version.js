import { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { version } from './../../../package.json'
// Styles
import styles from '../Styles/Text/VersionStyle'
import { apply } from '@Themes/OsmiProvider'

const Version = props => {
  return (
    <View style={styles.container}>
      <Text style={apply('text-white mb-2 text/4')}>Version {version}</Text>
    </View>
  )
}

// // Prop type warnings
// Version.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// Version.defaultProps = {
//   someSetting: false
// }

export default memo(Version)
