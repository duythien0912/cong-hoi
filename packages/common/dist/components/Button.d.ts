import * as React from "react";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
interface IButtonProps {
    title?: string;
    primary?: boolean;
    loading?: boolean;
    onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}
export declare const Button: React.SFC<IButtonProps>;
export {};
