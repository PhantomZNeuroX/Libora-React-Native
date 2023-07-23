import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "MontserratMD": require("../assets/fonts/MontserratMD.ttf"),
    });
};