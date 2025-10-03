import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import AboutDeveloper from './Screens/AboutDeveloper';
// Import screens
import LoginScreen from './Screens/LoginScreen';
import PhoneOTPScreen from './Screens/PhoneOTPScreen';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [isOTPVerified, setOTPVerified] = useState(false);  // Track OTP verification


  const number = "+234 7030995761";
  const message = "Hello Yaya";

  const handleWhatsAppPress = () => {
    Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`).catch(err =>
      Alert.alert("Error", "Failed to open WhatsApp")
    );
  };


  useEffect(() => {
    // Listener for email authentication state
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);  // Set the user only after email auth
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {user && isOTPVerified ? (  // Check if both email and OTP are verified
        <AppStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
         <Stack.Screen
        name="Home"
        component={HomeScreen}
       
      />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <AuthStack.Screen options={{ title: 'Sign In' }} name="SignIn">
            {(props) => <LoginScreen {...props} setOTPVerified={setOTPVerified} />}
          </AuthStack.Screen>
          <AuthStack.Screen options={{ title: 'Sign Up' }} name="Register" component={RegisterScreen} />
          <AuthStack.Screen options={{ title: 'About Developer' }} name="Dev" component={AboutDeveloper} />
          <AuthStack.Screen options={{ title: 'Phone OTP' }} name="PhoneOTP">
            {(props) => <PhoneOTPScreen {...props} setOTPVerified={setOTPVerified} />}
          </AuthStack.Screen>
          <AuthStack.Screen
            name="Home"
            options={{
              headerRight: () => (
                <FontAwesome
                  name="whatsapp" // Replace with the desired FontAwesome icon name
                  size={31} // Adjust the size as needed
                  color="green" // Change the color if necessary
                  style={{ marginRight: 15 }} // Add margin for spacing
                  onPress={handleWhatsAppPress}
                  />
              )
              }}
             component={HomeScreen} />
          
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
