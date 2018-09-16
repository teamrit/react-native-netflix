import React from 'react';
import {NavScreen as MyNavScreen} from "./blocks/nav.screen";
import {CustomTabBar} from "./blocks/nav.bar";
import {
    createNavigator,
    createNavigationContainer,
    SafeAreaView,
    TabRouter,
} from 'react-navigation';
import {dark} from "./utils/styles";

export const getRouteName = (route) => {
    switch(route) {
        case 'TVShows' : {return "TV"}
        case 'MyList' : {return "My List"}
        default : {return route}
    }
};

const MyHomeScreen = ({ navigation }) => (
    <MyNavScreen banner="Home Screen" navigation={navigation} />
);

const MyNotificationsScreen = ({ navigation }) => (
    <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({ navigation }) => (
    <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

const CustomTabView = ({ descriptors, navigation }) => {
    const { routes, index } = navigation.state;
    const descriptor = descriptors[routes[index].key];
    const ActiveScreen = descriptor.getComponent();
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={[{borderWidth: 2}, dark]} >
            <CustomTabBar navigation={navigation} />
            <ActiveScreen navigation={descriptor.navigation} />
        </SafeAreaView>
    );
};

const CustomTabRouter = TabRouter(
    {
        Home: {
            screen: MyHomeScreen,
            path: ''
        },
        TVShows: {
            screen: MyHomeScreen,
            path: 'tv-shows',
        },
        Movies: {
            screen: MyNotificationsScreen,
            path: 'movies',
        },
        MyList: {
            screen: MySettingsScreen,
            path: '',
        },
    },
    {
        // Change this to start on a different tab
        initialRouteName: 'Home',
    }
);

const CustomTabs = createNavigationContainer(
    createNavigator(CustomTabView, CustomTabRouter, {})
);
   



export default CustomTabs;