import { useContext } from 'react';
// styles, p, button, span
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

import { AllContext } from '../../App/MyContext';
import { sun as sunIcon } from '../../App/Icons';
import { moon as moonIcon } from '../../App/Icons';

const Register = props => {
    const { s, f } = useContext(AllContext);
    const { navigation } = props;

    const theme = s?.theme || 'dark';
    const major = s.colors?.major || '#000';
    const minor = s.colors?.minor || '#fff';

    const styleData = {
        // bottom
        div: {
            width: '100%',
            justifyContent: "center",
            alignItems: "center",
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: 20,
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
        container: {
            flex: 1,
            color: minor,
        },
        inputContainer: {
            width: '100%',
            justifyContent: "center",
            alignItems: "center",
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: 20,
        },
        inputLabel: {
            color: theme === 'dark' ? '#fff' : '#000',
            fontSize: 20,
        },
        inputField: {
            width: '100%',
            height: 40,
            borderColor: theme === 'dark' ? '#fff' : '#000',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            color: theme === 'dark' ? '#fff' : '#000',
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
                    style={style.div}
                    >
                    {/*  */}
                    <View
                        style={style.inputContainer}
                        >
                        <Text
                            style={style.inputLabel}
                            >
                            Username
                        </Text>
                        <TextInput
                            style={style.inputField}
                            />
                    </View>
                </View>
            </LinearGradient>
        </>
    );
}

export { Register }