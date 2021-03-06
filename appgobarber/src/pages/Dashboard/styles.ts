import styled from 'styled-components/native';
import { Platform, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { RectButton } from 'react-native-gesture-handler';
import { Provider } from './index';

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  padding: 24px;
  padding-top: ${Platform.OS !== 'android' ? getStatusBarHeight() + 24 : 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  line-height: 28px;
  font-family: 'RobotoSlab-Regular';
`;

const Username = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Medium';
`;

const ProfileButton = styled.TouchableOpacity``;

const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px 16px;
`;

const ProviderContainer = styled(RectButton)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

const ProvidersListTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  line-height: 32px;
  color: #f4ede8;
  margin-bottom: 24px;
`;

const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  line-height: 24px;
  color: #f4ede8;
`;

const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;

export {
  Container,
  Header,
  HeaderTitle,
  Username,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProvidersListTitle,
};
