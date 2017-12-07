class Scrabble
  def score(string)
    @string_arr = string.downcase().split('')
    @string_arr.each do |letter|
      letter.gsub!(/[aeioulnrst]/, '1')
      letter.gsub!(/[dg]/, '2')
      letter.gsub!(/[bcmp]/, '3')
      letter.gsub!(/[fhvwy]/, '4')
      letter.gsub!(/[k]/, '5')
      letter.gsub!(/[jx]/, '8')
      letter.gsub!(/[qz]/, '10')
    end
    @score = @string_arr.inject { |sum, n| (sum.to_i) + (n.to_i) }
    puts @score
  return self
  end

  def double_word
    @score * 2
  end

  def triple_word
    @score * 3
  end

  def double_letter(pos)
    val = @string_arr[(pos - 1)]
    num = (val.to_i * 2)
    @string_arr[(pos - 1)] = num.to_s
    @score = @string_arr.inject { |sum, n| (sum.to_i) + (n.to_i) }
    puts @score
  return self
  end

  def triple_letter(pos)
    val = @string_arr[(pos - 1)]
    num = (val.to_i * 3)
    @string_arr[(pos - 1)] = num.to_s
    @score = @string_arr.inject { |sum, n| (sum.to_i) + (n.to_i) }
    puts @score
  return self
  end

end