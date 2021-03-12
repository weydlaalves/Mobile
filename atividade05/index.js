import { AppRegistry, Platform } from "react-native";
import { registerRootComponent } from "expo";
import App from "./App";
import { name as appName } from "./app.json";

  registerRootComponent(App);
  AppRegistry.registerComponent(appName, () => App);
