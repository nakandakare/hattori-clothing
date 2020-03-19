const INITIAL_STATE = {
    sections: [{
        title: 'gorras',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'camperas',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'zapatillas',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'mujer',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        id: 4,
        size: 'medium',
        linkUrl: 'shop/womens'
    },
    {
        title: 'hombre',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        id: 5,
        size: 'medium',
        linkUrl: 'shop/mens'
    }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;