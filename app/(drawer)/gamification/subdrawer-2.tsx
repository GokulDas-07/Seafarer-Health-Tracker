import { StyleSheet, Text, View } from 'react-native';

export default function SubDrawer2() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Gamification Subdrawer 2</Text>
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
