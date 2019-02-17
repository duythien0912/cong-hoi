// tslint:disable-next-line:no-implicit-dependencies
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface IStyle {
  btnBtnpriClass: ViewStyle;
  btnClass: ViewStyle;
  BText: TextStyle;
  BtextPri: TextStyle;
}

export const ButtonStyle = StyleSheet.create<IStyle>({
  // .btn.btnpri
  btnBtnpriClass: {
    borderWidth: 1,
    borderColor: "#555",
    borderStyle: "solid",
    backgroundColor: "#555"
  },
  // .btn
  btnClass: {
    margin: 6,
    maxWidth: 140,
    position: "relative",
    borderRadius: 2,
    paddingLeft: 20,
    paddingRight: 20,
    height: 36,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    backgroundColor: "#fff"
  },
  // .BText
  BText: {
    lineHeight: 36,
    fontSize: 11,
    textDecorationStyle: "solid",
    letterSpacing: 0,
    textAlign: "center",
    textTransform: "uppercase",
    // fontFamily:
    //   "'Lato',Arial ,'Nanum Gothic','Noto Sans KR',Dotum ,\"Helvetica Neue\",Helvetica,AppleGothic,sans-serif",
    fontWeight: "normal",
    color: "#555"
  },
  // .BtextPri
  BtextPri: {
    color: "#fff"
  }
});
