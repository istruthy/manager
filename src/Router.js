import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

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
              Actions.employeeCreate();
            }}
            component={EmployeeList}
            title='Patients'
            initial
          />
          <Scene key='employeeCreate' component={EmployeeCreate} title='Add Patient' />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
