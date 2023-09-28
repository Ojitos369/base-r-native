import { useContext, useEffect } from 'react';
import { MyContext } from './MyContext';
import { AllContext } from './MyContext';
import { StyleSheet, View } from 'react-native';

import { Main } from '../Components/Main';
import { Other } from '../Components/Other';
import { Login } from '../Components/Login';
import { Register } from '../Components/Register';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppUI = props => {
    const { s, f } = useContext(AllContext);

    const logged = s.login?.logged;

    const theme = s?.theme || 'dark';
    const major = s.colors?.major || '#000';
    const minor = s.colors?.minor || '#fff';
    
    const styleData = {
        container: {
            flex: 1,
            color: minor,
        }
    };
    const styles = StyleSheet.create(styleData);

    useEffect(() => {
        const major = theme === 'dark' ? '#000' : '#fff';
        const minor = theme === 'dark' ? '#fff' : '#000';
        f.upgradeLvl1('colors', 'major', major);
        f.upgradeLvl1('colors', 'minor', minor);
    }, [s.theme]);

    useEffect(() => {
        const token = s.login?.token;
        if (token) {
            let tokenPetition = toke;
            // encriptar tokenPetition
            f.upgradeLvl1('login', 'tokenPetition', tokenPetition);
        } else {
            f.upgradeLvl1('login', 'tokenPetition', null);
        }
    }, [s.login?.token]);

    if (!logged) {
        return (
            <>
            <View style={styles.container}>
                <Stack.Navigator>
                    {/* First Login */}
                    <Stack.Screen 
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false
                        }}
                         />
                    <Stack.Screen 
                        name="Register"
                        component={Register}
                        options={{
                            headerShown: false
                        }}
                         />
                </Stack.Navigator>
            </View>
        </>
        )
    } else {
        return (
            <>
                <View style={styles.container}>
                    <Stack.Navigator>
                        {/* without header */}
                        <Stack.Screen 
                            name="Main"
                            component={Main}
                            options={{
                                headerShown: false
                            }}
                            />
                        <Stack.Screen 
                            name="Other"
                            component={Other}
                            options={{
                                headerShown: false
                            }}
                            />
                    </Stack.Navigator>
                </View>
            </>
        );
    }
}

const App = props => {
    return (
        <MyContext>
            <AppUI />
        </MyContext>
    );
}

export { App };