# Solution 1
answer = ''
until answer == 'bye'
  puts 'say something to your teenager'
  question = gets.chomp
  if question == ''
    puts 'Fine be that way'
  elsif question.end_with?('?')
    puts 'sure'
  elsif question == question.upcase
    puts 'Woah chill out'
  elsif question == 'bye'
    answer = 'bye'
  else question == question.downcase
    puts 'whatever'
  end
end

# Solution 2
def dan_speak(input)
  input.chomp!
  if input == ""
    puts "Fine. Be that way!"
  elsif input.start_with?("Bro, ")
    puts leetify input.slice(5..-1)
  elsif input == input.upcase
    puts "Woah, chill out!"
  elsif input.end_with?("?")
    puts "Sure."
  elsif input.downcase == "later"
    exit
  else
    puts "Whatever."
  end
end

def leetify(input)
  consonants = 'bcdfghjklmnpqrstvwxyz'.split('')
  input.downcase!
  input.tr!('aeio', '4310')
  input.split('').each_with_index { |char, index|
    if index > 0 && consonants.include?(char)
      if consonants.include?(input[index - 1])
        input[index] = char.upcase
      end
    end
  }
  return input
end

loop do
  print "DAN> "
  input = gets
  dan_speak(input)
end

# Solution 3
loop do
  converse = gets.chomp
  if /\?/ =~ converse[-1]
    puts "Sure."
  elsif converse == ""
    puts "Fine. Be that way!"
  elsif converse.upcase == converse
    puts "Woah, chill out!"
  else
    puts "Whatever."
  end
end

# Solution 4
loop do
  puts 'what would you like to say to Dan?'
  phrase = gets.chomp
  if phrase.split.include? 'Bro'
    leet_phrase = phrase.tr("aeio", "4310")
    # leet_phrase = leet_phrase.gsub([A-Z], [a-z])
    puts leet_phrase
    else
    if phrase[-1] == '?'
      puts 'Sure.'
    elsif phrase == phrase.gsub(/./, ' ')
      puts 'Fine. Be that way!'
    elsif phrase == phrase.upcase
      puts 'Woah, chill out!'
    elsif phrase.downcase.gsub(/\W/, '') == "end"
      puts 'K, bye....'
      break
    else
      puts 'Whatever.'
    end
  end
end

# Solution 5
you_say = ""
def leet_speak (you_say)
  you_say = you_say.tr("aeioAEIO",'43104310')
  # Words that start with a consonant start with lower case
  # Consonants after the first letter alternate upper and lower case, except the alternation starts over with lowercase after a digit (ex: sCh00l)
  puts you_say (NOT FINISHED THESE TWO)
end
loop do
  puts "Say something to Daniel"
  you_say = gets.gsub "\n", ""
  if you_say == "Stop"
    puts "Goodbye"
    break
  else you_say != "Stop"
    if you_say.downcase.include? "bro,"
      leet_speak(you_say)
    elsif you_say == ""
    puts 'Fine. Be that way!'
    elsif you_say == you_say.upcase
      puts 'Woah, chill out!'
    elsif you_say[-1] == "?"
      puts 'Sure.'
    else
      puts 'Whatever.'
    end
  end
end