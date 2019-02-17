import * as React from "react";
import {
  ActivityIndicator,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  TouchableOpacity
} from "react-native";
import { ButtonStyle } from "./ButtonStyle";

interface IButtonProps {
  title?: string;
  primary?: boolean;
  loading?: boolean;
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const Button: React.SFC<IButtonProps> = ({
  title = "Submit",
  primary = false,
  loading = false,
  onPress = () => null,
  ...otherProps
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[ButtonStyle.btnClass, primary ? ButtonStyle.btnBtnpriClass : null]}
    {...otherProps}
  >
    <Text
      style={[
        ButtonStyle.BText,
        primary ? ButtonStyle.BtextPri : null,
        loading ? { lineHeight: 45 } : null
      ]}
    >
      {loading ? (
        <ActivityIndicator color={primary ? "#fff" : "#555"} />
      ) : (
        title
      )}
    </Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  title: "Submit",
  primary: false,
  loading: false,
  onPress: () => null
};
