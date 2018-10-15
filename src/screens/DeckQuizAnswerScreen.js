import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class DeckQuizAnswerScreen extends Component {

    render(){

        return(
            <View>
                <Text>Main View Test</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(
                    'Deck'
                    )}
                    >
                    <Text>Deck</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.openDrawer()}
                    >
                    <Text>Open</Text>
                </TouchableOpacity>
            </View>
            )
    }
}

export default DeckQuizAnswerScreen