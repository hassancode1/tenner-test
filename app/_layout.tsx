import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EmailScreen from "./Emailscreen";
import PasswordScreen from "./Password";
import { useState } from "react";
export default function App() {
  const [step,setStep] = useState(1)
  const handleNext = () => {
    setStep(step + 1)
  }
  return (
    <View style={styles.container}>
  {step === 1 && <EmailScreen handleNext={handleNext} />}
  {step=== 2 && <PasswordScreen />}
      <StatusBar style="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'ffff',
    alignItems:'center',
    justifyContent:'center'
  }
})