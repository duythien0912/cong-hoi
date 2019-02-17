import React, { useState, useEffect } from "react";
import { Animated } from "react-native";

interface IAppProps {
  style?: any;
}

const FadeInView: React.FunctionComponent<IAppProps> = props => {
  const [fadeAnim, setfadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      // Animate over time
      fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 400 // Make it take a while
      }
    ).start(); // Starts the animation
  });

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export { FadeInView };
