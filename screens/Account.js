import { View, Text, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { AccountButton, AccountButtonText, AccountText, Container, HeightContainer } from '../components/style';

const Account = () => {
  const [account, setAccount] = useState([]);
  const height = Dimensions.get('window').height;
  console.log(height);
  return (
    <Container>
      {account.lenght < 1 ? (
        <Text>Account Good</Text>
      ) : (
        <HeightContainer height={height}>
          <AccountText>No account linked yet!</AccountText>
          <AccountButton>
            <AccountButtonText>Link Account</AccountButtonText>
          </AccountButton>
        </HeightContainer>
      )}
      <Text>Account</Text>
    </Container>
  );
};

export default Account;
