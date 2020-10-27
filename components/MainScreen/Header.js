import React  from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';

export default function Header({term, setTerm}) {
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setTerm}
                value={term}
                placeholder="Type something..."
                placeholderTextColor="#C38D9E"/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        paddingTop: Platform.OS === 'ios' ? 80 : 0,
        backgroundColor: '#C38D9E',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    input : {
        width: '70%',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: Platform.OS === 'ios' ? 15 : 10,
        color: '#C38D9E'
    }
})
