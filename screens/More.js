import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { about } from '../components/navigation/about';
import {
  AboutCard,
  AboutCardContainer,
  CardData,
  CardIcon,
  CardText,
  CardTextSubTitle,
  CardTextTitle,
  Container,
  DefaultButton,
  DefaultButtonContainer,
  DefaultTextButton,
  ProfileAvatarContainer,
  ProfileImage,
  SignOutButtonText,
} from '../components/style';
import { Icon } from '@rneui/themed';
import { Colors } from '../components/colors';
import { useSelector } from 'react-redux';
import { selectUser, setToken, setUser } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const { brand } = Colors;

const More = () => {
  const navigation = useNavigation();
  const user = useSelector(selectUser);
  const data = about;
  const dispatch = useDispatch();

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AboutCardContainer>
            <AboutCard
              onPress={() =>
                navigation.navigate('Other', item.navigator)
              }
            >
              <CardData>
                <>
                  {item.icon ? (
                    <CardIcon>
                      <Icon type={item.type} name={item.icon} color={brand} />
                    </CardIcon>
                  ) : (
                    <ProfileAvatarContainer>
                      <ProfileImage
                        source={require('../images/avatar.jpg')}
                        resizeMod="cover"
                      />
                    </ProfileAvatarContainer>
                  )}
                </>
                <CardText>
                  <CardTextTitle>
                    {item.title === 'Profile'
                      ? `${user.firstName} ${user.lastName}`
                      : `${item.title}`}
                  </CardTextTitle>
                  <CardTextSubTitle>{item.subTitle}</CardTextSubTitle>
                </CardText>
              </CardData>
            </AboutCard>
          </AboutCardContainer>
        )}
        ListFooterComponent={() => (
          <DefaultButtonContainer>
            <DefaultTextButton
              onPress={() => {
                dispatch(setToken(null));
                dispatch(setUser(null));
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                });
              }}
            >
              <SignOutButtonText>Sign Out</SignOutButtonText>
            </DefaultTextButton>
          </DefaultButtonContainer>
        )}
      />
    </Container>
  );
};

export default More;
