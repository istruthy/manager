import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login' initial />
        </Scene>
        <Scene key='main'>
          <Scene
            key='employeeList'
            rightTitle='add'
            onRight={() => {
              console.log('right');
            }}
            component={EmployeeList}
            title='Employees'
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
