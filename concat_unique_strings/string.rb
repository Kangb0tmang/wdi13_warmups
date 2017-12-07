str1 = 'xyaabbbccccdefww'
str2 = 'xxxxyyyyabklmopq'

def longest(str1, str2)
  str1.concat(str2).split('').uniq.sort.join
end
puts longest(str1, str2)
