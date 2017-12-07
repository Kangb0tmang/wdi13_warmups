require 'pry'


def word_balance(word)
  key = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
  word_arr = word.split('')
  num_arr = word_arr.map {|letter| key[letter.to_sym] }
  num_arr.each_with_index do |value, index|
    left = (0..index).to_a
    right = (index..(num_arr.length - 1)).to_a
    left_total = 0
    left.each do |value|
      left_total = left_total + (num_arr[value] * (index - value))
    end
    right_total = 0
    right.each do |value|
      right_total = right_total + (num_arr[value] * (value - index))
    end
    if left_total == right_total
      puts "#{left_total} 'split on' #{word_arr[index]}"
    # else
    #   puts "#{word_arr.join('')} 'doesnt balance"
    end
  end
end

word_balance('stead')
word_balance('consubstantiation')
word_balance('unintelligibility')