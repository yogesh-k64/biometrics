import React, { useEffect } from 'react'
import { PermissionsAndroid, View } from 'react-native'
import WebView from 'react-native-webview'
import { BiometricScan_styles } from './biometricScan_style'

const BiometricScan = () => {

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

useEffect(()=>{
cameraPermission()
micPermission()
},[])
  return (
    // <View style={BiometricScan_styles.container} >
      <WebView
      style={BiometricScan_styles.webView}
      // source={{uri:'http://192.168.1.20:3000'}} 
      source={{uri:'https://webcamtests.com/'}} 
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabled={true}
      geolocationEnabled={true}
      mediaCapturePermissionGrantType="grantIfSameHostElsePrompt"
      />
    // </View>
  )
}

export default BiometricScan

