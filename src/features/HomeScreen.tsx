import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, useColorScheme} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScreenNames } from '../common/ScreenNames';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const HandlePress: (ScreenName: string) => void = (ScreenName: string) => {
    navigation.navigate(ScreenName);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Text style={styles.header}>{'Welcome to'}</Text>
        <Text style={styles.header}>{'Typescript Demo'}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => HandlePress(ScreenNames.Variables)} style={styles.button} >
            <Text style={styles.buttonText}>{ScreenNames.Variables}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => HandlePress(ScreenNames.Functions)} style={styles.button}>
            <Text style={styles.buttonText}>{ScreenNames.Functions}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => HandlePress(ScreenNames.Objects)} style={styles.button}>
            <Text style={styles.buttonText}>Objects</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => HandlePress(ScreenNames.Objects)} style={styles.button}>
            <Text style={styles.buttonText}>Classes</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    fontSize: 36,
    fontWeight: '700',
    alignSelf: 'center',
    color: '#000',
  },
  subHeader: {
    fontSize: 32,
    fontWeight: '700',
    marginLeft: 24,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: '40%',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 6
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
  }
});
