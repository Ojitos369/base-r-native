import { useContext, useEffect } from 'react';
// styles, p, button, span
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

import { AllContext } from '../../App/MyContext';

const Register = props => {
    const { s, f } = useContext(AllContext);
    const { navigation } = props;

    const theme = s?.theme || 'dark';
    const major = s.colors?.major || '#000';
    const minor = s.colors?.minor || '#fff';
    const passwordDone = s.forms?.register?.password === s.forms?.register?.confirmPassword && !!s.forms?.register?.password;
    const validUsername = !!s.forms?.register?.username;
    const validEmail = !!s.forms?.register?.email;

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
            marginTop: 15,
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
            marginTop: 10,
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

    const register = () => {
        if (passwordDone && validUsername && validEmail) {
            f.login.register();
        } else {
            const mData = {
                message: 'Complete los campos requeridos',
                type: 'error',
            }
            f.upgradeLvl2('form', 'register', 'message', mData);
        }
    }

    useEffect(() => {
        // s.form?.register?.message
        f.upgradeLvl1('forms', 'register', null);

    }, []);

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
                            Register
                        </Text>
                    </View>

                    {/* ------------------------  USERNAME   ------------------------ */}
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
                            style={{...style.inputField,
                                borderColor: !validUsername ? 'red' : 'green',
                                borderWidth: !validUsername ? 2 : 1,
                            }}
                            placeholder='Username'
                            placeholderTextColor={minor}
                            value={s.forms?.register?.username || ''}
                            onChangeText={text => f.upgradeLvl2('forms', 'register', 'username', text )}
                            />
                    </View>
                    {/* ------------------------  /USERNAME   ------------------------ */}

                    {/* ------------------------  PASSWORD   ------------------------ */}
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
                            value={s.forms?.register?.password || ''}
                            onChangeText={text => f.upgradeLvl2('forms', 'register', 'password', text )}
                            />
                    </View>
                    {/* ------------------------  /PASSWORD   ------------------------ */}

                    {/* ------------------------  CONFIRMPASSWORD   ------------------------ */}
                    <View
                        style={{...style.inputContainer}}
                        >
                        <Text
                            style={{...style.inputLabel, 
                            }}
                            >
                            Confirm Password
                        </Text>
                        <TextInput
                            style={{...style.inputField, 
                                borderColor: !passwordDone ? 'red' : 'green',
                                borderWidth: !passwordDone ? 2 : 1,

                            }}
                            placeholder='Password'
                            placeholderTextColor={minor}
                            secureTextEntry={true}
                            value={s.forms?.register?.confirmPassword || ''}
                            onChangeText={text => f.upgradeLvl2('forms', 'register', 'confirmPassword', text )}
                            />
                    </View>
                    {/* ------------------------  /CONFIRMPASSWORD   ------------------------ */}

                    {/* ------------------------  EMAIL   ------------------------ */}
                    <View
                        style={{...style.inputContainer}}
                        >
                        <Text
                            style={{...style.inputLabel, 
                            }}
                            >
                            Email
                        </Text>
                        <TextInput
                            style={{...style.inputField,
                                borderColor: !validEmail ? 'red' : 'green',
                                borderWidth: !validEmail ? 2 : 1,
                            }}
                            placeholder='Email'
                            placeholderTextColor={minor}
                            value={s.forms?.register?.email || ''}
                            onChangeText={text => f.upgradeLvl2('forms', 'register', 'email', text )}
                            />
                    </View>
                    {/* ------------------------  /EMAIL   ------------------------ */}

                    {/* ------------------------  PHONE   ------------------------ */}
                    <View
                        style={{...style.inputContainer}}
                        >
                        <Text
                            style={{...style.inputLabel,}}
                            >
                            Phone
                        </Text>
                        <TextInput
                            style={{...style.inputField,}}
                            placeholder='Phone'
                            placeholderTextColor={minor}
                            value={s.forms?.register?.phone || ''}
                            onChangeText={text => f.upgradeLvl2('forms', 'register', 'phone', text )}
                            />
                    </View>
                    {/* ------------------------  /PHONE   ------------------------ */}

                    {/* ------------------------  SUBMIT   ------------------------ */}
                    <Pressable
                        style={style.button}
                        onPress={register}
                        >
                        <Text
                            style={style.text}
                            >
                            Register
                        </Text>
                    </Pressable>
                    {/* ------------------------  /SUBMIT   ------------------------ */}

                    {/* ------------------------  CHANGE   ------------------------ */}
                    <View
                        style={{
                            width: '80%',
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                        }}
                        >
                        <Pressable
                            onPress={() => navigation.navigate('Login')}
                            >
                            <Text
                                style={{
                                    color: minor, 
                                    fontSize: 20, 
                                    fontWeight: 'bold', 
                                    width: '100%',
                                }}
                                >
                                Login
                            </Text>
                        </Pressable>
                    </View>
                    {/* ------------------------  CHANGE   ------------------------ */}

                    {/* ------------------------  MESSAGE   ------------------------ */}
                    {s.form?.register?.message?.message && 
                    <View
                        style={{...style.inputContainer}}
                        >
                        <Text
                            style={{...style.inputLabel, 
                                color: s.form?.register?.message?.type === 'error' ? 'red' : 'green',
                            }}
                            >
                            {s.form?.register?.message?.message}
                        </Text>
                    </View>
                    }
                </View>
            </LinearGradient>
        </>
    );
}

export { Register }