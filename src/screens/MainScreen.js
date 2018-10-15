import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, View, Button, Fab, List, ListItem } from 'native-base'
import { connect } from 'react-redux'
import { getDecks } from '../actions/Decks'
import { FlatList } from 'react-native'
import CardRender from '../components/CardRender'

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    componentDidMount() {
        this.props.getDecks()
    }

    renderItem = ({ item }) => {
      return <CardRender {...item} navigation={this.props.navigation}/>
    }

    render(){

      const { decks, navigation } = this.props

        return(
            <Container>
                <Content>
                  {decks && (
                    <FlatList
                      data={Object.keys(decks).map(deck => {
                        return decks[deck]
                      })}
                      renderItem={this.renderItem}
                    />
                  )}
                    
                </Content>
                  <Fab
                      active={this.state.active}
                      direction="up"
                      containerStyle={{ }}
                      style={{ backgroundColor: '#5067FF' }}
                      position="bottomRight"
                      // onPress={() => this.setState({ active: !this.state.active })}
                      onPress={() => navigation.navigate(
                        'DeckCreate'
                      )}>
                      <Icon name="ios-add" />
                    </Fab>
              </Container>
            )
    }
}

const mapStateToProps = (state, props) => ({
  decks: state.Decks.decks
});

const mapDispatchToProps = dispatch =>({
  getDecks: () => dispatch(getDecks()),
})
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);