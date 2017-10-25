import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Button } from 'native-base';
import SideBar from '../SideBar';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

export default DrawerNavigator(
    {
        Login: {
            screen: Login,
        },
        Register: {
            screen: Register,
        },
        navigationOptions: {
            screen: () => <Button title='test' />
        }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
	
