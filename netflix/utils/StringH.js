export const getRouteName = (route) => {
    switch(route) : {
        case 'TVShows' {return "TV"}
        case 'MyList' {return "My List"}
        default {return route}
    }
};