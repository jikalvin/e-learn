import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

export default function PicSelect() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
useEffect(() => {
    (async () => {
const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
})();
  }, []);
const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
console.log(result);
if (!result.cancelled) {
      setImage(result.uri);
    }
  };
if (hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ justifyContent:'center', width: "100%", alignItems:"center"}}>
          {/* <Button title="Pick Image From Gallery" onPress={() => pickImage()} /> */}
          <AntDesign name="camera" size={50} color="black" onPress={() => pickImage()} />
          {/* {image && <Image source={{uri: image}} style={{flex:1/2}}/>} */}
    </View>
  );
}