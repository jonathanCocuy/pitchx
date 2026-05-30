import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Register() {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')


    return (
        <View style={styles.mainContainer}>
            <Text>Title</Text>
            <TextInput 
                style={styles.inputEmail}
                value={email}
                onChangeText={setEmail}
                placeholder='Email'
            />
            <Text>Finished</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputEmail: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 13,
        color: 'white',
        fontFamily: 'Inter-Regular',
        fontSize: 20,
        width: '90%',
        padding: 12
    }


})