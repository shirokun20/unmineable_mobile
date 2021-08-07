import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '@Redux/YourRedux'
import { ActivityIndicator, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Styles
import styles from "../Styles/StarterScreens/SplashScreenStyle";
import { apply } from "@Themes/OsmiProvider";
import HeaderLogo from "@Components/Logo/HeaderLogo";
import Version from "@Components/Text/Version";

const SplashScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={apply("gray-800")} />
      <HeaderLogo />
      <ActivityIndicator
        size={"large"}
        style={apply("p-0 m-0 h/25 justify-end mt-40")}
        color={apply("green-400")}
      />
      <Version />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
