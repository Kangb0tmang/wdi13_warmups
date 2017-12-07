# find items sum to given input
# turn values into array, then iterate

require 'pry'

allergy_list = {
  'eggs' => 1,
  'peanuts' => 2,
  'shellfish' => 4,
  'strawberries' => 8,
  'tomatoes' => 16,
  'chocolate' => 32,
  'pollen' => 64,
  'cats' => 128
}

puts allergy_list.values.reduce(:+)

# def initialize
#
# end
#
# def allergic_to?
#
# end
#
# def list
#
# end

# allergy_list.each do |allergy, score|
#   puts allergy
#   puts score
# end