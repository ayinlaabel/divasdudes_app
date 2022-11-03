import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Banks = (data) => {
  //   const [search, setSearch] = useState('');
  //   const baseUrl = 'https://nigerianbanks.xyz';
  //   const banks =  axios.get(baseUrl);
  //   console.log(banks);
  //   const filterBank = () => {
  //     return banks.filter((bank) =>
  //       bank.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  //     );
  //   };
  return (
    <FlatList
      keyExtractor={(item) => item.code}
      data={data}
      renderItem={({ item }) => <></>}
    />
  );
};

export default Banks;
