import { useEffect, useContext } from 'react';
import { AllContext } from '../../App/MyContext';

import { StyleSheet, Text, Pressable, View } from 'react-native';

const BaseModal = props => {
    const { s, f } = useContext(AllContext);
    const major = s.colors?.major || '#000';
    const minor = s.colors?.minor || '#fff';

    const styleData = {
        myModal: {
            border: `1px ${minor} solid`,
        },
        modalInfo: {
            backgroundColor: '#0005',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: props.zindex || 1000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            overflowY: 'scroll',
        },
        modalContainer: {
            backgroundColor: major,
            marginTop: '8vh',
            minHeight: '25vh',
            maxHeight: '80vh',
            borderRadius: 15,
            animation: 'fadeIn .4s',
            overflow: 'hidden',
            overflowY: 'scroll',
            position: 'relative',
        },
    }
    const style = StyleSheet.create(styleData);

    const close = e => {
        if (!!e) e.preventDefault();
        f.upgradeLvl2('modals', 'exampleBase', 'example', false);
    }

    return (
        <View
            style={style.modalInfo}
            onClick={close}
            >
            <View 
                style={style.modalContainer}
                onClick={e => e.stopPropagation()}
                >
                <Text
                    style={{color: minor}}
                    >
                    BaseModal
                </Text>
            </View>
        </View>
    )
}

export { BaseModal };