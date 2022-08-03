import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { AlertContainer, AlertMessageContainer, HeightContainer } from '../style';

const Message = () => {
  const height = Dimensions.get('window').height;
  return (
    <AlertContainer>
        <AlertMessageContainer></AlertMessageContainer>
    </AlertContainer>
  );
};

export default Message;
