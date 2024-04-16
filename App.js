import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import About from './screen/About';
import Course from './screen/Course';
import Contact from './screen/Contact';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
            headerTitleStyle:{
              fontsize:25,
            },
            headerTitle:"Home",
            headerTitleAlign:"center",
          }} />
        
        <Stack.Screen name="About" component={About}
        options={{
          headerTitleStyle:{
            fontsize:25,
          },
          headerTitle:"About",
          headerTitleAlign:"center",
        }}
        />
        <Stack.Screen name="Course" component={Course} 
          options={{
            headerTitleStyle:{
              fontsize:25,
            },
            headerTitle:"Course",
            headerTitleAlign:"center",
          }}/>
        <Stack.Screen name="Contact" component={Contact} 
          options={{
            headerTitleStyle:{
              fontsize:25,
            },
            headerTitle:"Contact",
            headerTitleAlign:"center",
          }}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
