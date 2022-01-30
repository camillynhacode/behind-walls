import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";


const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
    return  (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;