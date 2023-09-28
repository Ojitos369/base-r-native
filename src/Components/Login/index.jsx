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
            width: '80%',
            backgroundColor: "#009",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            marginTop: 60,
        },
        div: {
            width: '100%',
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "30%",
        },
        inputContainer: {
            width: '80%',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
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
                    locations={[1, 1]}
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
                            style={{...style.text, fontSize: 40, fontWeight: 'bold', width: '100%', textAlign: 'center'}}
                            >
                            Login
                        </Text>
                    </View>
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
                            value={s.forms?.login?.username || ''}
                            onChangeText={text => f.upgradeLvl2('forms', 'login', 'username', text )}
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
                            value={s.forms?.login?.password || ''}
                            onChangeText={text => f.upgradeLvl2('forms', 'login', 'password', text )}
                            />
                    </View>
                    <Pressable
                        style={style.button}
                        onPress={() => f.login.login()}
                        >
                        <Text
                            style={style.text}
                            >
                            Login
                        </Text>
                    </Pressable>

                    <View
                        style={{
                            width: '80%',
                            marginTop: 30,
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                        }}
                        >
                        <Pressable
                            onPress={() => {
                                navigation.navigate('Register');
                            }}
                            >
                            <Text
                                style={{
                                    color: minor, 
                                    fontSize: 20, 
                                    fontWeight: 'bold', 
                                    width: '100%',
                                }}
                                >
                                Register
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </>
    );
}

export { Login }