# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Shop.delete_all
Category.delete_all
Item.delete_all
Review.delete_all

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
category1file = open('https://artisty-seeds.s3.amazonaws.com/wwy.png')
category1.photo.attach(io: category1file, filename: 'wwy.jpeg')

category2 = Category.create!(
    title: 'Food & Drinks',
    description: 'Because we like to eat'
)
category2file = open('https://artisty-seeds.s3.amazonaws.com/chicken.png')
category2.photo.attach(io: category2file, filename: 'chicken.png')

category3 = Category.create!(
    title: 'Nature & Landscape',
    description: 'Drawings of different natural views'
)
category3file = open('https://artisty-seeds.s3.amazonaws.com/clouds.jpeg')
category3.photo.attach(io: category3file, filename: 'clouds.jpeg')

category4 = Category.create!(
    title: 'Original Characters',
    description: 'Characters created by the artists themselves'
)
category4file = open('https://artisty-seeds.s3.amazonaws.com/tomato.jpeg')
category4.photo.attach(io: category4file, filename: 'tomato.jpeg')

category5 = Category.create!(
    title: 'Stickers & Accessories',
    description: 'Decorative items'
)
category5file = open('https://artisty-seeds.s3.amazonaws.com/todoroki.jpeg')
category5.photo.attach(io: category5file, filename: 'todoroki.jpeg')

item1 = Item.create!(
    shop_id: shop1.id,
    category_id: category2.id,
    title: 'Fried Chicken',
    description: 'Because chicken',
    price: 11.00,
    options: {
        Size: ['10 x 10', '15 x 15', '20 x 20']
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
    description: '10/10 movie with one of my favorite lines that takes my breath away.',
    price: 15.00,
    options: {
        Size: ['10 x 10', '15 x 15', '20 x 20']
    },
    favorite: false,
    fav_count: 3023
)
item2file = open('https://artisty-seeds.s3.amazonaws.com/wwy.png')
item2.photos.attach(io: item2file, filename: 'wwy.png')

item3 = Item.create!(
    shop_id: shop1.id,
    category_id: category4.id,
    title: 'Star Goddess',
    description: 'Some Naiad or goddess',
    price: 20.00,
    options: {
        Size: ['10 x 10', '15 x 15', '20 x 20']
    },
    favorite: false,
    fav_count: 1083
)
item3file = open('https://artisty-seeds.s3.amazonaws.com/star.jpeg')
item3.photos.attach(io: item3file, filename: 'star.jpeg')

item4 = Item.create!(
    shop_id: shop2.id,
    category_id: category5.id,
    title: 'MHA Stickers',
    description: 'Cute My Hero Academia stickers!! Each set contains 20 stickers.',
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
    description: 'A scene from the movie "Get Out."',
    price: 20.50,
    favorite: false,
    fav_count: 1134
)
item5file = open('https://artisty-seeds.s3.amazonaws.com/get-out.jpeg')
item5.photos.attach(io: item5file, filename: 'get-out.jpeg')

item6 = Item.create!(
    shop_id: shop3.id,
    category_id: category4.id,
    title: 'Pepero',
    description: 'Pepero is gr8',
    price: 17.50,
    favorite: false,
    fav_count: 2012
)
item6file = open('https://artisty-seeds.s3.amazonaws.com/pepero.jpeg')
item6.photos.attach(io: item6file, filename: 'pepero.jpeg')

item7 = Item.create!(
    shop_id: shop3.id,
    category_id: category1.id,
    title: 'Power Fanart',
    description: 'Power best gril',
    price: 14.00,
    favorite: false,
    fav_count: 2304
)
item7file = open('https://artisty-seeds.s3.amazonaws.com/power.jpeg')
item7.photos.attach(io: item7file, filename: 'power.jpeg')

item8 = Item.create!(
    shop_id: shop3.id,
    category_id: category1.id,
    title: 'Schwoop',
    description: '<3 mj',
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
    description: 'Salmon',
    price: 21.00,
    favorite: false,
    fav_count: 4895
)
item9file = open('https://artisty-seeds.s3.amazonaws.com/jjk.jpeg')
item9.photos.attach(io: item9file, filename: 'jjk.jpeg')

item10 = Item.create!(
    shop_id: shop3.id,
    category_id: category3.id,
    title: 'Clouds',
    description: 'Wow clouds',
    price: 15.00,
    favorite: false,
    fav_count: 2393
)
item10file = open('https://artisty-seeds.s3.amazonaws.com/clouds.jpeg')
item10.photos.attach(io: item10file, filename: 'clouds.jpeg')

item11 = Item.create!(
    shop_id: shop4.id,
    category_id: category1.id,
    title: 'One Sky One Destiny',
    description: 'KH best game evr',
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
    description: '"The unseen blade is the deadliest."',
    price: 15.00,
    favorite: false,
    fav_count: 2354
)
item12file = open('https://artisty-seeds.s3.amazonaws.com/zed.jpeg')
item12.photos.attach(io: item12file, filename: 'zed.jpeg')

item13 = Item.create!(
    shop_id: shop4.id,
    category_id: category4.id,
    title: 'Some dude',
    description: 'Idk who u r',
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
    description: 'u belong in a museum!!!',
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
    description: 'Pick a character pls',
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
    category_id: category4.id,
    title: 'Tomato',
    description: 'This is a tomato',
    price: 15.00,
    favorite: false,
    fav_count: 2305
)
item16file = open('https://artisty-seeds.s3.amazonaws.com/tomato.jpeg')
item16.photos.attach(io: item16file, filename: 'tomato.jpeg')

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