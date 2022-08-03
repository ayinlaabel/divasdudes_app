import { View, Text, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DefaultButton,
  DefaultButtonContainer,
  DefaultButtonText,
  DefaultInput,
  DefaultInputContainer,
  DefaultInputLabel,
  Form,
  InputContainer,
  InputSpan,
  ScreenDivideTwo,
  ScreenOne,
  ScreenTwo,
  TextT,
} from '../components/style';
import { Colors } from '../components/colors';
import { useFonts } from 'expo-font';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectUser, setToken, setUser } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const { brand } = Colors;
let myEmail = ' 123';
AsyncStorage.getItem('userEmail').then((user) => {
  myEmail = JSON.parse(user);
  // setUserEmail(user);
  // // console.log(user);
});

const Login = () => {
  const [userEmail, setUserEmail] = useState(null);
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // useEffect(() => {}, []);

  // let myEmail = JSON.parse(userEmail);
  console.log(myEmail);

  return (
    <View>
      <StatusBar backgroundColor={brand} />
      <ScreenDivideTwo>
        <ScreenOne></ScreenOne>
        <ScreenTwo>
          <TextT>Login</TextT>
          <Formik
            initialValues={{ email: myEmail, password: '' }}
            onSubmit={(values) => {
              // if (values.email === '') {
              //   values.email = myEmail;
              // }

              axios
                .post(
                  'https://thedivasdudecore.herokuapp.com/v1/users/login',
                  values,
                )
                .then(async (user) => {
                  if (user.data.status === 'FAILED') {
                    console.log(user.data);
                    navigation.navigate('Alert')
                  } else {
                    AsyncStorage.setItem(
                      'userEmail',
                      JSON.stringify(user.data.user.email),
                    );
                    dispatch(setUser(user.data.user));

                    dispatch(setToken(user.data.token));
                    navigation.navigate('Home');
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
              // console.log(values);
            }}
          >
            {(props) => (
              <Form>
                <DefaultInputContainer>
                  <DefaultInputLabel>Email</DefaultInputLabel>
                  <DefaultInput
                    placeholder={'Email' + props.values.email}
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                  />
                </DefaultInputContainer>
                <DefaultInputContainer>
                  <DefaultInputLabel>Password</DefaultInputLabel>
                  <InputContainer>
                    <DefaultInput
                      placeholder="* * * * * * *"
                      secureTextEntry={true}
                      onChangeText={props.handleChange('password')}
                      value={props.values.password}
                    />
                  </InputContainer>
                </DefaultInputContainer>
                <DefaultButtonContainer>
                  <DefaultButton
                    onPress={props.handleSubmit}
                    background="background"
                  >
                    <DefaultButtonText>Login</DefaultButtonText>
                  </DefaultButton>
                </DefaultButtonContainer>
              </Form>
            )}
          </Formik>
        </ScreenTwo>
      </ScreenDivideTwo>
    </View>
  );
};

export default Login;
