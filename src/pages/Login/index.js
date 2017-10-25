import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
	render() {
		return (
			<Container>
                        <Header>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
				<Content>
					<Text>
						Login
					</Text>
				</Content>
			</Container>
		);
	}
}