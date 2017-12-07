blocks =
[['B','O'],
['X','K'],
['D','Q'],
['C','P'],
['N','A'],
['G','T'],
['R','E'],
['T','G'],
['Q','D'],
['F','S'],
['J','W'],
['H','U'],
['V','I'],
['A','N'],
['E','R'],
['F','S'],
['L','Y'],
['P','C'],
['Z','M'],]
string = 'BARK'
new_blocks = blocks.flatten.join

puts new_blocks
puts new_blocks.include?(string)

# new_blocks = blocks.flatten.sort

# True
# A
# BARK
# TREAT
# SQUAD
# CONFUSE

# False
# COMMON
# BOOK
# BOUGHT
