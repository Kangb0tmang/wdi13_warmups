values = {
  'A' => 1,
  'B' => 2,
  'C' => 3,
  'D' => 4,
  'E' => 5,
  'F' => 6,
  'G' => 7,
  'H' => 8,
  'I' => 9,
  'J' => 10,
  'K' => 11,
  'L' => 12,
  'M' => 13,
  'N' => 14,
  'O' => 15,
  'P' => 16,
  'Q' => 17,
  'R' => 18,
  'S' => 19,
  'T' => 20,
  'U' => 21,
  'V' => 22,
  'W' => 23,
  'X' => 24,
  'Y' => 25,
  'Z' => 26
}

# range A-Z, 1-26 then put into hash instead of typing it out

# word = 'STEAD'.split('')
# number_arr = []
# word.each do |letter|
#   puts letter
#   values.each do |key, value|
#     if letter == key
#       number_arr.push(value)
#     end
#     puts number_arr
#     puts key
#     puts value
#   end
# end

# Split word into array
# Get letter value from values hash
# Push number into array
# Push letter into another array

# S (19) (19)
# T (20)
# E (5) (5)
# A (1) (2)
# D (4) (12)

# W (23) (69)
# R (18) (36)
# O (15) (15) (120)
# N (14)
# G (7) (7)
# H (8) (16)
# E (5) (15)
# A (1) (4)
# D (4) (20)
# E (5) (30)
# D (4) (28) (120)

# C (3) (24)
# O (15) (105)
# N (14) (84)
# S (19) (95)
# U (21) (84)
# B (2) (6)
# S (19) (38)
# T (20) (20)
# A (1)
# N (14) (14)
# T (20) (40)
# I (9) (27)
# A (1) (4)
# T (20) (100)
# I (9) (54)
# O (15) (105)
# N (14) (112)
