import { StyleSheet, Text, View } from 'react-native';

export default function DigitalHealthCoach() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Digital Health Coach Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
