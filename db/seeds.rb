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
# ActiveStorage::Blob.destroy_all
# ActiveStorage::Blob.connection.execute('ALTER SEQUENCE active_storage_blob_id_seq RESTART WITH 1')
# ActiveStorage::Attachment.destroy_all
# ActiveStorage::Attachment.connection.execute('ALTER SEQUENCE active_storage_attachment_id_seq RESTART WITH 1')

seeds = [
  {
    user: {
      band_name: 'Leon Bridges',
      location: 'Atlanta, GA'
    },
    albums: [
      {
        album_name: 'All About You',
        track_names: ['All About You'],
        release_date: [2020, 10, 16]
      }
    ]
  },
  {
    user: {
      band_name: 'A Tribe Called Quest',
      location: 'New York, NY'
    },
    albums: [
      {
        album_name: 'The Low End Theory',
        track_names: ['Excursions', "Buggin' Out", 'Rap Promoter', 'Butter', 'Verses from the Abstract'],
        release_date: [1991, 9, 24]
      },
      {
        album_name: 'Midnight Marauders',
        track_names: ['Midnight Marauders Tour Guide', 'Steve Biko (Stir It Up)', 'Award Tour', '8 Million Stories', 'Midnight'],
        release_date: [1993, 11, 9]
      },
      {
        album_name: 'Beats, Rhymes and Life',
        track_names: ['Phony Rappers', 'Get a Hold', 'Motivators', 'Jam', 'Crew'],
        release_date: [1996, 7, 30]
      },
      {
        album_name: 'We Got It from Here... Thank You 4 Your Service',
        track_names: ['The Space Program', 'We the People....', 'Whateva Will Be', 'Solid Wall of Sound', 'Dis Generation'],
        release_date: [2016, 11, 11]
      }
    ]
  },
  {
    user: {
      band_name: 'Boards of Canada',
      location: 'Edinburgh, United Kingdom'
    },
    albums: [
      {
        album_name: 'Music Has the Right to Children',
        track_names: ['Wildlife Analysis', 'An Eagle in Your Mind', 'The Color of the Fire', 'Telephasic Workshop', 'Triangles & Rhombuses'],
        release_date: [1998, 4, 20]
      },
      {
        album_name: 'Geogaddi',
        track_names: ['Ready Lets Go', 'Music Is Math', 'Beware the Friendly Stranger', 'Gyroscope', 'Dandelion'],
        release_date: [2002, 2, 13]
      },
      {
        album_name: 'The Campfire Headphase',
        track_names: ['Into the Rainbow Vein', 'Chromakey Dreamcoat', 'Satellite Anthem Icarus', 'Peacock Tail', 'Dayvan Cowboy'],
        release_date: [2005, 10, 17]
      }
    ]
  },
  {
    user: {
      band_name: 'Animal Collective',
      location: 'Baltimore, MD'
    },
    albums: [
      {
        album_name: "Spirit They're Gone Spirit They've Vanished",
        track_names: ["Spirit They've Vanished", 'April and the Phantom', 'Untitled', 'Penny Dreadfuls', 'Chocolate Girl'],
        release_date: [2000, 7, 31]
      },
      {
        album_name: 'Sung Tongs',
        track_names: ['Leaf House', 'Who Could Win a Rabbit', 'The Softest Voice', 'Winters Love', 'Kids on Holiday'],
        release_date: [2004, 5, 3]
      },
      {
        album_name: 'Merriweather Post Pavilion',
        track_names: ['In the Flowers', 'My Girls', 'Also Frightened', 'Summertime Clothes', 'Daily Routine'],
        release_date: [1993, 11, 9]
      }
    ]
  },
  {
    user: {
      band_name: 'Radiohead',
      location: 'Abingdon, United Kingdom'
    },
    albums: [
      {
        album_name: 'OK Computer',
        track_names: ['Airbag', 'Soft as Snow (But Warm Inside)', 'Subterranean Homesick Alien', 'Exit Music (For a Film)', ' Let Down'],
        release_date: [1997, 6, 16]
      },
      {
        album_name: 'Kid A ',
        track_names: ['Everything in Its Right Place', 'Kid A', 'The National Anthem', 'How to Disappear Completely', ' Treefingers'],
        release_date: [2000, 10, 3]
      },
      {
        album_name: 'In Rainbows',
        track_names: ['15 Step', 'Bodysnatchers', 'Nude', 'Weird Fishes / Arpeggi', 'All I Need'],
        release_date: [2007, 10, 10]
      }
    ]
  },
  {
    user: {
      band_name: 'The Strokes',
      location: 'New York, NY'
    },
    albums: [
      {
        album_name: 'Is This It',
        track_names: ['Is This It', 'The Modern Age', 'Soma', 'Barely Legal', 'Someday'],
        release_date: [2001, 8, 20]
      },
      {
        album_name: 'Room on Fire',
        track_names: ['What Ever Happened?', 'Reptilia', 'Automatic Stop', '12:51', 'You Talk Way Too Much'],
        release_date: [2003, 10, 28]
      },
      {
        album_name: 'Comedown Machine',
        track_names: ['Tap Out', 'All the Time', 'One Way Trigger', 'Welcome to Japan', "80's Comedown Machine"],
        release_date: [2013, 3, 26]
      },
      {
        album_name: 'The New Abnormal',
        track_names: ['The Adults Are Talking', 'Selfless', 'Brooklyn Bridge to Chorus', 'Bad Decisions', 'Eternal Summer'],
        release_date: [2020, 4, 10]
      }
    ]
  }
  {
    user: {
      band_name: 'Phoebe Bridgers',
      location: 'Los Angeles, CA'
    },
    albums: [
      {
        album_name: 'Stranger in the Alps',
        track_names: ['Motion Sickness', 'Smoke Signals', 'Funeral', 'Demi Moore', 'Scott Street'],
        release_date: [2017, 9, 22]
      },
      {
        album_name: 'Punisher',
        track_names: ['DVD Menu', 'Garden Song', 'Kyoto', 'Punisher', 'Halloween'],
        release_date: [2020, 6, 18]
      }
    ]
  },
  {
    user: {
      band_name: 'Patti Smith',
      location: 'Chicago, IL'
    },
    albums: [
      {
        album_name: 'Horses',
        track_names: ['Gloria', 'Redondo Beach', 'Birdland', 'Free Money', 'Kimberly'],
        release_date: [1975, 12, 13]
      },
      {
        album_name: 'Radio Ethiopia',
        track_names: ['Ask the Angels', "Ain't It Strange", 'Poppies', 'Pissing in a River', 'Pumping (My Heart)'],
        release_date: [1976, 10, 22]
      }
    ]
  },
  {
    user: {
      band_name: 'My Bloody Valentine',
      location: 'Dublin, Ireland'
    },
    albums: [
      {
        album_name: "Isn't Anything",
        track_names: ['Soft as Snow (But Warm Inside)', 'Lose My Breath', 'Cupid Come', "(When You Wake) You're Still in a Dream", 'No More Sorry'],
        release_date: [1988, 11, 21]
      },
      {
        album_name: 'Loveless',
        track_names: ['Only Shallow', 'Loomer', 'Touched" (instrumental)', 'To Here Knows When', 'When You Sleep'],
        release_date: [1991, 11, 4]
      },
      {
        album_name: 'm b v',
        track_names: ['She Found Now', 'Only Tomorrow', 'Who Sees You', 'Is This and Yes', 'If I Am'],
        release_date: [2013, 2, 2]
      }
    ]
  },
  {
    user: {
      band_name: 'The Antlers',
      location: 'New York, NY'
    },
    albums: [
      {
        album_name: 'Hospice',
        track_names: %w[Prologue Kettering Sylvia Atrophy Bear],
        release_date: [2009, 3, 23]
      },
      {
        album_name: 'Familiars',
        track_names: %w[Palace Doppelgänger Hotel Intruders Director],
        release_date: [2014, 6, 417]
      }
    ]
  },
  {
    user: {
      band_name: 'Talking Heads',
      location: 'New York, NY'
    },
    albums: [
      {
        album_name: '77',
        track_names: ['Uh-Oh, Love Comes to Town', 'New Feeling', 'Tentative Decisions', 'Happy Day', 'Who Is It?'],
        release_date: [1977, 9, 16]
      },
      {
        album_name: 'More Songs About Buildings and Food',
        track_names: ['Thank You for Sending Me an Angel', 'With Our Love', 'The Good Thing', 'Warning Sign', 'The Girls Want to Be With the Girls'],
        release_date: [1978, 7, 7]
      },
      {
        album_name: 'Fear of Music',
        track_names: ['I Zimbra', 'Mind', 'Paper', 'Cities', 'Life During Wartime'],
        release_date: [1979, 8, 3]
      },
      {
        album_name: 'Remain in Light',
        track_names: ['Born Under Punches (The Heat Goes On)', 'Crosseyed and Painless', 'The Great Curve', 'Once in a Lifetime', 'Houses in Motion'],
        release_date: [1980, 10, 8]
      }
    ]
  },
]

seeds.each do |seed|
  band_name = seed[:user][:band_name]
  location = seed[:user][:location]
  formatted_band_name = band_name.delete(".,'-?():&/").downcase.split.join('_')
  profile_pic_filename = "#{formatted_band_name}-profile_pic.jpg"

  puts
  puts
  puts "https://groove-town-seeds.s3-us-west-1.amazonaws.com/avatars/#{profile_pic_filename}"
  puts
  puts

  profile_pic_url = open("https://groove-town-seeds.s3-us-west-1.amazonaws.com/avatars/#{profile_pic_filename}")

  band = User.new(username: formatted_band_name,
                  email: "#{formatted_band_name}@groovetown.com",
                  password: 'me4SNq^3eJL3Jhfs',
                  band: band_name,
                  location: location)
  band.avatar.attach(io: profile_pic_url, filename: profile_pic_filename)
  band.save!

  seed[:albums].each do |seed_album|
    formatted_album_name = seed_album[:album_name].delete(".,'-?():&/").downcase.split.join('_')
    filename = "#{formatted_band_name}-#{formatted_album_name}"

    puts
    puts
    puts "https://groove-town-seeds.s3-us-west-1.amazonaws.com/album-covers/#{filename}.jpg"
    puts
    puts

    album_art_url = open("https://groove-town-seeds.s3-us-west-1.amazonaws.com/album-covers/#{filename}.jpg")

    album = Album.new(name: seed_album[:album_name],
                      user_id: band.id,
                      release_date: DateTime.new(seed_album[:release_date][0], seed_album[:release_date][1], seed_album[:release_date][2]).in_time_zone)
    album.art.attach(io: album_art_url, filename: filename)
    album.save!

    seed_album[:track_names].each_with_index do |track_name, index|
      track_filename = "#{filename}-0#{index + 1}.mp3"

      puts
      puts
      puts "https://groove-town-seeds.s3-us-west-1.amazonaws.com/audio/#{track_filename}"
      puts
      puts

      track_audio = open("https://groove-town-seeds.s3-us-west-1.amazonaws.com/audio/#{track_filename}")

      track_duration = Mp3Info.open(track_audio).length
      track = Track.new(name: track_name,
                        ord: index + 1,
                        user_id: band.id,
                        album_id: album.id,
                        duration: track_duration)

      track.audio.attach(io: track_audio,
                         filename: track_filename)
      track.save!
    end
  end
end
