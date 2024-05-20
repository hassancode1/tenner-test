import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

interface Props {
  handleNext: () => void;
}

const EmailScreen = ({ handleNext }: Props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const FaceBookIcon = <Icon name="facebook" size={20} color="#1e6dd5" />;
  const GoogleIcon = <Icon name="google" size={20} />;

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleContinue = () => {
    if (validateEmail(email)) {
      setError('');
      handleNext();
    } else {
      setError('Please enter a valid email address');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.title}>Enter your email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonTitle}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.lineTxt}>OR</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.socialBtn}>
          <Text>{GoogleIcon}</Text>
          <Text style={styles.socialTxt}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Text>{FaceBookIcon}</Text>
          <Text style={styles.socialTxt}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.policy}>
        If you are creating a new account, Terms & Conditions and Privacy Policy
        will apply
      </Text>
    </View>
  );
};

export default EmailScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 40,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  error: {
    color: 'red',
    marginVertical: 5,
    textAlign: 'center',
  },

  title: {
    color: '#000',
    marginVertical: 25,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderStyle: 'solid',
    marginVertical: 10,
    height: 40,
    padding: 10,
  },
  button: {
    backgroundColor: '#FEC107',
    padding: 10,
    borderRadius: 2,
    marginVertical: 10,
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 50,
  },
  buttonTitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  line: {
    borderWidth: 1,
    borderBottomWidth: 1,
    width: width - 210,
    borderColor: '#D4D4D4',
  },
  lineTxt: {
    color: '#000',
    fontWeight: '600',
  },
  socialBtn: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginVertical: 10,
    borderTopLeftRadius: 10,
  },
  socialTxt: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  policy: {
    textAlign: 'center',
    padding: 10,
  },
});
