import React from 'react';
import {View,Text,Image,ScrollView,FlatList,TouchableWithoutFeedback} from 'react-native';
import {medDark,devWidth} from "../utils/styles";
import {WhiteText} from "./white.text";
import {Ionicons} from '@expo/vector-icons';
import {styles} from "./nav.bar";
import {MovieListItem} from "./movie.list.item";

export class NetflixHome extends React.Component {
    render() {
        return (
            <View style={medDark}>
                <ScrollView>
                    <View>
                        <Image source={require("../images/The_Office_Cover.jpg")} style={{width: devWidth, aspectRatio: 1}}/>
                        <View style={{position: "absolute", bottom: 0, width: devWidth, marginBottom: 10}}>
                            <View style={styles.tabContainer}>
                                <View style={styles.tab}><WhiteText>Hello</WhiteText></View>
                                <View style={[styles.tab,{backgroundColor: "#e9e9e9"}]}>
                                    <TouchableWithoutFeedback onPress={()=>{}}>
                                        <View style={[styles.tabContainer]}>
                                            <Ionicons name="md-play" size={32} style={{alignSelf: "center"}} />
                                            <Text style={{paddingLeft: 10, alignSelf: "center"}}>PLAY</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={styles.tab}><WhiteText>Hello</WhiteText></View>
                            </View>
                        </View>
                    </View>
                    <FlatList
                        data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}]}
                        horizontal={true}
                        renderItem={({item}) => (
                            <MovieListItem item={item} />
                        )}
                    />
                    <FlatList
                        data={[{key: 'a'}, {key: 'b'}]}
                        renderItem={({item}) => <Text>{item.key}</Text>}
                    />
                </ScrollView>
            </View>
        );
    }
}

