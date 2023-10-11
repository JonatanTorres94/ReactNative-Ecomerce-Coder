import React from "react";
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { SafeAreaView, View } from "react-native";
import Header from "./src/components/Header";
import { Categories } from "./src/components/Categories";
import Search from "./src/components/Search";
import Products from "./src/screens/Products";
import { NavigationContainer } from "@react-navigation/native";
import { loadAsync, useFonts } from "expo-font";
import { ProductDetail } from "./src/screens/ProductDetail";
import { StackNavigation } from "./navigation/StackNavigation";
import LoadingComponent from "./src/components/LoadingComponent";
import { BottomTabsNavigation } from "./navigation/BottomTabsNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";
import { LoginNavigation } from "./navigation/LoginNavigation";
import { MainNav } from "./navigation/MainNav";

export default function App() {

  const [fontsLoaded] = useFonts({
    'Chakra': require('./assets/fonts/ChakraPetch-Light.ttf'),
  });


  if (!fontsLoaded) {
    return <LoadingComponent />;
  }

  return (
    <Provider store={store}>
     
        {/* <StackNavigation /> */}
        {/* <BottomTabsNavigation /> */}
        <MainNav/>
      
    </Provider>
  );
}


