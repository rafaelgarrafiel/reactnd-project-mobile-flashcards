import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';

class DeckDetailScreen extends Component {

    render(){

        return(
            <Container>
                <Content>
                  <Card>
                    <CardItem>
                      <Left>
                        <Body>
                          <Text>React Deck</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Body>
                          <Text>3 (Cards)</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button>
                          <Text>Add Card</Text>
                        </Button>
                      </Left>
                      <Right>
                        <Button>
                          <Text>Start Quiz</Text>
                        </Button>
                      </Right>
                    </CardItem>
                  </Card>
                </Content>
              </Container>
            )
    }
}

export default DeckDetailScreen