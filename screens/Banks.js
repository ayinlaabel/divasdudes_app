import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListItem, ListItemText } from '../components/style';

const Banks = () => {
  const bankUrl = 'https://nigerianbanks.xyz';
  const [banks, setBanks] = useState([]);
  useEffect(() => {
    axios.get(bankUrl).then((banks) => {
      console.log(banks.data);
      setBanks(banks.data);
    });

    return () => {
      console.log('use effect rendered!');
    };
  }, []);
  return (
    <FlatList
      data={banks}
      keyExtractor={(item) => item.code}
      renderItem={({ item }) => (
        <ListItem
          onPress={() => {
            console.log(item);
          }}
        >
          <ListItemText>{item.name}</ListItemText>
        </ListItem>
      )}
    />
  );
};

export default Banks;
