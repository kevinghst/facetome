# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

Friendship.destroy_all

#10
User.create({firstname: "Harry", lastname: "Potter", username: "harrypotter", password:"harrypotter", gender:"male", birthday:"May 01, 2016"})
#11
User.create({firstname: "Sherlock", lastname: "Holmes", username: "sherlock", password:"sherlock", gender:"male", birthday:"May 01, 2016"})
#12
User.create({firstname: "Julius", lastname: "Caesar", username: "caesar", password:"caesar", gender:"male", birthday:"May 01, 2016"})
#13
User.create({firstname: "Cat", lastname: "Woman", username: "catwoman", password:"catwoman", gender:"female", birthday:"May 01, 2016"})
#14
User.create({firstname: "Peter", lastname: "Griffin", username: "petergriffin", password:"petergriffin", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Steven", lastname: "King", username: "stevenking", password:"stevenking", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Elon", lastname: "Musk", username: "elonmusk", password:"elonmusk", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Nikola", lastname: "Tesla", username: "nikolatesla", password:"nikolatesla", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Arya", lastname: "Stark", username: "aryastark", password:"aryastark", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Hermione", lastname: "Granger", username: "hermione", password:"hermione", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Walter", lastname: "White", username: "walterwhite", password:"walterwhite", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Jesse", lastname: "Pinkman", username: "jessepinkman", password:"jessepinkman", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Mathilda", lastname: "Lando", username: "mathilda", password:"mathilda", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Leon", lastname: "Montana", username: "leonmontana", password:"leonmontana", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Cleopatra", lastname: "Philopator", username: "cleopatra", password:"cleopatra", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Gaius", lastname: "Octavius", username: "augustus", password:"augustus", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Peter", lastname: "Thiel", username: "peterthiel", password:"peterthiel", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Ada", lastname: "Lovelace", username: "adalovelace", password:"adalovelace", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Jeff", lastname: "Bezos", username: "jeffbezos", password:"jeffbezos", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Marie", lastname: "Curie", username: "mariecurie", password:"mariecurie", gender:"female", birthday:"May 01, 2016"})
