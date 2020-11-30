# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'mp3info'

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Album.destroy_all
Album.connection.execute('ALTER SEQUENCE albums_id_seq RESTART WITH 1')
Track.destroy_all
Track.connection.execute('ALTER SEQUENCE tracks_id_seq RESTART WITH 1')

################################################################################

demo_user = User.create(username: 'demoUser',
                        email: 'demouser@groovetown.com',
                        password: 'password',
                        band: 'Demo Band')

################################################################################
################################################################################

# band_name = 'Phoebe Bridgers'
# formatted_band_name = band_name.downcase.split.join('_')
# band = User.create(username: formatted_band_name,
#                    email: "#{formatted_band_name}@groovetown.com",
#                    password: 'password',
#                    band: band_name)

################################################################################

# seeds = [
#   {
#     user: {
#       band_name: 'Phoebe Bridgers'
#     },
#     albums: [
#       {
#         album_name: 'Stranger in the Alps',
#         track_names: ['Motion Sickness', 'Smoke Signals', 'Funeral', 'Demi Moore', 'Scott Street'],
#         release_date: [2017, 9, 22]
#       },
#       {
#         album_name: 'Punisher',
#         track_names: ['DVD Menu', 'Garden Song', 'Kyoto', 'Punisher', 'Halloween'],
#         release_date: [2020, 6, 18]
#       }
#     ]
#   },
#   {
#     user: {
#       band_name: 'A Tribe Called Quest'
#     },
#     albums: [
#       {
#         album_name: 'The Low End Theory',
#         track_names: ['Excursions', "Buggin' Out", 'Rap Promoter', 'Butter', 'Verses from the Abstract'],
#         release_date: [1991, 9, 24]
#       },
#       {
#         album_name: 'Midnight Marauders',
#         track_names: ['Midnight Marauders Tour Guide', 'Steve Biko (Stir It Up)', 'Award Tour', '8 Million Stories', 'Midnight'],
#         release_date: [1993, 11, 9]
#       },
#       {
#         album_name: 'Beats, Rhymes and Life',
#         track_names: ['Phony Rappers', 'Get a Hold', 'Motivators', 'Jam', 'Crew'],
#         release_date: [1996, 7, 30]
#       },
#       {
#         album_name: 'We Got It from Here... Thank You 4 Your Service',
#         track_names: ['The Space Program', 'We the People....', 'Whateva Will Be', 'Solid Wall of Sound', 'Dis Generation'],
#         release_date: [2016, 11, 11]
#       }
#     ]
#   }
# ]

# seeds.each do |seed|
#   band_name = seed[:user][:band_name]
#   formatted_band_name = band_name.delete('.,').downcase.split.join('_')
#   band = User.create(username: formatted_band_name,
#                      email: "#{formatted_band_name}@groovetown.com",
#                      password: 'password',
#                      band: band_name)

#   seed[:albums].each do |seed_album|
#     formatted_album_name = seed_album[:album_name].delete('.,').downcase.split.join('_')
#     filename = "#{formatted_band_name}-#{formatted_album_name}"
#     album_art_url = open("https://groove-town-seeds.s3-us-west-1.amazonaws.com/album-covers/#{filename}.jpg")
#     puts filename
#     puts
#     album = Album.create(name: seed_album[:album_name],
#                          user_id: band.id,
#                          release_date: DateTime.new(seed_album[:release_date][0], seed_album[:release_date][1], seed_album[:release_date][2]).in_time_zone)
#     album.art.attach(io: album_art_url, filename: filename)

#     seed_album[:track_names].each_with_index do |track_name, index|
#       track_filename = "#{filename}-0#{index + 1}.mp3"
#       puts track_filename
#       puts
#       track_audio = open("https://groove-town-seeds.s3-us-west-1.amazonaws.com/audio/#{track_filename}")

#       track_duration = Mp3Info.open(track_audio).length
#       track = Track.create(name: track_name,
#                            ord: index + 1,
#                            user_id: band.id,
#                            album_id: album.id,
#                            duration: track_duration)

#       track.audio.attach(io: track_audio,
#                          filename: track_filename)
#     end
#   end
# end

################################################################################

# track_names = ['Motion Sickness', 'Smoke Signals', 'Funeral', 'Demi Moore', 'Scott Street']

# track_names.each_with_index do |track_name, index|
#   Track.create(name: track_name,
#                ord: index + 1,
#                user_id: band.id,
#                album_id: album.id)
# end

# stranger_in_the_alps_01 = Track.create(name: 'Motion Sickness',
#                                        ord: 1,
#                                        user_id: phoebe_bridgers.id,
#                                        album_id: stranger_in_the_alps.id)

# stranger_in_the_alps_01_audio = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/audio/phoebe_bridgers-stranger_in_the_alps-01.mp3')

# stranger_in_the_alps_01.audio.attach(io: stranger_in_the_alps_01_audio,
#                                      filename: 'phoebe_bridgers-stranger_in_the_alps-01.mp3')

################################################################################

# stranger_in_the_alps = Album.create(name: 'Stranger in the Alps',
#                                     user_id: phoebe_bridgers.id)

# stranger_in_the_alps_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/album-covers/phoebe_bridgers-stranger_in_the_alps.jpg')

# stranger_in_the_alps.art.attach(io: stranger_in_the_alps_art, filename: 'phoebe_bridgers-stranger_in_the_alps.jpg')

################################################################################

# stranger_in_the_alps_01 = Track.create(name: 'Motion Sickness',
#                                        ord: 1,
#                                        user_id: phoebe_bridgers.id,
#                                        album_id: stranger_in_the_alps.id)

# stranger_in_the_alps_01_audio = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/audio/phoebe_bridgers-stranger_in_the_alps-01.mp3')

# stranger_in_the_alps_01.audio.attach(io: stranger_in_the_alps_01_audio,
#                                      filename: 'phoebe_bridgers-stranger_in_the_alps-01.mp3')

# stranger_in_the_alps_02 = Track.create(name: 'Smoke Signals',
#                                        ord: 2,
#                                        user_id: phoebe_bridgers.id,
#                                        album_id: stranger_in_the_alps.id)

# stranger_in_the_alps_02_audio = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/audio/phoebe_bridgers-stranger_in_the_alps-02.mp3')

# stranger_in_the_alps_02.audio.attach(io: stranger_in_the_alps_02_audio,
#                                      filename: 'phoebe_bridgers-stranger_in_the_alps-02.mp3')

# stranger_in_the_alps_03 = Track.create(name: 'Funeral',
#                                        ord: 3,
#                                        user_id: phoebe_bridgers.id,
#                                        album_id: stranger_in_the_alps.id)

# stranger_in_the_alps_03_audio = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/audio/phoebe_bridgers-stranger_in_the_alps-03.mp3')

# stranger_in_the_alps_03.audio.attach(io: stranger_in_the_alps_03_audio,
#                                      filename: 'phoebe_bridgers-stranger_in_the_alps-03.mp3')

# stranger_in_the_alps_04 = Track.create(name: 'Demi Moore',
#                                        ord: 4,
#                                        user_id: phoebe_bridgers.id,
#                                        album_id: stranger_in_the_alps.id)

# stranger_in_the_alps_04_audio = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/audio/phoebe_bridgers-stranger_in_the_alps-04.mp3')

# stranger_in_the_alps_04.audio.attach(io: stranger_in_the_alps_04_audio,
#                                      filename: 'phoebe_bridgers-stranger_in_the_alps-04.mp3')

# stranger_in_the_alps_05 = Track.create(name: 'Scott Street',
#                                        ord: 5,
#                                        user_id: phoebe_bridgers.id,
#                                        album_id: stranger_in_the_alps.id)

# stranger_in_the_alps_05_audio = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/audio/phoebe_bridgers-stranger_in_the_alps-05.mp3')

# stranger_in_the_alps_05.audio.attach(io: stranger_in_the_alps_05_audio,
#                                      filename: 'phoebe_bridgers-stranger_in_the_alps-05.mp3')

################################################################################

# punisher = Album.create(name: 'Punisher', user_id: phoebe_bridgers.id)

# punisher_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/album-covers/phoebe_bridgers-punisher.jpg')

# punisher.art.attach(io: punisher_art, filename: 'phoebe_bridgers-punisher.jpg')

################################################################################
################################################################################

# patti_smith = User.create(username: 'pattismith',
#                           email: 'patti@pattismith.net',
#                           password: 'password',
#                           band: 'Patti Smith')

# horses = Album.create(name: 'Horses',
#                       user_id: patti_smith.id)
# horses_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/patti_smith-horses.jpg')
# horses.art.attach(io: horses_art, filename: 'patti_smith-horses.jpg')

# joy_division = User.create(username: 'joydivision',
#                            email: 'joydivision@joydivision.com',
#                            password: 'password',
#                            band: 'Joy Division')

# unknown_pleasures = Album.create(name: 'Unknown Pleasures', user_id: joy_division.id)
# unknown_pleasures_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/joy_division-unknown_pleasures.jpg')
# unknown_pleasures.art.attach(io: unknown_pleasures_art, filename: 'joy_division-unknown_pleasures.jpg')

# new_order = User.create(username: 'neworder',
#                         email: 'neworder@neworder.com',
#                         password: 'password',
#                         band: 'New Order')

# power_corruption_lies = Album.create(name: 'Power, Corruption & Lies', user_id: new_order.id)
# power_corruption_lies_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/new_order-power_corruption_lies.jpg')
# power_corruption_lies.art.attach(io: power_corruption_lies_art, filename: 'new_order-power_corruption_lies.jpg')

# the_strokes = User.create(username: 'thestrokes',
#                           email: 'thestrokes@thestrokes.com',
#                           password: 'password',
#                           band: 'The Strokes')

# is_this_it = Album.create(name: 'Is This It', user_id: the_strokes.id)
# is_this_it_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/the_strokes-is_this_it.jpg')
# is_this_it.art.attach(io: is_this_it_art, filename: 'the_strokes-is_this_it.jpg')

# the_new_abnormal = Album.create(name: 'The New Abnormal', user_id: the_strokes.id)
# the_new_abnormal_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/the_strokes-the_new_abnormal.jpg')
# the_new_abnormal.art.attach(io: the_new_abnormal_art, filename: 'the_strokes-the_new_abnormal.jpg')

# talking_heads = User.create(username: 'talkingheads',
#                             email: 'talkingheads@talkingheads.com',
#                             password: 'password',
#                             band: 'Talking Heads')

# seventy_seven_77 = Album.create(name: '77', user_id: talking_heads.id)
# seventy_seven_77_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/talking_heads-77.jpg')
# seventy_seven_77.art.attach(io: seventy_seven_77_art, filename: 'talking_heads-77.jpg')

# remain_in_light = Album.create(name: 'Remain in Light', user_id: talking_heads.id)
# remain_in_light_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/talking_heads-remain_in_light.jpg')
# remain_in_light.art.attach(io: remain_in_light_art, filename: 'talking_heads-remain_in_light.jpg')

# television = User.create(username: 'television',
#                        email: 'television@television.com',
#                        password: 'password',
#                        band: 'Television')
# marquee_moon = Album.create(name: 'Marquee Moon', user_id: television.id)
# marquee_moon_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/television-marquee_moon.jpg')
# marquee_moon.art.attach(io: marquee_moon_art, filename: 'television-marquee_moon.jpg')

# adventure = Album.create(name: 'Adventure', user_id: television.id)
# adventure_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/television-adventure.jpg')
# adventure.art.attach(io: adventure_art, filename: 'television-adventure.jpg')

# weyes_blood = User.create(username: 'weyesblood',
#                           email: 'weyesblood@weyesblood.com',
#                           password: 'password',
#                           band: 'Weyes Blood')
# titanic_rising = Album.create(name: 'Titanic Rising', user_id: weyes_blood.id)
# titanic_rising_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/weyes_blood-titanic_rising.jpg')
# titanic_rising.art.attach(io: titanic_rising_art, filename: 'weyes_blood-titanic_rising.jpg')

# my_bloody_valentine = User.create(username: 'mybloodyvalentine',
#                                   email: 'mybloodyvalentine@mybloodyvalentine.com',
#                                   password: 'password',
#                                   band: 'My Bloody Valentine')

# loveless = Album.create(name: 'Loveless', user_id: my_bloody_valentine.id)
# loveless_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/my_bloody_valentine-loveless.jpg')
# loveless.art.attach(io: loveless_art, filename: 'my_bloody_valentine-loveless.jpg')

# tribe_called_quest = User.create(username: 'tribecalledquest',
#                                  email: 'tribecalledquest@tribecalledquest.com',
#                                  password: 'password',
#                                  band: 'A Tribe Called Quest')

# low_end_theory = Album.create(name: 'The Low End Theory', user_id: tribe_called_quest.id)
# low_end_theory_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/tribe_called_quest-low_end_theory.jpg')
# low_end_theory.art.attach(io: low_end_theory_art, filename: 'tribe_called_quest-low_end_theory.jpg')

# midnight_marauders = Album.create(name: 'Midnight Marauders', user_id: tribe_called_quest.id)
# midnight_marauders_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/tribe_called_quest-midnight_marauders.jpg')
# midnight_marauders.art.attach(io: midnight_marauders_art, filename: 'tribe_called_quest-midnight_marauders.jpg')

# we_got_it_from_here = Album.create(name: 'We Got It from Here... Thank You 4 Your Service', user_id: tribe_called_quest.id)
# we_got_it_from_here_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/tribe_called_quest-we_got_it_from_here.jpg')
# we_got_it_from_here.art.attach(io: we_got_it_from_here_art, filename: 'tribe_called_quest-we_got_it_from_here.jpg')

# godspeed_you = User.create(username: 'godspeedyoublackemporer',
#                            email: 'godspeedyoublackemporer@godspeedyoublackemporer.com',
#                            password: 'password',
#                            band: 'Godspeed You! Black Emperor')
# lift_your_skinny_fists = Album.create(name: 'Lift Your Skinny Fists Like Antennas to Heaven', user_id: godspeed_you.id)
# lift_your_skinny_fists_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/godspeed_you-lift_your_skinny_fists.jpg')
# lift_your_skinny_fists.art.attach(io: lift_your_skinny_fists_art, filename: 'godspeed_you-lift_your_skinny_fists.jpg')

# allelujah_dont_bend_ascend = Album.create(name: "Allelujah! Don't Bend! Ascend!", user_id: godspeed_you.id)
# allelujah_dont_bend_ascend_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/godspeed_you-allelujah_dont_bend_ascend.jpg')
# allelujah_dont_bend_ascend.art.attach(io: allelujah_dont_bend_ascend_art, filename: 'godspeed_you-allelujah_dont_bend_ascend.jpg')

# king_crimson = User.create(username: 'kingcrimson',
#                            email: 'kingcrimson@kingcrimson.com',
#                            password: 'password',
#                            band: 'King Crimson')

# in_the_court_of_the_crimson_king = Album.create(name: 'In the Court of the Crimson King', user_id: king_crimson.id)
# in_the_court_of_the_crimson_king_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/king_crimson-in_the_court_of_the_crimson_king.jpg')
# in_the_court_of_the_crimson_king.art.attach(io: in_the_court_of_the_crimson_king_art, filename: 'king_crimson-in_the_court_of_the_crimson_king.jpg')

# madvillain = User.create(username: 'madvillain',
#                          email: 'madvillain@madvillain.com',
#                          password: 'password',
#                          band: 'Madvillain')

# madvillainy = Album.create(name: 'Madvillainy', user_id: madvillain.id)
# madvillainy_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/madvillain-madvillainy.jpg')
# madvillainy.art.attach(io: madvillainy_art, filename: 'madvillain-madvillainy.jpg')

# idles = User.create(username: 'idles',
#                     email: 'idles@idles.com',
#                     password: 'password',
#                     band: 'IDLES')
# brutalism = Album.create(name: 'Brutalism', user_id: idles.id)
# brutalism_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/idles-brutalism.jpg')
# brutalism.art.attach(io: brutalism_art, filename: 'idles-brutalism.jpg')

# ultra_mono = Album.create(name: 'Ultra Mono', user_id: idles.id)
# ultra_mono_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/idles-ultra_mono.jpg')
# ultra_mono.art.attach(io: ultra_mono_art, filename: 'idles-ultra_mono.jpg')

# sun_kil_moon = User.create(username: 'sunkilmoon',
#                            email: 'sunkilmoon@sunkilmoon.com',
#                            password: 'password',
#                            band: 'Sun Kil Moon')
# benji = Album.create(name: 'Benji', user_id: sun_kil_moon.id)
# benji_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/sun_kil_moon-benji.jpg')
# benji.art.attach(io: benji_art, filename: 'sun_kil_moon-benji.jpg')

# common_as_light_and_love = Album.create(name: 'Common as Light and Love Are Red Valleys of Blood', user_id: sun_kil_moon.id)
# common_as_light_and_love_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/sun_kil_moon-common_as_light_and_love.jpg')
# common_as_light_and_love.art.attach(io: common_as_light_and_love_art, filename: 'sun_kil_moon-common_as_light_and_love.jpg')

# the_antlers = User.create(username: 'theantlers',
#   email: 'theantlers@theantlers.com',
#   password: 'password',
#   band: 'The Antlers')

# hospice = Album.create(name: 'Hospice', user_id: the_antlers.id)
# hospice_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/the_antlers-hospice.jpg')
# hospice.art.attach(io: hospice_art, filename: 'the_antlers-hospice.jpg')

# familiars = Album.create(name: 'Familiars', user_id: the_antlers.id)
# familiars_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/the_antlers-familiars.jpg')
# familiars.art.attach(io: familiars_art, filename: 'the_antlers-familiars.jpg')

# giles_corey = User.create(username: 'gilescorey',
#   email: 'gilescorey@gilescorey.com',
#   password: 'password',
#   band: 'Giles Corey')

# giles_corey_album = Album.create(name: 'Giles Corey', user_id: giles_corey.id)
# giles_corey_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/giles_corey-giles_corey.jpg')
# giles_corey_album.art.attach(io: giles_corey_art, filename: 'giles_corey-giles_corey.jpg')

# merzbow = User.create(username: 'merzbow',
#   email: 'merzbow@merzbow.com',
#   password: 'password',
#   band: 'Merzbow')

# pulse_demon = Album.create(name: 'Pulse Demon', user_id: merzbow.id)
# pulse_demon_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/merzbow-pulse_demon.jpg')
# pulse_demon.art.attach(io: pulse_demon_art, filename: 'merzbow-pulse_demon.jpg')

# animal_collective = User.create(username: 'animalcollective',
#   email: 'animalcollective@animalcollective.com',
#   password: 'password',
#   band: 'Animal Collective')

# merriweather_post_pavilion = Album.create(name: 'Merriweather Post Pavilion', user_id: animal_collective.id)
# merriweather_post_pavilion_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/animal_collective-merriweather_post_pavilion.jpg')
# merriweather_post_pavilion.art.attach(io: merriweather_post_pavilion_art, filename: 'animal_collective-merriweather_post_pavilion.jpg')

# boards_of_canada = User.create(username: 'boardsofcanada',
#   email: 'boardsofcanada@boardsofcanada.com',
#   password: 'password',
#   band: 'Boards of Canada')

# music_has_the_right_to_children = Album.create(name: 'Music Has the Right to Children', user_id: boards_of_canada.id)
# music_has_the_right_to_children_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/boards_of_canada-music_has_the_right_to_children.jpg')
# music_has_the_right_to_children.art.attach(io: music_has_the_right_to_children_art, filename: 'boards_of_canada-music_has_the_right_to_children.jpg')

# leon_bridges = User.create(username: 'leonbridges',
#   email: 'leonbridges@leonbridges.com',
#   password: 'password',
#   band: 'Leon Bridges & Lucky Daye')

# all_about_you = Album.create(name: 'All About You', user_id: leon_bridges.id)
# all_about_you_art = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/leon_bridges-all_about_you.jpg')
# all_about_you.art.attach(io: all_about_you_art, filename: 'leon_bridges-all_about_you.jpg')
