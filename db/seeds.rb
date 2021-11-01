# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create(email: 'notadog@odg.com', password: 'woofwoof', name: 'Good Boy')
user2 = User.create(email: 'ricenkimchi@gmail.com', password: 'aggressivehr', name: 'Lucas')
user3 = User.create(email: 'tostnbutta@gmail.com', password: 'thumbelina', name: 'Tim')
user4 = User.create(email: 'imjay@yahoo.com', password: 'kevslilbro', name: 'J')
user5 = User.create(email: 'imkevv@gmail.com', password: 'jaysbigbro', name: 'Kevv')
user6 = User.create(email: 'miranda@gmail.com', password: 'dravenmain', name: 'Juan')
user7 = User.create(email: 'yoomnom@gmail.com', password: 'omnomnom', name: 'Yoomnom')
user8 = User.create(email: 'leetlebeast@gmail.com', password: 'bronze', name: 'Joyceeee')
user9 = User.create(email: 'foobia@gmail.com', password: 'toughcookie', name: 'Julia')
user10 = User.create(email: 'sussss@gmail.com', password: 'codyisthebest', name: 'Susanoo')
user11 = User.create(email: 'lowkeysavage@gmail.com', password: 'gentlegiant', name: 'Noelle')
user12 = User.create(email: 'cherryberry@gmail.com', password: 'winterx3', name: 'Churro')