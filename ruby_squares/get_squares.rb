require 'pry'

def get_squares(arr)
  results = []
  arr.each do |num|
    # if Math.sqrt(num) % 1 == 0
    if (Math.sqrt(num) % 1).zero?
      results.push(num)
    end
  end
  puts results.sort.uniq
end
get_squares([4, 1, 16, 1, 10, 35, 22])

binding.pry
