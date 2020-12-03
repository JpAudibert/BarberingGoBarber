import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${Platform.OS !== 'android' ? getStatusBarHeight() + 24 : 24}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  line-height: 28px;
  color: #f4ede8;
  margin-left: 16px;
`;

export const SignOutButton = styled.TouchableOpacity``;

export const Content = styled.ScrollView`
  margin-top: 32px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin: 32px 0;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  margin-top: 64px;
  align-self: center;
`;
