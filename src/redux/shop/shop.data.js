const SHOP_DATA = {
    hats: {
        id: 1,
        title: 'Gorras',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 800
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 600
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 500
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 600
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 750
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 500
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 900
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 450
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 950
            }
        ]
    },
    sneakers: {
        id: 2,
        title: 'Zapatillas',
        routeName: 'sneakers',
        items: [
            {
                id: 1,
                name: 'Adidas NMD',
                imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                price: 1200
            },
            {
                id: 2,
                name: 'Adidas Yeezy',
                imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                price: 1500
            },
            {
                id: 3,
                name: 'Black Converse',
                imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                price: 1600
            },
            {
                id: 4,
                name: 'Nike White AirForce',
                imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                price: 2000
            },
            {
                id: 5,
                name: 'Nike Red High Tops',
                imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                price: 1980
            },
            {
                id: 6,
                name: 'Nike Brown High Tops',
                imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                price: 1800
            },
            {
                id: 7,
                name: 'Air Jordan Limited',
                imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                price: 1900
            },
            {
                id: 8,
                name: 'Timberlands',
                imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                price: 2000
            }
        ]
    },
    jackets: {
        id: 3,
        title: 'Camperas',
        routeName: 'jackets',
        items: [
            {
                id: 1,
                name: 'Black Jean Shearling',
                imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                price: 3200
            },
            {
                id: 2,
                name: 'Blue Jean Jacket',
                imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                price: 2350
            },
            {
                id: 3,
                name: 'Grey Jean Jacket',
                imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                price: 3500
            },
            {
                id: 4,
                name: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                price: 3800
            },
            {
                id: 5,
                name: 'Tan Trench',
                imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                price: 3400
            }
        ]
    },
    womens: {
        id: 4,
        title: 'Mujer',
        routeName: 'womens',
        items: [
            {
                id: 1,
                name: 'Blue Tanktop',
                imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                price: 2500
            },
            {
                id: 2,
                name: 'Floral Blouse',
                imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                price: 2000
            },
            {
                id: 3,
                name: 'Floral Dress',
                imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                price: 2100
            },
            {
                id: 4,
                name: 'Red Dots Dress',
                imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                price: 2300
            },
            {
                id: 5,
                name: 'Striped Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                price: 2500
            },
            {
                id: 6,
                name: 'Yellow Track Suit',
                imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                price: 2530
            },
            {
                id: 7,
                name: 'White Blouse',
                imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                price: 3200
            }
        ]
    },
    mens: {
        id: 5,
        title: 'Hombre',
        routeName: 'mens',
        items: [
            {
                id: 1,
                name: 'Camo Down Vest',
                imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                price: 3250
            },
            {
                id: 2,
                name: 'Floral T-shirt',
                imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                price: 2000
            },
            {
                id: 3,
                name: 'Black & White Longsleeve',
                imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                price: 2500
            },
            {
                id: 4,
                name: 'Pink T-shirt',
                imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                price: 2500
            },
            {
                id: 5,
                name: 'Jean Long Sleeve',
                imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                price: 4000
            },
            {
                id: 6,
                name: 'Burgundy T-shirt',
                imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                price: 2500
            }
        ]
    }
}

export default SHOP_DATA;