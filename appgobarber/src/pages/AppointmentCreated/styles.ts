import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #f4ede8;
  margin-top: 48px;
`;

const Description = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #999591;
  margin-top: 16px;
`;

const OkButton = styled(RectButton)`
  background: #ff9000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
  padding: 16px 40px;
`;

const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;

export { Container, Title, Description, OkButton, OkButtonText };
