import React from 'react'
import { View, StatusBar } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Constants } from 'expo'

export default function HeaderBar ({backgroundColor, ...props}) {
    return (
        <View>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
            </Header>
        </View>
        )
}