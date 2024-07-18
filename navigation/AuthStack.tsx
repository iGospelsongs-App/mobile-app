import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserMethod from "../screens/onboarding/UserMethod";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import VerifyInput from "../screens/auth/verify-email/VerifyInput";
import Checks from "../screens/auth/Checks";
import AccountSuccess from "../screens/auth/AccountSuccess";
import ForgotPassword from "../screens/auth/forgot-pword/ForgotPassword";
import VerifyCode from "../screens/auth/forgot-pword/VerifyCode";
import SetNewPassword from "../screens/auth/forgot-pword/SetNewPassword";
import Onboarding from "../screens/onboarding/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  const checkIfAppOpenedBefore = async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    console.log(appData);
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(false);
    }
  };

  useEffect(() => {
    checkIfAppOpenedBefore();
  }, []);

  if (isAppFirstLaunched !== null)
    return (
      <Stack.Navigator>
        {isAppFirstLaunched && (
          <Stack.Screen
            name="onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
        )}
        <Stack.Screen
          name="auth-select"
          component={UserMethod}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verify-email"
          component={VerifyInput}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="checks"
          component={Checks}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="account-success"
          component={AccountSuccess}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgot-pword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verify-pword-code"
          component={VerifyCode}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="set-new-pword"
          component={SetNewPassword}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
};

export default AuthStack;
