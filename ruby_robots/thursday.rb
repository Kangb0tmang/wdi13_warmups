require 'pry'
require_relative 'ruby_robots.rb'

puts "Robot 1: "
robot1 = Robots.new
puts robot1.name
puts robot1.name
puts robot1.name

puts "Robot 2: "
robot2 = Robots.new
puts robot2.name
puts robot2.name
puts robot2.name

puts "Robot 3: "
robot3 = Robots.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name

# Extensions
# Counters
puts "Robot 3: "
robot3 = Robots.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name
puts robot3.operations_count

# Robot Time

binding.pry
