import { View, Text } from 'react-native';
import React, { useState } from 'react';
import {
  Container,
  Container1,
  Container2,
  EditButton,
  EditText,
  ProfileBodyContainer,
  ProfileContainer,
  ProfileHeaderContainer,
  ProfileImage,
  ProfileInput,
  ProfileLabel,
  ProfilePictureContainer,
  ProfileText,
} from '../components/style';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/navSlice';
import { Formik } from 'formik';

const Profile = () => {
  const [editable, setEditable] = useState(false);
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Container>
      <ProfileHeaderContainer>
        <EditButton
          onPress={() => {
            setEditable(!editable);
          }}
        >
          {editable ? <EditText>Save</EditText> : <EditText>Edit</EditText>}
        </EditButton>
        <ProfilePictureContainer>
          <ProfileImage source={require('../images/avatar.jpg')} />
        </ProfilePictureContainer>
      </ProfileHeaderContainer>
      <ProfileBodyContainer>
        {editable ? (
          <Formik
            initialValues={{
              firstName: user.firstName,
              lastName: user.lastName,
            }}
            onSubmit={(values) => {}}
          >
            {(props) => (
              <>
                <ProfileContainer>
                  <Container2>
                    <ProfileInput
                      onChangeText={props.handleChange('firstName')}
                      value={props.values.firstName}
                    />
                    <ProfileLabel>First Name</ProfileLabel>
                  </Container2>
                  <Container2>
                    <ProfileInput
                      onChangeText={props.handleChange('lastName')}
                      value={props.values.lastName}
                    />
                    <ProfileLabel>Last Name</ProfileLabel>
                  </Container2>
                </ProfileContainer>
                <ProfileContainer>
                  <Container1>
                    <ProfileInput
                      onChangeText={props.handleChange('firstName')}
                      value={props.values.firstName}
                    />
                    <ProfileLabel>Email</ProfileLabel>
                  </Container1>
                </ProfileContainer>
              </>
            )}
          </Formik>
        ) : (
          <>
            <ProfileContainer>
              <Container1>
                <ProfileText>
                  {user.firstName + ' ' + user.lastName}
                </ProfileText>
                <ProfileLabel>Name</ProfileLabel>
              </Container1>
            </ProfileContainer>
            <ProfileContainer>
              <Container1>
                <ProfileText>{user.email}</ProfileText>
                <ProfileLabel>email</ProfileLabel>
              </Container1>
            </ProfileContainer>
            <ProfileContainer>
              <Container1>
                <ProfileText></ProfileText>
                <ProfileLabel>phone</ProfileLabel>
              </Container1>
            </ProfileContainer>
            <ProfileContainer>
              <Container1>
                <ProfileText></ProfileText>
                <ProfileLabel>BVN</ProfileLabel>
              </Container1>
            </ProfileContainer>
            <ProfileContainer>
              <Container1>
                <ProfileText></ProfileText>
                <ProfileLabel>NIN</ProfileLabel>
              </Container1>
            </ProfileContainer>
            <ProfileContainer>
              <Container1>
                <ProfileText>{user.email}</ProfileText>
                <ProfileLabel>email</ProfileLabel>
              </Container1>
            </ProfileContainer>
          </>
        )}
      </ProfileBodyContainer>
    </Container>
  );
};

export default Profile;
