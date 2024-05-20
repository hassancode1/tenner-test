import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = () => {
  const myIcon = <Icon name="arrow-left" size={20} color="#000" />;

  return (
    <TouchableOpacity style={styles.header}>
      <Text style={styles.icon}>{myIcon}</Text>
      <Text style={styles.title}>Account and Settings</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 18,
  },
  icon: {
    fontSize: 28,
    marginRight: 10,
  },
});
