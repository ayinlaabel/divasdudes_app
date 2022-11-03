import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Paystack } from 'react-native-paystack-webview';
import {
  BankContainer,
  BankImage,
  BankImageContainer,
  BankInput,
  BankInputContainer,
  BankItem,
  BankText,
  CloseButtonContainer,
  Container,
  DefaultButton,
  DefaultButtonContainer,
  DefaultButtonText,
  DefaultInput,
  DefaultInputContainer,
  DefaultInputLabel,
  DisableInput,
  DisableText,
  Divider,
  FlatListContainer,
  ListContainer,
  ListItem,
  ListItemText,
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
import SelectList from 'react-native-dropdown-select-list';

import { Colors } from '../components/colors';

import { data, savingsData } from '../components/data';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../slices/navSlice';
import axios, { AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';
import Banks from '../components/Banks';
import { Banks as BankScreen } from './Banks';
import { FlatList } from 'react-native';
import { Icon } from '@rneui/base';

const { borderDark, semiDark, dark } = Colors;

const filterBanks = async () => {
  // console.log(search);
  // let filteredbanks = [];
  const bankUrl = 'https://nigerianbanks.xyz';
  const bankLists = await axios.get(bankUrl);
  // .then((banks) => {
  //   console.log(filteredbanks);
  // });
  // console.log(search);
  const banks = bankLists.data;

  // for (let bank in banks) {
  //   if (
  //     banks[bank].name
  //       .toLocaleLowerCase()
  //       .includes(search.toLocaleLowerCase()) &&
  //     search !== ''
  //   ) {
  //     filteredbanks.push(banks[bank]);
  //   } else {
  //     filteredbanks = [];
  //   }
  // }
  // console.log(filteredbanks);
  return banks;
};

const Payment = () => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const [accountName, setAccountName] = useState('');
  const [selected, setSelected] = useState('');
  const [selectedBank, setSelectedBank] = useState({});
  const data = savingsData;

  const baseUrl = 'https://thedivasdudecore.herokuapp.com/v1/';
  const bankUrl = 'https://nigerianbanks.xyz';

  const headers = {
    headers: {
      'x-access-token': token,
    },
  };

  // let banks = [];

  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  const [banks, setBanks] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    axios.get(bankUrl).then((banks) => {
      console.log(banks.data);
      setBanks(banks.data);
    });

    return () => {
      console.log('use effect rendered!');
    };
  }, []);

  const renderItem = ({ item }) => (
    <Container>
      <BankItem
        onPress={() => {
          setIsFocus(!isFocus);
          console.log(item.logo);
          setSelectedBank({
            name: item.name,
            code: item.code,
          });
        }}
      >
        <BankImageContainer>
          <BankImage
            source={{
              uri: item.logo,
            }}
          />
        </BankImageContainer>
        <ListItemText>{item.name}</ListItemText>
      </BankItem>
    </Container>
  );

  // console.log(banks);
  return (
    <Container>
      <PaymentHeader>
        <PaymentHeaderText>Payment</PaymentHeaderText>
      </PaymentHeader>
      <ScrollView>
        <Formik
          initialValues={{
            amount: '',
            note: '',
            accountNumber: '',
            accountBank: '',
          }}
          onSubmit={(values) => {
            console.log(user);
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
                {type === 'Transfer' && (
                  <>
                    <DefaultInputContainer>
                      <DefaultInputLabel>Bank</DefaultInputLabel>
                      <BankInput
                        placeholder={"Reciever's bank"}
                        onPress={() => setIsFocus(!isFocus)}
                      >
                        <BankText>{selectedBank.name}</BankText>
                      </BankInput>
                    </DefaultInputContainer>
                    <DefaultInputContainer>
                      <DefaultInputLabel>Account Number</DefaultInputLabel>
                      <DefaultInput
                        keyboardType="numeric"
                        placeholder="Account Number"
                        onBlur={() => {
                          const accountDetails = {
                            account_number: props.values.accountNumber,
                            account_bank: '044',
                          };
                          axios
                            .post(
                              baseUrl + 'payment/account-verification',
                              accountDetails,
                            )
                            .then((account) => {
                              const data = account.data.data;
                              if (data === null) {
                                setAccountName('');
                              } else {
                                setAccountName(data.account_name);
                              }
                            })
                            .catch((err) => console.log(err));
                          // .then((account) => {
                          //   console.log(account.data);
                          // });
                          // console.log(account);
                        }}
                        onChangeText={props.handleChange('accountNumber')}
                        value={props.values.accountNumber}
                      />
                    </DefaultInputContainer>
                    <DefaultInputContainer>
                      <DefaultInputLabel>Account Name</DefaultInputLabel>
                      <DisableInput>
                        <DisableText>{accountName}</DisableText>
                      </DisableInput>
                    </DefaultInputContainer>
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
                  </>
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
      </ScrollView>
      {isFocus && (
        <BankContainer>
          <CloseButtonContainer
            onPress={() => {
              setIsFocus(!isFocus);
            }}
          >
            <Icon type="font-awesome" name="times" size={20} />
          </CloseButtonContainer>
          <FlatList
            data={banks}
            ItemSeparatorComponent={() => <Divider />}
            keyExtractor={(item) => item.code}
            renderItem={renderItem}
          />
        </BankContainer>
      )}
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
