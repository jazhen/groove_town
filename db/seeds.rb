# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

demo_user = User.create(username: 'demoUser',
                        email: 'demouser@artistshack.com',
                        password: 'password')

user1 = User.create(username: Faker::Name.unique.name,
                    email: Faker::Internet.unique.email,
                    password: 'password')

user2 = User.create(username: Faker::Name.unique.name,
                    email: Faker::Internet.unique.email,
                    password: 'password')

user3 = User.create(username: Faker::Name.unique.name,
                    email: Faker::Internet.unique.email,
                    password: 'password')

user4 = User.create(username: Faker::Name.unique.name,
                    email: Faker::Internet.unique.email,
                    password: 'password')

user5 = User.create(username: Faker::Name.unique.name,
                    email: Faker::Internet.unique.email,
                    password: 'password')
