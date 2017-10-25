import React from 'react'
//import { View, Text } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native';
import { Container } from 'native-base';
import { StyleSheet } from 'react-native';
import Login from '../../pages/Login';
import Register from '../../pages/Register';  

const App = () => (
    <NativeRouter>
        <Container>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Container>
    </NativeRouter>
);

export default App;