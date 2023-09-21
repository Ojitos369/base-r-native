import { useContext } from 'react';
import { Text } from 'react-native';
import { AllContext } from '../../App/MyContext';

const MyBase = props => {
    const { s, f } = useContext(AllContext);
    return (
        <Text>
            MyBase
        </Text>
    );
}

export { MyBase }