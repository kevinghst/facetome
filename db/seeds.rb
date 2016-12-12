# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

#10
User.create({firstname: "harry", lastname: "potter", username: "harrypotter", password:"harrypotter", gender:"male", birthday:"May 01, 2016"})
#11
User.create({firstname: "sherlock", lastname: "holmes", username: "sherlock", password:"sherlock", gender:"male", birthday:"May 01, 2016"})
#12
User.create({firstname: "julius", lastname: "caesar", username: "caesar", password:"caesar", gender:"male", birthday:"May 01, 2016"})
#13
User.create({firstname: "cat", lastname: "woman", username: "catwoman", password:"catwoman", gender:"female", birthday:"May 01, 2016"})
#14
User.create({firstname: "peter", lastname: "griffin", username: "petergriffin", password:"petergriffin", gender:"male", birthday:"May 01, 2016"})
