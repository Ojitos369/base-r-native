import { useContext, useEffect } from 'react';
import { MyContext } from './MyContext';
import { AllContext } from './MyContext';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Main } from '../Components/Main';
import { BaseModal } from '../Components/Modals/BaseModal';

const AppUI = props => {
    const { s, f } = useContext(AllContext);

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
            {!!s.modals?.exampleBase?.example && <BaseModal />}
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