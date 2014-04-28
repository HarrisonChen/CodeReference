# A program that copies the contents of one file to another

def transfer_data(source, destination)
	source.each_line do |line|
		destination.write(line)
	end
end

source, destination = ARGV

if !source.nil? || !destination.nil?

	if File.exist?(source)
	
		source_file = File.open(source, "r")
		destination_file = File.open(destination, "w")

		puts "Transfering data from #{source} to #{destination}..."

		start_time = Time.now
		transfer_data(source_file, destination_file)
		elapsed_time = Time.now - start_time

		puts "Transfer complete in #{elapsed_time} seconds"

		source_file.close
		destination_file.close

	else

		puts "Error: source file does not exist"

	end

else

	puts "Usage: ruby transfer.rb [source file] [destination file]"

end
