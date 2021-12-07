# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
ApplicationRecord.connection.reset_pk_sequence!('users')
Shop.delete_all
ApplicationRecord.connection.reset_pk_sequence!('shops')
Category.delete_all
ApplicationRecord.connection.reset_pk_sequence!('categories')
Item.delete_all
ApplicationRecord.connection.reset_pk_sequence!('items')
Review.delete_all
ApplicationRecord.connection.reset_pk_sequence!('reviews')
Cart.delete_all
ApplicationRecord.connection.reset_pk_sequence!('carts')

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
    description: "I'm Gee",
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
    description: 'Artwork created by fans of various works of fiction'
)
category1file = open('https://artisty-seeds.s3.amazonaws.com/wwy.png')
category1.photo.attach(io: category1file, filename: 'wwy.jpeg')

category2 = Category.create!(
    title: 'Food & Drinks',
    description: "To view whenever you're feeling hungry"
)
category2file = open('https://artisty-seeds.s3.amazonaws.com/sushi.jpeg')
category2.photo.attach(io: category2file, filename: 'sushi.jpeg')

category3 = Category.create!(
    title: 'Original Characters',
    description: 'Characters created by the artists themselves'
)
category3file = open('https://artisty-seeds.s3.amazonaws.com/girl2.jpeg')
category3.photo.attach(io: category3file, filename: 'girl2.jpeg')

category4 = Category.create!(
    title: 'Stickers & Accessories',
    description: 'Decorative stickers and items to accessorize whatever you''d like'
)
category4file = open('https://artisty-seeds.s3.amazonaws.com/todoroki.jpeg')
category4.photo.attach(io: category4file, filename: 'todoroki.jpeg')

category5 = Category.create!(
    title: 'Miscellaneous',
    description: 'More artworks for sale'
)
category5file = open('https://artisty-seeds.s3.amazonaws.com/ryujin.jpeg')
category5.photo.attach(io: category5file, filename: 'ryujin.jpeg')

item1 = Item.create!(
    shop_id: shop1.id,
    category_id: category2.id,
    title: 'Two Pieces of Fried Chicken',
    price: 11.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 1003
)
item1file = open('https://artisty-seeds.s3.amazonaws.com/chicken.png')
item1.photos.attach(io: item1file, filename: 'chicken.png')

item2 = Item.create!(
    shop_id: shop1.id,
    category_id: category1.id,
    title: 'Weathering With You - Blue Sky',
    price: 15.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 3023
)
item2file = open('https://artisty-seeds.s3.amazonaws.com/wwy.png')
item2.photos.attach(io: item2file, filename: 'wwy.png')

item3 = Item.create!(
    shop_id: shop1.id,
    category_id: category3.id,
    title: 'Star Goddess',
    price: 20.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 1083
)
item3file = open('https://artisty-seeds.s3.amazonaws.com/star.jpeg')
item3.photos.attach(io: item3file, filename: 'star.jpeg')

item4 = Item.create!(
    shop_id: shop2.id,
    category_id: category4.id,
    title: 'My Hero Academia Stickers !!',
    price: 5.00,
    options: {
        Character: ['Bakugou', 'Deku', 'Todoroki', 'Ochako', 'Tsuyu']
    },
    favorite: false,
    fav_count: 3934
)
item4file = open('https://artisty-seeds.s3.amazonaws.com/bakugou.jpeg')
item4.photos.attach(io: item4file, filename: 'bakugou.jpeg')
item4file1 = open('https://artisty-seeds.s3.amazonaws.com/deku.jpeg')
item4.photos.attach(io: item4file1, filename: 'deku.jpeg')
item4file2 = open('https://artisty-seeds.s3.amazonaws.com/todoroki.jpeg')
item4.photos.attach(io: item4file2, filename: 'todoroki.jpeg')
item4file3 = open('https://artisty-seeds.s3.amazonaws.com/ochako.jpeg')
item4.photos.attach(io: item4file3, filename: 'ochako.jpeg')
item4file4 = open('https://artisty-seeds.s3.amazonaws.com/tsuyu.jpeg')
item4.photos.attach(io: item4file4, filename: 'tsuyu.jpeg')

item5 = Item.create!(
    shop_id: shop2.id,
    category_id: category1.id,
    title: 'Get Out Portrait',
    price: 20.50,
    favorite: false,
    fav_count: 1134
)
item5file = open('https://artisty-seeds.s3.amazonaws.com/get-out.jpeg')
item5.photos.attach(io: item5file, filename: 'get-out.jpeg')

item6 = Item.create!(
    shop_id: shop3.id,
    category_id: category3.id,
    title: 'Watching the sky with pepero',
    price: 17.50,
    favorite: false,
    fav_count: 2012
)
item6file = open('https://artisty-seeds.s3.amazonaws.com/pepero.jpeg')
item6.photos.attach(io: item6file, filename: 'pepero.jpeg')

item7 = Item.create!(
    shop_id: shop3.id,
    category_id: category1.id,
    title: 'Chainsaw Man - Power Fanart',
    price: 14.00,
    favorite: false,
    fav_count: 2304
)
item7file = open('https://artisty-seeds.s3.amazonaws.com/power.jpeg')
item7.photos.attach(io: item7file, filename: 'power.jpeg')

item8 = Item.create!(
    shop_id: shop3.id,
    category_id: category5.id,
    title: 'Schwoop',
    price: 18.00,
    favorite: false,
    fav_count: 1049
)
item8file = open('https://artisty-seeds.s3.amazonaws.com/mj.jpeg')
item8.photos.attach(io: item8file, filename: 'mj.jpeg')

item9 = Item.create!(
    shop_id: shop3.id,
    category_id: category1.id,
    title: 'Jujutsu Kaisen Fanart',
    price: 21.00,
    favorite: false,
    fav_count: 29510
)
item9file = open('https://artisty-seeds.s3.amazonaws.com/jjk.jpeg')
item9.photos.attach(io: item9file, filename: 'jjk.jpeg')

item10 = Item.create!(
    shop_id: shop3.id,
    category_id: category5.id,
    title: 'Clouds',
    price: 15.00,
    favorite: false,
    fav_count: 2393
)
item10file = open('https://artisty-seeds.s3.amazonaws.com/clouds.jpeg')
item10.photos.attach(io: item10file, filename: 'clouds.jpeg')

item11 = Item.create!(
    shop_id: shop4.id,
    category_id: category1.id,
    title: 'Kingdom Hearts - One Sky One Destiny',
    price: 10.00,
    favorite: false,
    fav_count: 233
)
item11file = open('https://artisty-seeds.s3.amazonaws.com/kh.png')
item11.photos.attach(io: item11file, filename: 'kh.png')

item12 = Item.create!(
    shop_id: shop4.id,
    category_id: category1.id,
    title: 'Zed',
    price: 15.00,
    favorite: false,
    fav_count: 2354
)
item12file = open('https://artisty-seeds.s3.amazonaws.com/zed.jpeg')
item12.photos.attach(io: item12file, filename: 'zed.jpeg')

item13 = Item.create!(
    shop_id: shop4.id,
    category_id: category3.id,
    title: 'Sometimes I stare directly into bright lights',
    price: 15.00,
    favorite: false,
    fav_count: 2093
)
item13file = open('https://artisty-seeds.s3.amazonaws.com/some-dude.jpeg')
item13.photos.attach(io: item13file, filename: 'some-dude.jpeg')

item14 = Item.create!(
    shop_id: shop4.id,
    category_id: category1.id,
    title: 'Ez',
    price: 100.00,
    favorite: false,
    fav_count: 23
)
item14file = open('https://artisty-seeds.s3.amazonaws.com/ez.jpeg')
item14.photos.attach(io: item14file, filename: 'ez.jpeg')

item15 = Item.create!(
    shop_id: shop4.id,
    category_id: category1.id,
    title: 'Leeg ADCs',
    price: 5.00,
    options: {
        Character: ['Jinx', 'MF', 'Graves', 'Caitlyn']
    },
    favorite: false,
    fav_count: 3133
)
item15file = open('https://artisty-seeds.s3.amazonaws.com/jinx.jpeg')
item15.photos.attach(io: item15file, filename: 'jinx.jpeg')
item15file1 = open('https://artisty-seeds.s3.amazonaws.com/mf.jpeg')
item15.photos.attach(io: item15file1, filename: 'mf.jpeg')
item15file2 = open('https://artisty-seeds.s3.amazonaws.com/graves.jpeg')
item15.photos.attach(io: item15file2, filename: 'graves.jpeg')
item15file3 = open('https://artisty-seeds.s3.amazonaws.com/cait.jpeg')
item15.photos.attach(io: item15file3, filename: 'cait.jpeg')

item16 = Item.create!(
    shop_id: shop4.id,
    category_id: category3.id,
    title: 'Tomato',
    price: 15.00,
    favorite: false,
    fav_count: 2305
)
item16file = open('https://artisty-seeds.s3.amazonaws.com/tomato.jpeg')
item16.photos.attach(io: item16file, filename: 'tomato.jpeg')

item17 = Item.create!(
    shop_id: shop1.id,
    category_id: category2.id,
    title: 'Delicious and refreshing bubble tea',
    price: 7.00,
    favorite: false,
    fav_count: 876
)
item17file = open('https://artisty-seeds.s3.amazonaws.com/bbt.jpeg')
item17.photos.attach(io: item17file, filename: 'bbt.jpeg')

item18 = Item.create!(
    shop_id: shop4.id,
    category_id: category5.id,
    title: 'Corgis are the best 10/10 dog',
    price: 50.00,
    favorite: false,
    fav_count: 28757
)
item18file = open('https://artisty-seeds.s3.amazonaws.com/corgi.jpeg')
item18.photos.attach(io: item18file, filename: 'corgi.jpeg')

item19 = Item.create!(
    shop_id: shop1.id,
    category_id: category2.id,
    title: 'Eat your fruits and get vitamins!! Fruit sticker set',
    price: 3.00,
    favorite: false,
    fav_count: 9349
)
item19file = open('https://artisty-seeds.s3.amazonaws.com/fruits.jpeg')
item19.photos.attach(io: item19file, filename: 'fruits.jpeg')

item20 = Item.create!(
    shop_id: shop1.id,
    category_id: category4.id,
    title: 'Haikyuu!! - Hinata Sticker',
    price: 5.00,
    favorite: false,
    fav_count: 68329
)
item20file = open('https://artisty-seeds.s3.amazonaws.com/hinata.jpeg')
item20.photos.attach(io: item20file, filename: 'hinata.jpeg')

item21 = Item.create!(
    shop_id: shop4.id,
    category_id: category3.id,
    title: 'A drawing of some girl',
    price: 16.00,
    favorite: false,
    fav_count: 1234
)
item21file = open('https://artisty-seeds.s3.amazonaws.com/girl2.jpeg')
item21.photos.attach(io: item21file, filename: 'girl2.jpeg')

item22 = Item.create!(
    shop_id: shop1.id,
    category_id: category2.id,
    title: 'Do you like phở?',
    price: 6.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 4523
)
item22file = open('https://artisty-seeds.s3.amazonaws.com/pho.jpeg')
item22.photos.attach(io: item22file, filename: 'pho.jpeg')

item23 = Item.create!(
    shop_id: shop1.id,
    category_id: category2.id,
    title: 'I do not like pineapples',
    price: 8.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 304
)
item23file = open('https://artisty-seeds.s3.amazonaws.com/pineapple.jpeg')
item23.photos.attach(io: item23file, filename: 'pineapple.jpeg')

item24 = Item.create!(
    shop_id: shop4.id,
    category_id: category5.id,
    title: 'ITZY - Ryujin',
    price: 12.50,
    favorite: false,
    fav_count: 7643
)
item24file = open('https://artisty-seeds.s3.amazonaws.com/ryujin.jpeg')
item24.photos.attach(io: item24file, filename: 'ryujin.jpeg')

item25 = Item.create!(
    shop_id: shop1.id,
    category_id: category5.id,
    title: 'A guitarist singing while sitting on a chair',
    price: 18.50,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 8234
)
item25file = open('https://artisty-seeds.s3.amazonaws.com/singer.jpeg')
item25.photos.attach(io: item25file, filename: 'singer.jpeg')

item26 = Item.create!(
    shop_id: shop1.id,
    category_id: category2.id,
    title: 'SPAM in a can open and ready to eat',
    price: 7.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 4243
)
item26file = open('https://artisty-seeds.s3.amazonaws.com/spam.jpeg')
item26.photos.attach(io: item26file, filename: 'spam.jpeg')

item27 = Item.create!(
    shop_id: shop1.id,
    category_id: category1.id,
    title: 'Suga or Suga ????',
    price: 12.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 8345
)
item27file = open('https://artisty-seeds.s3.amazonaws.com/suga.jpeg')
item27.photos.attach(io: item27file, filename: 'suga.jpeg')

item28 = Item.create!(
    shop_id: shop1.id,
    category_id: category2.id,
    title: 'Sushi is sooooooooo good',
    price: 9.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 4562
)
item28file = open('https://artisty-seeds.s3.amazonaws.com/sushi.jpeg')
item28.photos.attach(io: item28file, filename: 'sushi.jpeg')

item29 = Item.create!(
    shop_id: shop1.id,
    category_id: category1.id,
    title: 'Genshin Impact - Venti',
    price: 11.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 6352
)
item29file = open('https://artisty-seeds.s3.amazonaws.com/venti.jpeg')
item29.photos.attach(io: item29file, filename: 'venti.jpeg')

item30 = Item.create!(
    shop_id: shop1.id,
    category_id: category4.id,
    title: 'Weathering With You - Teru Teru Bozu',
    price: 7.00,
    options: {
        Size: {'10 x 10': 11.00, '15 x 15': 14.00, '20 x 20': 16.00}
    },
    favorite: false,
    fav_count: 3345
)
item30file = open('https://artisty-seeds.s3.amazonaws.com/ttb.jpeg')
item30.photos.attach(io: item30file, filename: 'ttb.jpeg')

review1 = Review.create!(
    reviewer_id: user4.id,
    item_id: item16.id,
    rating: 4,
    content: 'I love tomatoes!!',
)
review2 = Review.create!(
    reviewer_id: user6.id,
    item_id: item15.id,
    rating: 5,
    content: 'This drawing was perfect for me as an ADC main.',
)
review3 = Review.create!(
    reviewer_id: user6.id,
    item_id: item14.id,
    rating: 1,
    content: 'Are you serious?? What a ripoff',
)
review4 = Review.create!(
    reviewer_id: user9.id,
    item_id: item14.id,
    rating: 5,
    content: 'u belong in a museum',
)
review5 = Review.create!(
    reviewer_id: user7.id,
    item_id: item13.id,
    rating: 4,
    content: 'I like his hair',
)
review6 = Review.create!(
    reviewer_id: user1.id,
    item_id: item12.id,
    rating: 2,
    content: 'Zed sux',
)
review7 = Review.create!(
    reviewer_id: user8.id,
    item_id: item11.id,
    rating: 5,
    content: 'KH is the best',
)
review8 = Review.create!(
    reviewer_id: user5.id,
    item_id: item10.id,
    rating: 5,
    content: 'Clouds are so beautiful',
)
review9 = Review.create!(
    reviewer_id: user10.id,
    item_id: item9.id,
    rating: 5,
    content: 'JJK best anime 2021',
)
review10 = Review.create!(
    reviewer_id: user9.id,
    item_id: item8.id,
    rating: 4,
    content: 'mj <3',
)
review11 = Review.create!(
    reviewer_id: user5.id,
    item_id: item7.id,
    rating: 5,
    content: 'best gril',
)
review12 = Review.create!(
    reviewer_id: user7.id,
    item_id: item6.id,
    rating: 3,
    content: 'i dont rly like pepero',
)
review13 = Review.create!(
    reviewer_id: user8.id,
    item_id: item5.id,
    rating: 2,
    content: 'get out scared me ):',
)
review14 = Review.create!(
    reviewer_id: user6.id,
    item_id: item4.id,
    rating: 3,
    content: 'stickers were not sticky enough ):<',
)
review15 = Review.create!(
    reviewer_id: user8.id,
    item_id: item3.id,
    rating: 5,
    content: 'I LOVE IT WOWWWWW',
)
review16 = Review.create!(
    reviewer_id: user3.id,
    item_id: item2.id,
    rating: 5,
    content: 'i love this movie!!!',
)
review17 = Review.create!(
    reviewer_id: user2.id,
    item_id: item1.id,
    rating: 5,
    content: 'CHIMKEN',
)

review18 = Review.create!(
    reviewer_id: user2.id,
    item_id: item18.id,
    rating: 5,
    content: 'I want a corgi now!!',
)

review19 = Review.create!(
    reviewer_id: user8.id,
    item_id: item18.id,
    rating: 5,
    content: 'Me too corgi',
)

review20 = Review.create!(
    reviewer_id: user4.id,
    item_id: item17.id,
    rating: 1,
    content: "I don't like bubble tea ):",
)

review21 = Review.create!(
    reviewer_id: user7.id,
    item_id: item17.id,
    rating: 4,
    content: 'LOVE bubble tea!!',
)

review22 = Review.create!(
    reviewer_id: user1.id,
    item_id: item19.id,
    rating: 5,
    content: 'Really cute stickers~ Put them all over my laptop!',
)

review23 = Review.create!(
    reviewer_id: user6.id,
    item_id: item20.id,
    rating: 5,
    content: 'HAIKYUU SO GOOD',
)

review24 = Review.create!(
    reviewer_id: user3.id,
    item_id: item21.id,
    rating: 2,
    content: "it's okay",
)

review25 = Review.create!(
    reviewer_id: user9.id,
    item_id: item22.id,
    rating: 5,
    content: 'I LOVE PHO',
)

review26 = Review.create!(
    reviewer_id: user1.id,
    item_id: item23.id,
    rating: 1,
    content: 'how could you not',
)

review27 = Review.create!(
    reviewer_id: user4.id,
    item_id: item23.id,
    rating: 1,
    content: 'disappointed',
)

review28 = Review.create!(
    reviewer_id: user5.id,
    item_id: item24.id,
    rating: 3,
    content: 'not bad',
)

review29 = Review.create!(
    reviewer_id: user3.id,
    item_id: item25.id,
    rating: 5,
    content: 'Wow who is that??? So good!!',
)

review30 = Review.create!(
    reviewer_id: user8.id,
    item_id: item26.id,
    rating: 4,
    content: 'Spam is so good. I love this drawing.',
)

cart1 = Cart.create!(user_id: user1.id)
cart2 = Cart.create!(user_id: user2.id)
cart3 = Cart.create!(user_id: user3.id)
cart4 = Cart.create!(user_id: user4.id)
cart5 = Cart.create!(user_id: user5.id)
cart6 = Cart.create!(user_id: user6.id)
cart7 = Cart.create!(user_id: user7.id)
cart8 = Cart.create!(user_id: user8.id)
cart9 = Cart.create!(user_id: user9.id)
cart10 = Cart.create!(user_id: user10.id)
cart11 = Cart.create!(user_id: user11.id)
cart12 = Cart.create!(user_id: user12.id)

cart_item1 = CartItem.create!(item_id: item12.id, cart_id: cart1.id, quantity: 1)