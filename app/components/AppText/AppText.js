import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../../config/defaultStyles';

const AppText = ({ children, styles }) => {
  return <Text style={[defaultStyles.text, styles]}>{children}</Text>;
};

export default AppText;
