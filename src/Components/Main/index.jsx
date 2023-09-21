import { useContext } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { AllContext } from '../../App/MyContext';

const Main = props => {
    const { s, f } = useContext(AllContext);

    const theme = s?.theme || 'dark';

    const styleData = {
        text: {
            color: theme === 'dark' ? '#fff' : '#000',
        }
    }

    const style = StyleSheet.create(styleData);

    return (
        <>
            <Text
                style={style.text}
                >
                Thema Actual: {theme || 'dark'}
            </Text>

            <Button
                title="Cambiar Tema"
                onPress={() => f.upgradeLvl0('theme', theme === 'dark' ? 'light' : 'dark')}
            />
        </>
    );
}

export { Main }