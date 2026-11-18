import { View, Text, StyleSheet } from 'react-native';

export default function SecondScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                This is the Second Screen!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        gap: 15,
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
