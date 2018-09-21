import React,{Fragment} from 'react';
import {View,Text,Image,ScrollView,FlatList,TouchableWithoutFeedback,Animated,TouchableOpacity,TouchableNativeFeedback} from 'react-native';
import {medDark,devWidth} from "../utils/styles";
import {WhiteText} from "./white.text";
import {Ionicons} from '@expo/vector-icons';
import {styles} from "./nav.bar";
import {MovieListItem} from "./movie.list.item";
import {NETFLIX_TITLES} from "./data";

export class NetflixHome extends React.Component {

    state = {
        addedToList: false
    };

    componentWillMount() {
        this.animatedValue = new Animated.Value(300);
    }

    componentDidMount() {
        this.animatedValue.setValue(300);
        Animated.timing(this.animatedValue, {
            toValue: -5,
            duration: 1000,
        }).start(() => this.rightToLeft());
    }

    rightToLeft() {
        this.animatedValue.setValue(300);
        Animated.timing(this.animatedValue, {
            toValue: -5,
            duration: 1000,
        }).start(() => this.leftToRight());
    }

    leftToRight() {
        this.animatedValue.setValue(0);
        Animated.timing(this.animatedValue, {
            toValue: 300,
            duration: 1000,
        }).start(() => this.rightToLeft());
    }

    toggleList = () => {
        this.setState((prevState) => ({addedToList: !prevState.addedToList}));
        console.log(this.state.addedToList);
    };

    render() {
        const animatedStyle = { marginLeft: this.animatedValue, marginRight: - this.animatedValue };
        const {addedToList} = this.state;
        return (
            <View style={medDark}>
                <Animated.View style={[ animatedStyle,{backgroundColor: 'white', width:5, height:5}]} />
                <ScrollView>
                    <View>
                        <Image source={require("../images/The_Office_Cover.jpg")} style={{width: devWidth, aspectRatio: 1}}/>
                        <View style={{position: "absolute", bottom: 0, width: devWidth, marginBottom: 10}}>
                            <View style={styles.tabContainer}>
                                <View style={styles.tab}>
                                    <Ionicons name="md-checkmark" size={20} style={{alignSelf: "center" , color: "#fff"}} />
                                    <WhiteText>My List</WhiteText>
                                </View>
                                <View style={[styles.tab,{backgroundColor: "#e9e9e9"}]}>
                                    <TouchableWithoutFeedback onPress={()=>{}}>
                                        <View style={[styles.tabContainer]}>
                                            <Ionicons name="md-play" size={20} style={{alignSelf: "center"}} />
                                            <Text style={{paddingLeft: 10, alignSelf: "center", fontWeight: 'bold'}}>PLAY</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={styles.tab}>
                                    <Ionicons name="md-information-circle" size={20} style={{alignSelf: "center" , color: "#fff"}} />
                                    <WhiteText>Info</WhiteText>
                                </View>
                            </View>
                        </View>
                    </View>
                    {NETFLIX_TITLES.map(title => {
                        switch (title) {
                            case "Netflix Originals": {
                                return (<View key={title} style={{marginTop: 10}}>
                                    <WhiteText style={{fontSize: 15,fontWeight: "bold", margin: 10}}>
                                        {title}
                                    </WhiteText>
                                    <FlatList
                                        style={{marginLeft: 10}}
                                        data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}]}
                                        horizontal={true}
                                        renderItem={({item}) => (
                                            <MovieListItem item={item} large={true}/>
                                        )}
                                    />
                                </View>);
                                break;
                            }
                            default : {
                                return (
                                    <View key={title} style={{marginTop: 10}}>
                                        <WhiteText style={{fontSize: 15,fontWeight: "bold", margin: 10}}>
                                            {title}
                                        </WhiteText>
                                        <FlatList
                                            style={{marginLeft: 10}}
                                            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}]}
                                            horizontal={true}
                                            renderItem={({item}) => (
                                                <MovieListItem item={item} />
                                            )}
                                        />
                                    </View>
                                )
                            }
                        }

                    })}
                </ScrollView>
            </View>
        );
    }
}

