import { useContext } from 'react';
import { MyContext } from './MyContext';
import { AllContext } from './MyContext';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Main } from '../Components/Main';

const AppUI = props => {
    const { s } = useContext(AllContext);

    const theme = s?.theme || 'dark';
    const major = theme === 'dark' ? '#000' : '#fff';
    const minor = theme === 'dark' ? '#fff' : '#000';
    const styleData = {
        container: {
            flex: 1,
            color: minor,
            padding: 10,
            paddingTop: 40,
        }
    };
    const styles = StyleSheet.create(styleData);

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
                style={styles.container}
            >
                <View style={styles.container}>
                    <Main />
                </View>
            </LinearGradient>
        </>
    );
}

const App = props => {
    return (
        <MyContext>
            <AppUI />
        </MyContext>
    );
}

export { App };