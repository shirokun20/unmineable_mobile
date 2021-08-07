import { memo } from "react";
// import PropTypes from 'prop-types'
import { View, Text } from "react-native";

// Styles
import styles from "../Styles/Logo/HeaderLogoStyle";
import { apply } from "@Themes/OsmiProvider";

const HeaderLogo = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBig}>
        <Text style={styles.textSmall}>un</Text>
        Mineable
      </Text>
      <Text style={styles.textWhite} >
        indo<Text style={styles.textRed}>nesia</Text>
      </Text>
    </View>
  );
};

// // Prop type warnings
// HeaderLogo.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// HeaderLogo.defaultProps = {
//   someSetting: false
// }

export default memo(HeaderLogo);
