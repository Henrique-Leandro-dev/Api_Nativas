import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Camera } from 'expo-camera';

const ImagemCamera = () => {
    const [hasPermission, setHasPermission] = useState(null);
    // Definição do lado da camera  
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [imagemUri, setImagemUri] = useState(null);
  
    // Pede a permissão do nosso usuário para utilizar a camera
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    const tirarFoto = async () => {
        if(camera){
            let foto = await camera.takePictureAsync();
            alert('foto tirada');
            setImagemUri(foto.uri);
            console.log(foto);
        }
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera 
        style={{ flex: 1 }} 
        type={type}
        ref = {ref => {
            camera = ref;
        }}
        >

          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>

        {imagemUri && <Image source={{uri : imagemUri}} style={{height : 300}}/>}
        <Button title="Tirar Foto" onPress={() => tirarFoto()} />
      </View>
    );
}

export default ImagemCamera;