import styled, { css } from 'styled-components';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Colors } from './colors';

import { Icon } from '@rneui/themed';

let ScreenHeight = Dimensions.get('window').height;

const {
  brand,
  defaultColor,
  lightDark,
  dark,
  inactive,
  inactiveSuccess,
  semiDark,
  borderDark,
  warning,
  successBg,
  successBorder,
  successText,
  warningBorder,
} = Colors;

export const Container = styled.View`
  width: 100%;
  display: flex;
`;

export const ScreenDivideTwo = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ScreenOne = styled.View`
  width: 100%;
  height: 50%;
`;

export const ScreenTwo = styled.View`
  width: 100%;
  height: 50%;
`;

export const Form = styled.View`
  padding: 0 20px;
`;

export const TextT = styled.Text`
  font-family: PoppinsBold;
  text-align: center;
  text-transform: uppercase;
  font-size: 26px;
  color: ${brand};
`;

/**
 * This is the Style for Inputs
 * @DefaultInputContainer - This is Conatainer For the Label and Input
 * @DefaultInputLabel - This is The Label for Input
 * @DefaultInput - This is the Input Field
 * @InputContainer - This works with InputSpan
 * @InputSpan - This works with InputContainer
 */
export const DefaultInputContainer = styled.View`
  margin: 10px 0;
`;

export const SpaceContainer = styled.View`
  display: flex;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  max-height: 50px;
  max-width: 100%;
  border-radius: 4px;
`;

export const InputSpan = styled.View`
  margin: 0 2px;
  margin-top: -2px;
  height: 2px;
  background-color: ${brand};
`;

export const DefaultInputLabel = styled.Text`
  font-family: Poppins;
  font-size: 17px;
  margin-bottom: 10px;
`;

export const DefaultInput = styled.TextInput`
  font-family: Poppins;
  font-size: 17px;
  max-width: 100%;
  height: 50px;
  background-color: ${semiDark};
  border: 1px solid ${borderDark};
  border-radius: 4px;
  padding: 10px;
`;

export const SymbolContainer = styled.View`
  max-width: 270px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0px;
`;

export const Symbol = styled.View`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${borderDark};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const SymbolText = styled.Text`
  font-size: 15px;
  color: ${semiDark};
`;

/**
 * This is the Style for Buttons
 *
 */

export const DefaultButtonContainer = styled.View`
  display: flex;
  max-width: 100%;
  ${(props) => (props.m ? `margin: ${props.m};` : ``)}
`;

export const DefaultButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  max-width: 100%;
  border-radius: 4px;
  ${(props) =>
    props.background
      ? `background-color: ${brand}`
      : `background-color: transparent`}
`;

export const DefaultTextButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 4px;
  ${(props) =>
    props.background
      ? `background-color: ${brand}`
      : `background-color: transparent`}
`;

export const DefaultButtonText = styled.Text`
  font-family: Poppins;
  text-align: center;
  font-size: 17px;
  color: ${defaultColor};
`;

export const SignOutButtonText = styled.Text`
  font-family: Poppins;
  text-align: center;
  font-size: 17px;
  font-weight: 900;
  color: ${brand};
`;

/**
 * This is the style for bottom navbar
 */
export const IsNavbar = styled.View`
  // ${(props) => (props.focused ? ` margin-top: -10px;` : ``)};
`;

export const NavbarLabel = styled.Text`
  font-family: Poppins;
  font-size: 9px;
  ${(props) =>
    props.focused
      ? `color: ${brand}; font-family: PoppinsBold; font-size: 12px;`
      : `color: ${inactive}`};
`;

/**
 * This is the style for dashboard
 */

export const DashboardHero = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 30%;
  height: 23%;
  background-color: ${defaultColor};
  padding: 10px 20px;
`;

export const DashboardHeroCard = styled.View`
  margin: 10px;
  border-radius: 10px;
  width: 100%;
  max-height: 100%;
  height: 180px;
  background-color: ${brand};
`;

export const DashbordBackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const DashboardHeroText = styled.Text`
  font-family: Poppins;
  font-size: 14px;
  color: ${defaultColor};
`;

export const BalanceContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  z-index: 333;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Overlay = styled.View`
  width: 100%;
  height: 100%
  border-radius: 10px;
  background-color: ${dark};
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
`;

export const DashboardBalance = styled.Text`
  font-family: Poppins;
  font-size: 50px;
  margin-top: 20px;
  color: ${defaultColor};
`;

export const DashboardTranctionContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 70%;
  margin: 10px 15px;
`;

export const TransactionHeader = styled.Text`
  font-family: Poppins;
  font-size: 14px;
  text-transform: uppercase;
`;

/**
 * This is the empty style for an empty array
 */

export const EmptyContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  max-height: 100%;
`;

export const EmptyText = styled.Text`
  font-family: Poppins;
  font-size: 30px;
  color: rgba(4, 4, 4, 0.09);
`;

/**
 * About or More
 */

export const AboutCardContainer = styled.View`
  display: flex;
  align-items: center;
  margin: 10px 20px;
`;

export const AboutCard = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  height: 70px;
  border-radius: 4px;
  elevation: 1;
  padding: 10px;
`;

export const CardData = styled.View`
  display: flex;
  flex-direction: row;
  justofy-content: center;
  height: 100%;
  width: 100%;
`;

export const CardIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
`;

export const CardText = styled.View`
  display: flex;
  justify-content: center;
`;

export const CardTextTitle = styled.Text`
  font-family: PoppinsSemiBold;
  font-size: 18px;
  margin-bottom: -5px;
  color: ${brand};
`;

export const CardTextSubTitle = styled.Text`
  font-family: PoppinsSemiBold;
  font-size: 10px;
  color: #b0b0b0;
`;

/**
 * Profile Picture
 */

export const ProfileAvatarContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid ${brand};
  margin-right: 10px;
`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 200px;
`;

/**
 *
 */

export const SavingsBoard = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  padding: 20px;
`;

export const SavingsCard = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  padding: 10px;
`;

export const SavingsSubCard = styled.View`
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  padding: 0px 20px;
`;

export const SavingsNext = styled.View`
  width: 90px;
  height: 40px
  background-color: ${successBg};
  border: 1px dashed ${successBorder}
  padding: 5px;
`;

export const SubSavingAmount = styled.Text`
  font-size: 15px;
  font-family: PoppinsSemiBold;
  text-align: center;
  ${(props) => (props.warning ? `color: ${warningBorder}` : ``)}
  ${(props) => (props.success ? `color: ${successText}` : ``)}
`;

export const SavingsLabel = styled.Text`
  font-family: PoppinsSemiBold;
  font-size: 10px;
  margin-bottom: -5px;
  text-align: center;
  ${(props) => (props.warning ? `color: ${warningBorder}` : ``)}
  ${(props) => (props.success ? `color: ${successText}` : ``)}
`;

export const SavingsNotPaid = styled.View`
  width: 90px;
  height: 40px;
  background-color: rgba(247, 178, 74, 0.4);
  border: 1px dashed ${warningBorder};
  padding: 5px;
`;

export const SavingsCardHeader = styled.Text`
  font-size: 18px;
  font-family: Poppins;
  text-align: center;
`;

export const CardAmount = styled.Text`
  font-family: PoppinsSemiBold;
  font-size: 50px;
  text-align: center;
  margin-bottom: -10px;
`;

export const PaymentHeader = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${brand};
`;

export const PaymentHeaderText = styled.Text`
  font-family: PoppinsSemiBold;
  font-size: 18px;
  color: ${defaultColor};
`;

export const PaymentForm = styled.View`
  margin: 10px 20px;
`;

export const PaymentInput = styled.TextInput`
  font-family: Poppins;
  font-size: 17px;
  width: 100%;
  height: 50px;
  background-color: ${semiDark};
  border: 1px solid ${borderDark};
  border-radius: 4px;
  ${(props) =>
    props.symbol
      ? `border-top-left-radius: 0; border-bottom-left-radius: 0;`
      : ``}
  padding: 10px;
`;

/**
 * @TransactionsStyle
 */

export const TransactionContainer = styled.View`
  padding: 10px 20px;
  margin-right: 20px;
`;

export const TransactionListContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
`;

export const TransactionListItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TransactionIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border-radius: 25px;
  border: 1px solid ${borderDark};
  margin-right: 15px;
`;

export const TransactionItemContainer = styled.View``;

export const TransactionStatus = styled.Text`
  font-size: 9px;
  font-family: Poppins;
  color: ${semiDark};
  ${(props) => (props.status == 'success' ? `color:${inactiveSuccess}` : '')}
`;

export const TransactionItem = styled.Text`
  font-family: Poppins;
  font-size: 15px;
`;

/**
 * @Profile
 */

export const ProfileHeaderContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: ${brand};
`;
export const EditButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
`;

export const EditText = styled.Text`
  font-family: PoppinsSemiBold;
  font-size: 17px;
  color: ${defaultColor};
`;

export const ProfileBodyContainer = styled.View`
  margin: 10px 20px;
`;

export const ProfilePictureContainer = styled.View`
  height: 150px;
  width: 150px;
  border-radius: 100px;
`;

export const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
`;

export const Container1 = styled.View`
  width: 100%;
  background-color: ${lightDark};
  padding: 3px 10px;
`;

export const Container2 = styled.View`
  width: 50%;
  margin-right: 4px;
  background-color: ${lightDark};
  padding: 3px 10px;
`;

export const ProfileLabel = styled.Text`
  font-family: Poppins;
  font-size: 10px;
  color: ${semiDark};
`;

export const ProfileText = styled.Text`
  font-family: PoppinsSemiBold;
  font-size: 20px;
  color: ${semiDark};
  margin-bottom: -10px;
  height: 35px;
`;

export const ProfileInput = styled.TextInput`
  border: none;
`;

export const HeightContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.height ? `height: ${props.height}px` : ``)}
`;

export const AccountText = styled.Text`
  font-size: 20px;
  color: ${semiDark};
`;

export const AccountButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  border-radius: 4px;
  background-color: ${semiDark};
`;

export const AccountButtonText = styled.Text`
  font-size: 16px;
  color: ${borderDark};
`;

/**
 * @Alert_Styles Styles
 */

export const AlertContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const AlertMessageContainer = styled.View`
  height: 300px;
  width: 100%;
  background-color: ${defaultColor};
  border-radius: 4px;
`;
