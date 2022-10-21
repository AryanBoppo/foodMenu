import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MealsCategories'>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
        <Stack.Screen name="MealsOverview" component={MealsOverViewScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})