require 'pry'
require 'humanize'
require_relative 'say.rb'

puts Say.in_english(0)
puts Say.in_english(9)
puts Say.in_english(14)
puts Say.in_english(50)
puts Say.in_english(98)
puts Say.in_english(-20395)
puts Say.in_english(100)
puts Say.in_english(201)
puts Say.in_english(1001)
puts Say.in_english(10001)
puts Say.in_english(100001)
puts Say.in_english(1000001)

binding.pry
