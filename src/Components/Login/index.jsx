import { useContext } from 'react';
// styles, p, button, span
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

import { AllContext } from '../../App/MyContext';
import { sun as sunIcon } from '../../App/Icons';
import { moon as moonIcon } from '../../App/Icons';

const Login = props => {
    const { s, f } = useContext(AllContext);
    const { navigation } = props;

    const theme = s?.theme || 'dark';
    const major = s.colors?.major || '#000';
    const minor = s.colors?.minor || '#fff';

    const styleData = {
        // bottom
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            color: minor
        },
        text: {
            color: theme === 'dark' ? '#fff' : '#000',
        },
        button: {
            height: 40,
            width: 200,
            backgroundColor: "#009",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            marginTop: 20,
        },
        div: {
            width: '100%',
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "50%",
        },
        inputContainer: {
            width: '80%',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
        },
        inputLabel: {
            color: minor,
            fontSize: 20,
            width: '100%',
            textAlign: 'left',
        },
        inputField: {
            width: '100%',
            height: 40,
            borderColor: minor,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginTop: 2,
            color: minor,
        },
    }

    const style = StyleSheet.create(styleData);

    return (
        <>
            <StatusBar 
                    style={theme === 'dark' ? 'light' : 'dark'}
                />
            <LinearGradient
                    colors={[major, minor]}
                    locations={[0.6, 1]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={style.container}
                >
                <View
                    style={{...style.div}}
                    >
                    <View
                        style={{...style.inputContainer}}
                        >
                        <Text
                            style={style.inputLabel}
                            >
                            Username
                        </Text>
                        {/* text type */}
                        <TextInput
                            style={style.inputField}
                            placeholder='Username'
                            placeholderTextColor={minor}
                            />
                    </View>
                    <View
                        style={{...style.inputContainer}}
                        >
                        <Text
                            style={style.inputLabel}
                            >
                            Password
                        </Text>
                        <TextInput
                            style={style.inputField}
                            placeholder='Password'
                            placeholderTextColor={minor}
                            secureTextEntry={true}
                            />
                    </View>

                </View>
            </LinearGradient>
        </>
    );
}

export { Login }