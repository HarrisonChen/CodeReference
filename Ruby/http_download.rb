require 'open-uri'

url = 'https://blahblah.com' #will not work with this link

open('media_temp.mp4', 'wb') do |file|
	open(url) do |uri|
		file.write(uri.read)
	end
end
