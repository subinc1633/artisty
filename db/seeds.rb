# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Item.delete_all
Shop.delete_all
Category.delete_all

user1 = User.create!(email: 'peperoroll@gmail.com', password: 'peppero', name: 'Soybean')
user2 = User.create!(email: 'ricenkimchi@gmail.com', password: 'aggressivehr', name: 'Lucas')
user3 = User.create!(email: 'tostnbutta@gmail.com', password: 'thumbelina', name: 'Tim')
user4 = User.create!(email: 'imjay@yahoo.com', password: 'kevslilbro', name: 'J')
user5 = User.create!(email: 'imkevv@gmail.com', password: 'jaysbigbro', name: 'Kevv')
user6 = User.create!(email: 'miranda@gmail.com', password: 'dravenmain', name: 'Juan')
user7 = User.create!(email: 'yoomnom@gmail.com', password: 'omnomnom', name: 'Yoomnom')
user8 = User.create!(email: 'leetlebeast@gmail.com', password: 'bronze', name: 'Joyceeee')
user9 = User.create!(email: 'foobia@gmail.com', password: 'toughcookie', name: 'Julia')
user10 = User.create!(email: 'sussss@gmail.com', password: 'codyisthebest', name: 'Susanoo')
user11 = User.create!(email: 'lowkeysavage@gmail.com', password: 'gentlegiant', name: 'Noel')
user12 = User.create!(email: 'cherryberry@gmail.com', password: 'winterx3', name: 'Churro')

shop1 = Shop.create!(
    name: 'Yuzuland',
    description: 'a place where yuzu thrives',
    ig_handle: 'little.whitepeach'
)

shop2 = Shop.create!(
    name: 'Geeeeee',
    description: 'I''m Gee',
    ig_handle: 'img_ee'
)

shop3 = Shop.create!(
    name: 'YH',
    description: 'Hello',
    ig_handle: 'youngha1m'
)

shop4 = Shop.create!(
    name: '8eanie',
    description: 'doodl',
    ig_handle: '8eanie_'
)

category1 = Category.create!(
    title: 'Fanart',
    description: 'Fanart of different creative works'
)
category1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'store3', 'jjk.jpeg')), filename: 'jjk.jpeg')

category2 = Category.create!(
    title: 'Food & Drinks',
    description: 'Because we like to eat'
)
category2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'store1', 'chicken.png')), filename: 'chicken.png')

category3 = Category.create!(
    title: 'Nature & Landscape',
    description: 'Drawings of different natural views'
)
category3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'store3', 'clouds.jpeg')), filename: 'clouds.jpeg')

category4 = Category.create!(
    title: 'Original Characters',
    description: 'Characters created by the artists themselves'
)
category4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'store4', 'tomato.jpeg')), filename: 'tomato.jpeg')

category5 = Category.create!(
    title: 'Stickers & Accessories',
    description: 'Decorative items'
)
category5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'store2', 'todoroki.jpeg')), filename: 'todoroki.jpeg')

item1 = Item.create!(
    shop_id: 1,
    category_id: 1,
    title: 'Fried Chicken',
    description: 'Because chicken',
    price: 11.00,
    options: {
        size: ['10 x 10', '15 x 15', '20 x 20']
    },
    favorite: false,
    fav_count: 1003,
    avg_rating: 4.5
)

item2 = Item.create!(
    shop_id: 1,
    category_id: 2,
    title: 'Weathering With You - Blue Sky',
    description: '10/10 movie with one of my favorite lines that takes my breath away.',
    price: 15.00,
    options: {
        size: ['10 x 10', '15 x 15', '20 x 20']
    },
    favorite: false,
    fav_count: 3023,
    avg_rating: 4.8
)

item3 = Item.create!(
    shop_id: 1,
    category_id: 3,
    title: 'Star Goddess',
    description: 'Some Naiad or goddess',
    price: 20.00,
    options: {
        size: ['10 x 10', '15 x 15', '20 x 20']
    },
    favorite: false,
    fav_count: 1083,
    avg_rating: 5
)

item4 = Item.create!(
    shop_id: 2,
    category_id: 2,
    title: 'MHA Stickers',
    description: 'Cute My Hero Academia stickers!! Each set contains 20 stickers.',
    price: 5.00,
    options: {
        character: ['bakugou', 'deku', 'todoroki', 'ochako', 'tsuyu']
    },
    favorite: false,
    fav_count: 3934,
    avg_rating: 5
)

item5 = Item.create!(
    shop_id: 2,
    category_id: 2,
    title: 'Get Out Portrait',
    description: 'A scene from the movie "Get Out."',
    price: 20.50,
    favorite: false,
    fav_count: 1134,
    avg_rating: 5
)

item6 = Item.create!(
    shop_id: 3,
    category_id: 3,
    title: 'Pepero',
    description: 'Pepero is gr8',
    price: 17.50,
    favorite: false,
    fav_count: 2012,
    avg_rating: 4.8
)

item7 = Item.create!(
    shop_id: 3,
    category_id: 2,
    title: 'Power Fanart',
    description: 'Power best gril',
    price: 14.00,
    favorite: false,
    fav_count: 2304,
    avg_rating: 4.5
)

item8 = Item.create!(
    shop_id: 3,
    category_id: 2,
    title: 'Schwoop',
    description: '<3 mj',
    price: 18.00,
    favorite: false,
    fav_count: 1049,
    avg_rating: 4.6
)

item9 = Item.create!(
    shop_id: 3,
    category_id: 2,
    title: 'Jujutsu Kaisen Fanart',
    description: 'Salmon',
    price: 21.00,
    favorite: false,
    fav_count: 4895,
    avg_rating: 4.9
)

item10 = Item.create!(
    shop_id: 3,
    category_id: 2,
    title: 'Clouds',
    description: 'Wow clouds',
    price: 15.00,
    favorite: false,
    fav_count: 2393,
    avg_rating: 4.7
)

item11 = Item.create!(
    shop_id: 4,
    category_id: 2,
    title: 'One Sky One Destiny',
    description: 'KH best game evr',
    price: 10.00,
    favorite: false,
    fav_count: 233,
    avg_rating: 4.5
)

item12 = Item.create!(
    shop_id: 4,
    category_id: 2,
    title: 'Zed',
    description: '"The unseen blade is the deadliest."',
    price: 15.00,
    favorite: false,
    fav_count: 2354,
    avg_rating: 4.7
)

item13 = Item.create!(
    shop_id: 4,
    category_id: 3,
    title: 'Some dude',
    description: 'Idk who u r',
    price: 15.00,
    favorite: false,
    fav_count: 2093,
    avg_rating: 4.5
)

item14 = Item.create!(
    shop_id: 4,
    category_id: 2,
    title: 'Ez',
    description: 'u belong in a museum!!!',
    price: 100.00,
    favorite: false,
    fav_count: 23,
    avg_rating: 2.8
)

item15 = Item.create!(
    shop_id: 4,
    category_id: 2,
    title: 'Leeg ADCs',
    description: 'Pick a character pls',
    price: 5.00,
    options: {
        character: ['jinx', 'mf', 'graves', 'caitlyn']
    },
    favorite: false,
    fav_count: 3133,
    avg_rating: 4
)

item16 = Item.create!(
    shop_id: 4,
    category_id: 4,
    title: 'Tomato',
    description: 'This is a tomato',
    price: 15.00,
    favorite: false,
    fav_count: 2305,
    avg_rating: 4.2
)