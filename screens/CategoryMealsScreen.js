import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Cateogry Meal Screen</Text>
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
