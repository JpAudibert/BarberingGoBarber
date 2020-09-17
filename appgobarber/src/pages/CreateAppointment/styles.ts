import { Platform } from 'react-native';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import { Provider } from './index';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

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

const BackButton = styled.TouchableOpacity``;

const HeaderTile = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  line-height: 28px;
  color: #f4ede8;
  margin-left: 16px;
`;

const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

const ProvidersListContainer = styled.View`
  height: 112px;
`;

const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;
  font-size: 14px;
  line-height: 18px;
  font-family: 'RobotoSlab-Medium';
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
`;

const Calendar = styled.View``;

const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  line-height: 32px;
  color: #f4ede8;
  margin: 0 24px 24px;
`;

const OpenDatePickerButton = styled(RectButton)`
  height: 48px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

const OpenDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 14px;
  color: #232129;
`;

export {
  Container,
  Header,
  BackButton,
  HeaderTile,
  UserAvatar,
  ProvidersListContainer,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
  Calendar,
  Title,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
};
