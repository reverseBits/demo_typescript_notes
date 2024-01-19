import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, TypedNavigator } from '@react-navigation/native'
import HomeScreen from '../features/HomeScreen'
import Variables from '../features/variables/variables'
import Functions from '../features/functions/functions'
import ObjectsScreen from '../features/objects/Objects'
import { ScreenNames } from '../common/ScreenNames'

const StackNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: ''}} />
      <Stack.Screen name='Variables' component={Variables} options={{ title: ScreenNames.Variables}} />
      <Stack.Screen name='Functions' component={Functions} options={{ title: ScreenNames.Functions}} />
      <Stack.Screen name='Objects' component={ObjectsScreen} options={{ title: ScreenNames.Objects}} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})