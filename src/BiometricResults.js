import {  Text, View } from 'react-native'
import React from 'react'
import { BiometricResults_styles } from './biometricResults_style'

const BiometricResults = (props) => {
    const data = props.route.params

    return (
    <View style={BiometricResults_styles.container} >
      <Text style={BiometricResults_styles.text}>{data}</Text>
    </View>
  )
}

export default BiometricResults

