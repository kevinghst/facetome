# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

Friendship.destroy_all

User.create({firstname: "Arya", lastname: "Stark", username: "aryastark", password:"aryastark", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Tyrion", lastname: "Lannister", username: "tyrion", password:"tyrion", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Jon", lastname: "Snow", username: "jonsnow", password:"jonsnow", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Sansa", lastname: "Stark", username: "sansastark", password:"sansastark", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Daenerys", lastname: "Targaryen", username: "daenerys", password:"daenerys", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Khal", lastname: "Drogo", username: "khaldrogo", password:"khaldrogo", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Cersei", lastname: "Lannister", username: "cersei", password:"cersei", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Tyrion", lastname: "Lannister", username: "tyrion", password:"tyrion", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Joffrey", lastname: "Baratheon", username: "joffrey", password:"joffrey", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Sandor", lastname: "Clegane", username: "sandor", password:"sandor", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Red", lastname: "Woman", username: "redwoman", password:"redwoman", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Ramsay", lastname: "Bolton", username: "ramsay", password:"ramsay", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Hodor", lastname: "hodor", username: "hodorhodor", password:"hodorhodor", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Petyr", lastname: "Baelish", username: "petyrbaelish", password:"petyrbaelish", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Lord", lastname: "Varys", username: "lordvarys", password:"lordvarys", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Margaery", lastname: "Tyrell", username: "margaery", password:"margaery", gender:"female", birthday:"May 01, 2016"})

User.create({firstname: "Stannis", lastname: "Baratheon", username: "stannis", password:"stannis", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Theon", lastname: "Greyjoy", username: "theongreyjoy", password:"theongreyjoy", gender:"male", birthday:"May 01, 2016"})

User.create({firstname: "Oberyn", lastname: "Martell", username: "oberyn", password:"oberyn", gender:"male", birthday:"May 01, 2016"})
