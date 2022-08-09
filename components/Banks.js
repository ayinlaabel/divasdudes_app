import { View, Text } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Banks = async () => {
  const [search, setSearch] = useState('');
  const baseUrl = 'https://nigerianbanks.xyz';
  const banks = await axios.get(baseUrl);
  console.log(banks);
  const filterBank = () => {
    return banks.filter((bank) =>
      bank.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
  };
  return (
    <View>
      <Text>Banks</Text>
    </View>
  );
};

export default Banks;
