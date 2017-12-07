require 'roman_converter'

describe RomanConverter do
  
  it 'saves a string' do
    converter = RomanConverter.new('VIII')
      expect(converter.roman).to eq 'VIII'
  end

  it 'converts letters to numbers' do
    converter = RomanConverter.new('VIII')
      expect(converter.number).to eq 8
  end

  it 'sums larger numbers' do
    converter = RomanConverter.new('MMVIII')
      expect(converter.number).to eq 2008
  end

  it 'subtracts numbers if a smaller value comes before a larger one' do
    converter = RomanConverter.new('IV')
      expect(converter.number).to eq 4
  end

  it 'sums larger numbers that need subtraction' do
    converter = RomanConverter.new('MCMXC')
      expect(converter.number).to eq 1990
    end
end

class RomanConverter
  attr_reader :roman

  def initialize(roman_string)
    @roman = roman_string
    @map = {I: 1, V: 5, X: 10, L: 50, C: 100, D:500, M: 1000}
  end

  def number
    roman_arr = @roman.split('')
    number_arr = roman_arr.map {|letter| @map[letter.to_sym] }
    value_arr = []
    until number_arr.length <= 1 do
      if number_arr[number_arr.length - 1] > number_arr[number_arr.length - 2]
        val = number_arr[number_arr.length - 1] - number_arr[number_arr.length - 2]
        value_arr.push(val)
        number_arr.slice!(number_arr.length - 2, 2)
      else
        value_arr.push(number_arr[number_arr.length - 1])
        number_arr.slice!(number_arr.length - 1, 1)
      end
    end
    if number_arr[0]
      value_arr.push(number_arr[0])
      number_arr.slice!(0,1)
    end
    @number = value_arr.inject(0) {|sum,x| sum + x }
  end

end