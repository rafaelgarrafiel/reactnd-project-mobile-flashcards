import React, { Component } from 'react'
// import { View, Text } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Text, Label, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../actions/Decks'

class DeckCreateScreen extends Component {

    constructor(props) {
      super(props);
      this.state = { title: '' };
    }

    addDeck(){
      const entry = this.state
      // console.log(entry)
      const newDeck = {[entry.title]: {title: entry.title, questions: []}};
      // console.log(newDeck)
      this.props.saveDeckTitle(newDeck)
      // this.props.navigation.navigate('Main')
    }
    
    
    render(){

        return(
            <Container>
                <Content padder>
                  <Item style={{ marginTop: 40 }}>
                    <Input 
                      placeholder="Deck Title"
                      onChangeText={(title) => this.setState({title})}
                      value={this.state.title}
                    />
                  </Item>
                  <Button
                    rounded
                    success
                    style={{ marginTop: 20, alignSelf: "center" }}
                    onPress={() => this.addDeck()}
                  >
                    <Text>Save Deck</Text>
                  </Button>
                </Content>
              </Container>
            )
    }
}

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = dispatch =>({
  saveDeckTitle: (deck) => 
    dispatch(saveDeckTitle(deck)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DeckCreateScreen);