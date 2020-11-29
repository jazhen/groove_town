require 'mp3info'

def audio_duration(audio)
  total_seconds = Mp3Info.open(audio).length
  minutes = ((total_seconds % 3600) / 60).floor.to_s.rjust(2, '0')
  seconds = (total_seconds % 60).floor.to_s.rjust(2, '0')
  "#{minutes}:#{seconds}"
end
