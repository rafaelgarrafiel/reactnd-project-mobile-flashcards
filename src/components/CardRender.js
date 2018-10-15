import React, { Component } from 'react'
import { Card, CardItem, Text, Icon, Right, View } from 'native-base'
import { connect } from 'react-redux'

class CardRender extends Component {

    render() {

        console.log(this.props)

        return (
            <View>
                <Card >
                    <CardItem >
                        <Text>{this.props.title}</Text>
                        <Right>
                            <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate('Detail')} />
                        </Right>
                    </CardItem>
                </Card>
            </View>
        )
    }
}

const mapStateToProps = (state, props) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(CardRender);