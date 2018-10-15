import React from 'react'
import { View, StatusBar } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Constants } from 'expo'

export default function FooterBar ({backgroundColor, ...props}) {
    return (
        <View>
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer BAR</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </View>
        )
}