import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../themes/colors';
import { setCategory } from '../redux/slice/homeSlice';
import {useDispatch} from 'react-redux'

export const CategoryItem = ({ item, navigation }) => {

  const dispatch = useDispatch();

  const onHandleItem = () =>{
    dispatch(setCategory(item))
    navigation.navigate('Products', { item })
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onHandleItem()}
    >
      <Ionicons name="ios-basket" size={30} color={colors.primary} />
      <View style={{flex:1}}></View>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.primary,
    marginLeft: 10,
  },
});