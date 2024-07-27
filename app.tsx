import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { States } from './src/pages/states';
import { Cities } from './src/pages/cities';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#002277'}, headerTintColor: '#FFF'}}>
          <Stack.Screen name="Estados" component={States} />
          <Stack.Screen name="Cidades" component={Cities} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginVertical: 0
  }
});
