import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getMotorcycleProject, getNewsHome } from "../reducers/app-redux";
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Icon, Button, Right } from "native-base";
import { FlatList, StyleSheet, Image } from "react-native";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dataNews: state.dataNews
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNewsHome: () => { dispatch(getNewsHome()) },
    };
};


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataNews: []
        };
    }

    componentWillMount() {
        this.props.getNewsHome();
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        console.log('data berita',nextProps);
        this.setState({
            dataNews: nextProps.dataNews.response.data
        });
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        console.log('ini data berita', this.state.dataNews);
        return (
            <Container style={styles.container}>
                <FlatList
                    data={this.state.dataNews}
                    renderItem={({ item }) => (
                        <Content padder>
                            <Card style={styles.mb}>

                                <CardItem>
                                    <Left>
                                        <Thumbnail/>
                                        <Body>
                                        <Text>{item.title}</Text>
                                        <Text note>{item.level.level}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image
                                        style={{
                                            resizeMode: "cover",
                                            width: null,
                                            height: 200,
                                            flex: 1
                                        }}
                                        source={{uri: item.image_url}}
                                    />
                                </CardItem>
                                <CardItem style={{ paddingVertical: 0 }}>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="thumbs-up" />
                                            <Text style={{fontSize:10}}>{item.total_like} Like</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text style={{fontSize:10}}>{item.total_comment} Comment</Text>
                                    </Button>
                                    </Body>
                                    <Right>
                                        <Button transparent>
                                            <Icon active name="chatbubbles" />
                                            <Text style={{fontSize:10}}>{item.total_view} View</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Content>
                    )}/>
            </Container>
        );
    }
}

Home.propTypes = {};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9bbcf2"
    },
    mb: {
        marginBottom: 5
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
