# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Album.destroy_all
Album.connection.execute('ALTER SEQUENCE albums_id_seq RESTART WITH 1')

demo_user = User.create(username: 'demoUser',
                        email: 'demouser@artistshack.com',
                        password: 'password',
                        band: 'Demo Band')

patti_smith = User.create(username: 'pattismith',
                          email: 'patti@pattismith.net',
                          password: 'password',
                          band: 'Patti Smith')

horses = Album.create(name: 'Horses', user_id: patti_smith.id)

joy_division = User.create(username: 'joydivision',
                           email: 'joydivision@joydivision.com',
                           password: 'password',
                           band: 'Joy Division')
unknown_pleasures = Album.create(name: 'Unknown Pleasures', user_id: joy_division.id)
closer = Album.create(name: 'Closer', user_id: joy_division.id)

new_order = User.create(username: 'neworder',
                        email: 'neworder@neworder.com',
                        password: 'password',
                        band: 'New Order')

power_corruption_lies = Album.create(name: 'Power, Corruption & Lies', user_id: new_order.id)

the_strokes = User.create(username: 'thestrokes',
                          email: 'thestrokes@thestrokes.com',
                          password: 'password',
                          band: 'The Strokes')
is_this_it = Album.create(name: 'Is This It', user_id: the_strokes.id)
the_new_abnormal = Album.create(name: 'The New Abnormal', user_id: the_strokes.id)

fleet_foxes = User.create(username: 'fleetfoxes',
                          email: 'fleetfoxes@fleetfoxes.com',
                          password: 'password',
                          band: 'Fleet Foxes')
helplessness_blues = Album.create(name: 'Helplessness Blues', user_id: fleet_foxes.id)
crack_up = Album.create(name: 'Crack-Up', user_id: fleet_foxes.id)

talking_heads = User.create(username: 'talkingheads',
                            email: 'talkingheads@talkingheads.com',
                            password: 'password',
                            band: 'Talking Heads')
seventy_seven_77 = Album.create(name: '77', user_id: talking_heads.id)
remain_in_light = Album.create(name: 'Remain in Light', user_id: talking_heads.id)

jamie_xx = User.create(username: 'jamiexx',
                       email: 'jamiexx@jamiexx.com',
                       password: 'password',
                       band: 'Jamie xx')
in_colour = Album.create(name: 'In Colour', user_id: jamie_xx.id)

weyes_blood = User.create(username: 'weyesblood',
                          email: 'weyesblood@weyesblood.com',
                          password: 'password',
                          band: 'Weyes Blood')
titanic_rising = Album.create(name: 'Titanic Rising', user_id: weyes_blood.id)

my_bloody_valentine = User.create(username: 'mybloodyvalentine',
                                  email: 'mybloodyvalentine@mybloodyvalentine.com',
                                  password: 'password',
                                  band: 'My Bloody Valentine')
loveless = Album.create(name: 'Loveless', user_id: my_bloody_valentine.id)

tribe_called_quest = User.create(username: 'tribecalledquest',
                                 email: 'tribecalledquest@tribecalledquest.com',
                                 password: 'password',
                                 band: 'A Tribe Called Quest')
low_end_theory = Album.create(name: 'The Low End Theory', user_id: tribe_called_quest.id)
midnight_marauders = Album.create(name: 'Midnight Marauders', user_id: tribe_called_quest.id)
we_got_it_from_here = Album.create(name: 'We Got It from Here... Thank You 4 Your Service', user_id: tribe_called_quest.id)

kids_see_ghosts = User.create(username: 'kids_see_ghosts',
                              email: 'kids_see_ghosts@kids_see_ghosts.com',
                              password: 'password',
                              band: 'Kids See Ghosts')
kids_see_ghosts_album = Album.create(name: 'The Low End Theory', user_id: kids_see_ghosts.id)

godspeed_you = User.create(username: 'godspeedyoublackemporer',
                           email: 'godspeedyoublackemporer@godspeedyoublackemporer.com',
                           password: 'password',
                           band: 'Godspeed You! Black Emperor')
lift_your_skinny_fists = Album.create(name: 'Godspeed You! Black Emperor Lift Your Skinny Fists Like Antennas to Heaven', user_id: godspeed_you.id)
luciferian_towers = Album.create(name: 'Luciferian Towers', user_id: godspeed_you.id)

king_crimson = User.create(username: 'kingcrimson',
                           email: 'kingcrimson@kingcrimson.com',
                           password: 'password',
                           band: 'King Crimson')
in_the_court_of_the_crimson_king = Album.create(name: 'In the Court of the Crimson King', user_id: king_crimson.id)

porter_robinson = User.create(username: 'porterrobinson',
                              email: 'porterrobinson@porterrobinson.com',
                              password: 'password',
                              band: 'Porter Robinson')
worlds = Album.create(name: 'Worlds', user_id: porter_robinson.id)

madvillain = User.create(username: 'madvillain',
                         email: 'madvillain@madvillain.com',
                         password: 'password',
                         band: 'Madvillain')
madvillainy = Album.create(name: 'Madvillainy', user_id: madvillain.id)

idles = User.create(username: 'idles',
                    email: 'idles@idles.com',
                    password: 'password',
                    band: 'IDLES')
brutalism = Album.create(name: 'Brutalism', user_id: idles.id)
ultra_mono = Album.create(name: 'Ultra Mono', user_id: idles.id)
