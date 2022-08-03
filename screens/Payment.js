import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Paystack } from 'react-native-paystack-webview';
import {
  Container,
  DefaultButton,
  DefaultButtonContainer,
  DefaultButtonText,
  DefaultInput,
  DefaultInputContainer,
  DefaultInputLabel,
  PaymentForm,
  PaymentHeader,
  PaymentHeaderText,
  PaymentInput,
  SpaceContainer,
  Symbol,
  SymbolContainer,
  SymbolText,
} from '../components/style';
import { Formik } from 'formik';
import SelectDropdown from 'react-native-select-dropdown';

import { Colors } from '../components/colors';

import { data, savingsData } from '../components/data';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../slices/navSlice';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const { borderDark, semiDark, dark } = Colors;

const Payment = () => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const data = savingsData;

  const baseUrl = 'https://thedivasdudecore.herokuapp.com/v1/payment/savings';

  const headers = {
    headers: {
      'x-access-token': token,
    },
  };

  const navigation = useNavigation();

  return (
    <Container>
      <PaymentHeader>
        <PaymentHeaderText>Payment</PaymentHeaderText>
      </PaymentHeader>
      <Formik
        initialValues={{ amount: '', note: '' }}
        onSubmit={(values) => {
          setVisible(true);
          setAmount(values.amount);
          setNote(values.note);
        }}
      >
        {(props) => (
          <SpaceContainer>
            <PaymentForm>
              <DefaultInputContainer>
                <DefaultInputLabel>Amount</DefaultInputLabel>
                <SymbolContainer>
                  <Symbol>
                    <SymbolText>{'\u20A6'}</SymbolText>
                  </Symbol>
                  <PaymentInput
                    symbol="symbol"
                    placeholder="0.00"
                    keyboardType="numeric"
                    onChangeText={props.handleChange('amount')}
                    value={props.values.amount}
                  />
                </SymbolContainer>
              </DefaultInputContainer>
              <DefaultInputContainer>
                <DefaultInputLabel>Transaction Type</DefaultInputLabel>
                <SelectDropdown
                  buttonStyle={styles.button}
                  buttonTextStyle={styles.text}
                  rowStyle={styles.dropdown}
                  rowTextStyle={styles.text}
                  data={data}
                  onSelect={(selectedItem, index) => {
                    setType(selectedItem);
                    console.log(selectedItem, index);
                  }}
                />
              </DefaultInputContainer>
              {type === 'Savings' && (
                <DefaultInputContainer>
                  <DefaultInputLabel>Add Note</DefaultInputLabel>
                  <DefaultInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Add note"
                    onChangeText={props.handleChange('note')}
                    value={props.values.note}
                  />
                </DefaultInputContainer>
              )}
            </PaymentForm>
            <DefaultButtonContainer m="0 20px">
              <DefaultButton
                background="background"
                onPress={props.handleSubmit}
              >
                <DefaultButtonText>Make Payment</DefaultButtonText>
              </DefaultButton>
            </DefaultButtonContainer>
          </SpaceContainer>
        )}
      </Formik>
      {visible && (
        <View>
          <Paystack
            paystackKey="pk_test_6494834a03ea879ad5e6ff53f3bc6dcc084cc1db"
            amount={amount}
            billingEmail={user.user.email}
            activityIndicatorColor="green"
            onCancel={(e) => {
              // handle response here
              console.log(e);
            }}
            onSuccess={(res) => {
              // handle response here
              axios
                .post(
                  baseUrl,
                  {
                    amount,
                    reference: res.transactionRef.reference,
                    status: res.status,
                    note,
                    type,
                  },
                  headers,
                )
                .then((transaction) => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Payment' }, { name: 'Dashboard' }],
                  });
                  console.log(transaction);
                });
              // console.log(res);
            }}
            autoStart={visible}
          />
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: semiDark,
    width: '100%',
    borderColor: borderDark,
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins',
    textAlign: 'left',
    color: dark,
  },
  dropdown: {
    fontFamily: 'Poppins',
    backgroundColor: semiDark,
    fontSize: 10,
    textAlign: 'left',
  },
  dropdownText: {
    fontFamily: 'Poppins',
    backgroundColor: semiDark,
    fontSize: 10,
    textAlign: 'left',
  },
});

export default Payment;
