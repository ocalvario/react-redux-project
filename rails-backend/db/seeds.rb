# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bison = Cat.create(name: 'Bizon', image_url: 'shorturl.at/nzQW3', country: 'Bulgaria')
loki = Cat.create(name: 'Loki', image_url: 'shorturl.at/glAS7', country: 'USA')

flatscreen = Gadget.create(cat_id: 1, name: "Big TV", image_url: 'shorturl.at/iCEI5', description: 'For watching all your favorite kitty shows', link: 'shorturl.at/bkqv8' )
tower = Gadget.create(cat_id: 2, name: 'Cat Condo', image_url: 'https://bit.ly/2F6FVX5', description: 'Luxury cat home and scratch post', link: 'https://bit.ly/33F22hB' )
