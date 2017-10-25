import React, { Component } from 'react';
import {
    Container,
    Content,
    Button,
    Text,
    Form,
    Item,
    Input,
    View
} from 'native-base';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20,
        height: '100%'
    }
});

export default class Register extends Component {
    handleRegister = () => this.props.history.push('/register');
    render() {
        const { props } = this;
        return (
            <Container>
                <Header />
                <View style={styles.content}>
                    <Content>
                        <Form>
                            <Item>
                                <Input placeholder="Nombres" />
                            </Item>
                            <Item>
                                <Input placeholder="Apellidos" />
                            </Item>
                            <Item>
                                <Input placeholder="Usuario" />
                            </Item>
                            <Item last>
                                <Input placeholder="Contraseña" />
                            </Item>
                        </Form>
                        <Button style={{ width: '100%' }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>Registrate</Text>
                        </Button>
                    </Content>
                </View>
                <Footer {...props} />
            </Container>
        );
    }
}
