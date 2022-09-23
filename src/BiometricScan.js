import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { PermissionsAndroid } from 'react-native'
import WebView from 'react-native-webview'
import { BiometricScan_styles } from './biometricScan_style'

const BiometricScan = () => {
const navigation = useNavigation()
const [showWeb, setShowWeb] = useState(true)

  const cameraPermission = async () => {

    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Camera Permission",
        message:
          "App needs access to your camera " +
          "so others can see you.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
}

const micPermission = async () => {

let granted = await PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  {
    title: "Audio Permission",
    message:
      "App needs access to your audio / microphone",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK"
  }
);

if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  console.log("You can use the Microphone");
} else {
  console.log("Microphone permission denied");
}  
}

const onMessage=(data)=> {
  console.log(data.nativeEvent.data);
  const status = data.nativeEvent.data
  navigation.navigate('results',status)
}
useFocusEffect(
useCallback(()=>{
cameraPermission()
micPermission()
setShowWeb(true)
return ()=>{
setShowWeb(false)
}
},[])
)
  return (
    <>
      {showWeb && <WebView
      onMessage={onMessage}
      style={BiometricScan_styles.webView}
      // if localhost return error run adb reverse tcp:3000 tcp:3000
      source={{uri:'http://localhost:3000'}} 
      // source={{uri:'https://webcamtests.com/'}} 
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabled={true}
      geolocationEnabled={true}
      mediaCapturePermissionGrantType="grantIfSameHostElsePrompt"
      />}
  </>
  )
}

export default BiometricScan

