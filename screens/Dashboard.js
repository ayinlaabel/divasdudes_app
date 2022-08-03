import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  BalanceContainer,
  Container,
  DashboardBalance,
  DashboardHero,
  DashboardHeroCard,
  DashboardHeroText,
  DashboardTranctionContainer,
  DashbordBackgroundImage,
  EmptyContainer,
  EmptyText,
  Overlay,
  TransactionContainer,
  TransactionHeader,
  TransactionIcon,
  TransactionItem,
  TransactionItemContainer,
  TransactionListContainer,
  TransactionListItemContainer,
  TransactionStatus,
} from '../components/style';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectToken, setWallet } from '../slices/navSlice';
import axios from 'axios';

const Dashboard = () => {
  const baseUrl = 'https://thedivasdudecore.herokuapp.com/v1/wallet';

  const dispatch = useDispatch();

  const [balance, setBalance] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const token = useSelector(selectToken);

  const headers = {
    headers: {
      'x-access-token': token,
    },
  };
  useEffect(() => {
    axios.get(baseUrl, headers).then((wallet) => {
      dispatch(setWallet(wallet.data));
      setBalance(wallet.data.balance.toFixed(2));
    });
  });
  useEffect(() => {
    axios.get(baseUrl + '/allTransactions', headers).then((transactions) => {
      setTransaction(transactions.data);
      console.log(transactions.data);
    });
  }, []);
  console.log(transaction);
  return (
    <SafeAreaView>
      <Container>
        <DashboardHero>
          <DashboardHeroCard>
            <DashbordBackgroundImage
              source={require('../images/card_background_2.jpg')}
              resizeMode="cover"
            />
            <BalanceContainer>
              <DashboardHeroText>Account Balance</DashboardHeroText>
              <DashboardBalance>{'\u20A6' + balance}</DashboardBalance>
            </BalanceContainer>
            <Overlay />
          </DashboardHeroCard>
        </DashboardHero>
        <DashboardTranctionContainer>
          <TransactionHeader>History</TransactionHeader>
          {transaction.length < 1 ? (
            <EmptyContainer>
              <EmptyText>No Transaction</EmptyText>
            </EmptyContainer>
          ) : (
            <TransactionContainer>
              <FlatList
                keyExtractor={(item) => item._id}
                data={transaction}
                renderItem={({ item }) => (
                  <TransactionListContainer>
                    <TransactionListItemContainer>
                      <TransactionIcon></TransactionIcon>
                      <TransactionItemContainer>
                        <TransactionItem>
                          {item.transactionType}
                        </TransactionItem>
                        <TransactionStatus>
                          {item.description}
                        </TransactionStatus>
                      </TransactionItemContainer>
                    </TransactionListItemContainer>
                    <TransactionStatus status={item.status}>
                      {item.status}
                    </TransactionStatus>
                  </TransactionListContainer>
                )}
              />
            </TransactionContainer>
          )}
        </DashboardTranctionContainer>
      </Container>
    </SafeAreaView>
  );
};

export default Dashboard;
