def get_squares(arrNum)
  rootNumbers = arrNum.select do |num|
  Math.sqrt(num) % 1 == 0
  end
  rootNumbers.uniq.sort
end

numb = get_squares(numbersArr)