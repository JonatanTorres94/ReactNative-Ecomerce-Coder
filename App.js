import React from "react";
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { View } from "react-native";
import Header from "./src/components/Header";
import { Categories } from "./src/components/Categories";
import Search from "./src/components/Search";
import Products from "./src/screens/Products";

export default function App() {
  return (
    <>

      {/* <HomeScreen /> */}
      {/* <Search /> */}
       <Products category='laptops' /> 
    </>

  );
}


