import React from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import * as Speech from 'expo-speech';


const styles = StyleSheet.create({
    container : {
        flex :1,
        marginTop : StatusBar.currentHeight || 0
    }

})

const TextToSpeech = () => {

    const speak = () => {
        Speech.speak("Mais um avanço no desenvolvimento, UHUU!" )    
    }

    return (
        <View style={styles.container}>
          <Button title="Pressione para falar" onPress={() => speak()} />
        </View>
      );
}

export default TextToSpeech;    