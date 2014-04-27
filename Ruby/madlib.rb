random = srand % 2;

if random == 0

	print "name: "
	name = gets.chomp.capitalize;
	print "something you do daily: "
	verb_1 = gets.chomp;
	print "drink you like: "
	noun_3 = gets.chomp;
	print "something you love: "
	noun_1 = gets.chomp;
	print "embarrassing action: "
	verb_2 = gets.chomp;
	print "color: "
	adjective_2 = gets.chomp;
	print "animal: "
	noun_2 = gets.chomp;

	puts "\nHi my name is #{name}. Let me talk about myself."
	puts "I like to #{verb_1}. I do it when I'm happy."
	puts "On a regular day, I tend to need to #{verb_2}. I am proud."
	puts "I like to drink #{noun_3}, it makes my teeth #{adjective_2}."
	puts "I hate #{noun_1}, they make me angry."
	puts "Sometimes I eat #{noun_2}, but dont tell anyone :].\n\n"

elsif random == 1

	print "name: "
	name = gets.chomp.capitalize
	print "gender: "
	gender = gets.chomp.downcase
	print "something good smelling: "
	adjective_2 = gets.chomp

	if gender == "male"
		gender = "girl"
		gender_2 = "she"
		adjective_1 = "pretty"
	elsif gender == "female"
		gender = "boy"
		gender_2 = "he"
		adjective_1 = "handsome"
	else
		gender = "creature"
		gender_2 = "it"
		adjective_1 = "beautiful"
	end

	puts "\nThere once was a #{gender} named #{name}. #{gender_2.capitalize} was very #{adjective_1}."
	puts "#{name} lived in a forest. One day #{gender_2} discovered a cave out of nowhere."
	puts "The cave smelled like #{adjective_2} and so #{name} went to explore."
	puts "#{name} was nowhere to be found\n\n"


end