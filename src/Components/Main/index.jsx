import { useContext } from 'react';
// styles, p, button, span
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { AllContext } from '../../App/MyContext';
import { sun as sunIcon } from '../../App/Icons';
import { moon as moonIcon } from '../../App/Icons';

const Main = props => {
    const { s, f } = useContext(AllContext);

    const theme = s?.theme || 'dark';

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
        }
    }

    const style = StyleSheet.create(styleData);

    return (
        <View
            style={style.div}
            >
            <Text
                style={{...style.text, fontSize: 20}}
                >
                Thema Actual: {(theme || 'dark') == 'dark' ? 
                    <SvgXml
                        xml={moonIcon()}
                        width="20"
                        height="20"
                        /> : 
                    <SvgXml
                        xml={sunIcon()}
                        width="20"
                        height="20"
                        />
                }
            </Text>

            <Pressable
                style={style.button}
                onPress={() => f.upgradeLvl0('theme', theme === 'dark' ? 'light' : 'dark')}
            >
                <Text
                    style={style.text}
                    >
                    Cambiar Tema
                </Text>
            </Pressable>

        </View>
    );
}

export { Main }