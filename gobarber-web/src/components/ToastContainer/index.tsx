import React from 'react';
import { FiAlertTriangle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Nao foi possivel fazer login na aplicacao</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>

      <Toast hasDescription={false} type="success">
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>

      <Toast hasDescription type="error">
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Nao foi possivel fazer login na aplicacao</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
