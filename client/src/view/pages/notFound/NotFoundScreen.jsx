import React from 'react';
import { Result, Button } from 'antd';

const NotFoundScreen = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, la página que buscas no existe."
      extra={
        <Button type="primary" href="/">
          Regresar al Inicio
        </Button>
      }
    />
  );
};

export default NotFoundScreen;


  