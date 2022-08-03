import { View, Text } from 'react-native';
import React from 'react';
import {
  CardAmount,
  Container,
  SavingsBoard,
  SavingsCard,
  SavingsCardHeader,
  SavingsLabel,
  SavingsNext,
  SavingsNotPaid,
  SavingsNotPayed,
  SavingsSubCard,
  SubSavingAmount,
} from '../components/style';

const Savings = () => {
  return (
    <Container>
      <SavingsBoard>
        <SavingsCard>
          <SavingsCardHeader>Savings</SavingsCardHeader>
          <CardAmount>{'\u20A6'} 0.00</CardAmount>
          <SavingsSubCard>
            <SavingsNext>
              <SavingsLabel success="success">Next Payment</SavingsLabel>
              <SubSavingAmount success="success">+ 10,000</SubSavingAmount>
            </SavingsNext>
            <SavingsNotPaid>
              <SavingsLabel warning="warning">Not Paid</SavingsLabel>
              <SubSavingAmount warning="warning">- 10,000</SubSavingAmount>
            </SavingsNotPaid>
          </SavingsSubCard>
        </SavingsCard>
      </SavingsBoard>
    </Container>
  );
};

export default Savings;
