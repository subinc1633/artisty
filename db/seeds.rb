# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create(email: 'notadog@odg.com', password: 'woofwoof', name: 'Good Boy')
user2 = User.create(email: 'stationerylvr@paper.com', password: 'papernpen', name: 'Highlighter Smith')
user3 = User.create(email: 'chicken@chicken.com', password: 'chikin', name: 'Chicken')
user4 = User.create(email: 'flower@flower.com', password: 'rosesss', name: 'Flora')
user5 = User.create(email: 'mochimochi@food.com', password: 'mangomochi', name: 'Mary')
user6 = User.create(email: 'dododo@dodo.com', password: 'dododo', name: 'Dodo')
user7 = User.create(email: 'kalbis2@foodie.com', password: 'sgs4evr', name: 'Anne')
user8 = User.create(email: 'dynamite@dyno.com', password: 'tyrannosaurus', name: 'Tyno')
user9 = User.create(email: 'rainydays@doodle.com', password: 'umbrella', name: 'Julie')