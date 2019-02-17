import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import MapView from "react-native-maps";
import { Animated, Easing, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  displayNone: {
    display: "none"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

interface IAppProps {}

const IApp: React.FunctionComponent<IAppProps> = props => {
  const [IsLoadMap, setIsLoadMap] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadMap(true);
    }, 3000);
  });

  return (
    <>
      {/* <View style={styles.container}> */}
      <LottieView
        // progress={progress}
        loop
        ref={animation => (animation ? animation.play() : null)}
        style={IsLoadMap ? styles.displayNone : {}}
        source={require("../../Animation/location.json")}
      />
      <MapView
        //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps

        style={IsLoadMap ? styles.map : styles.displayNone}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      />
      {/* </View> */}
    </>
  );
};

export default IApp;
