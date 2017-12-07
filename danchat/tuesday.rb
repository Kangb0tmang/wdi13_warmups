# Ask question = 'Sure.'
# Tell him something (no question mark) = 'Whatever'
# YELL AT HIM = 'Whoa, chill out!'
# Nothing = 'Fine. Be that way!'

require 'pry'

puts 'What do you want to say to Daniel?'
puts "Press ctrl+c if you've had enough talking to Daniel..."

loop do
   input = gets.chomp.to_s

   def conversation(input)
      if input[-1] == '?'
         puts 'Sure.'
      elsif input == /[A-Z]0-9/ && input != ""
         puts 'Whoa, chill out!'
      elsif input == ""
         puts 'Fine. Be that way!'
      else
         puts 'Whatever'
      end
   end

   conversation(input)
end

# Extension l33t sP34k
# Vowels: a=4, e=3, i=1, o=0
# Not vowel = lowercase
# If second letter is vowel, its uppercase
# Sentence must start with "Bro" or "bro"
# element.tr("aeio", "4310")

# puts "l33t sP34k Bro?"
# input = gets.chomp.to_s
#
# def l33tsP34k(input)
#    if input == "Bro" || input == 'bro'
#       puts "I will tranlsate this for you bro"
#    else
#       puts "Can't help you bro"
#    end
# end
# l33tsP34k(input)

binding.pry
puts 'End of program'
