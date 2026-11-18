import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';



export default function MyAppbar({ navigation, back }: NativeStackHeaderProps) {
    return (
        <Appbar.Header>
            <Appbar.Content title="My app"/>
            {back ? (
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
            ) : (
                <Appbar.Action
                    icon="arrow-right"
                    onPress={() => navigation.navigate('SecondScreen')}
                />
            )}
        </Appbar.Header>
    );
}
