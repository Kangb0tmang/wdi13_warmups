# Solution 1
require 'pry'

class Say
  def initialize(number)
    @number = number
  end
  def in_english
    single_vals = @number.split('')
    if single_vals.length >= 3 || @number.match(/\D/)
      return "Sorry that number is outside the range"
    elsif single_vals.length == 1
      map_single = {'0' => 'zero', '1' => 'one', '2'=> 'two', '3'=>'three', '4'=> 'four', '5'=>'five', '6'=>'six', '7'=>'seven', '8'=>'eight', '9'=>'nine',}
      map_single.each {|k,v| single_vals[0].sub!(k,v)}
      return single_vals[0]
    elsif single_vals[0] == '1'
      map_teens = {'10' => 'ten', '11' => 'eleven', '12' => 'twelve', '13' => 'thirteen', '14' => 'fourteen', '15' => 'fifteen', '16' => 'sixteen', '17' => 'seventeen', '18' => 'eighteen', '19' => 'nineteen'}
      map_teens.each {|k,v| @number.sub!(k,v)}
      return @number
    else
      map = {'0' => '', '2'=>'twenty', '3'=>'thirty', '4'=>'fourty', '5'=>'fifty', '6'=>'sixty', '7'=>'seventy', '8'=>'eighty', '9'=>'ninety',}
      map.each {|k,v| single_vals[0].sub!(k,v)}
      map2 = {'0' => '', '1' => '-one', '2'=> '-two', '3'=>'-three', '4'=> '-four', '5'=>'-five', '6'=>'-six', '7'=>'-seven', '8'=>'-eight', '9'=>'-nine',}
      map2.each {|k,v| single_vals[1].sub!(k,v)}
      answer = single_vals.join('')
      return answer
    end
  end
end

binding.pry

# Solution 2
class Say
  def initialize(number)
    @number = number
  end

  def in_english
    ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

    if @number >= 0 && @number < 100
      number = @number.to_s
      if @number >= 20
        "#{tens[number[0].to_i]} #{ones[number[1].to_i]}"
      elsif @number > 10
        "#{teens[number[1].to_i]}"
      elsif @number == 10
        "#{tens[number[0].to_i]}"
      elsif @number > 0
        "#{ones[number[0].to_i]}"
      else
        "zero"
      end
    else
      "Number must be between 0 and 99!"
    end
  end
end

# Solution 3
class Say
  @@ones = { 1 => "one", 2 => "two", 3 => "three" ,
              4 => "four", 5 => "five", 6 => "six", 7 => "seven",
              8 => "eight", 9 => "nine", 10 => "ten",
              11 => "eleven", 12 => "twelve", 13 => "thirteen",
              14 => "fourteen", 15 => "fifteen", 16 => "sixteen",
              17 => "seventeen", 18 => "eighteen", 19 => "nineteen"
             }
  @@twenty_plus = {2 => "twenty", 3 => "thirty", 4 => "fourty",
              5 => "fifty", 6 => "sixty", 7 => "seventy",
              8 => "eighty", 9=> "ninety"
             }
  def initialize(num)
    @num = num.to_i
  end
  def in_english
    if @num > 19
      twenty_plus = @num.digits[0]
      ones_digit = @num.digits[1]
      result = "#{@@twenty_plus[ones_digit]} #{@@ones[twenty_plus]}"
    else
      result = @@ones[@num]
    end
  end
end
puts Say.new(22).in_english

# Solution 4
class Translate
  @@ones = {"0" => "", "1" => "one", "2" => "two", "3" => "three", "4" => "four", "5" => "five", "6" => "six", "7" => "seven", "8" => "eight", "9" => "nine"}
  @@tens = { "2" => "twenty", "3" => "thirty", "4" => "forty", "5" => "fifty", "6" => "sixty", "7" => "seventy", "8" => "eighty", "9" => "ninety"}
  @@teens = { "0" => "ten", "1" => "eleven", "2" => "twelve", "3" => "thirteen", "4" => "fourteen", "5" => "fifteen", "6" => "sixteen", "7" => "seventeen", "8" => "eighteen", "9" => "nineteen" }

  def initialize(num)
    @num_is_in_range = is_num_in_range? num
    @num = num.to_s
  end

  def is_num_in_range? num
    num >= 0
  end

  def to_english
    if @num_is_in_range
      @num = @num.split('')
      translated_arr = []

      if @num[0] == "1"
        @@teens.each do |teen, value|
          if @num[1] == teen
            translated_arr.push(value)
          end
        end
      elsif @num.length == 1
        @@ones.each do |one, value|
          if @num[0] == one
            translated_arr.push(value)
          end
        end
      else
        @@tens.each do |ten, value|
          if @num[0] == ten
            translated_arr.push(value)
          end
        end
        @@ones.each do |one, value|
          if @num[1] == one
            translated_arr.push(value)
          end
        end
      end
      translated_num = "#{translated_arr[0].to_s}-#{translated_arr[1].to_s}"
      "Your number is: #{translated_num}"
    else
      "Num is out of range"
    end
  end
end

# Solution 5
class Translate
  @@ones = {"0" => "", "1" => "one", "2" => "two", "3" => "three", "4" => "four", "5" => "five", "6" => "six", "7" => "seven", "8" => "eight", "9" => "nine"}
  @@tens = { "2" => "twenty", "3" => "thirty", "4" => "forty", "5" => "fifty", "6" => "sixty", "7" => "seventy", "8" => "eighty", "9" => "ninety"}
  @@teens = { "0" => "ten", "1" => "eleven", "2" => "twelve", "3" => "thirteen", "4" => "fourteen", "5" => "fifteen", "6" => "sixteen", "7" => "seventeen", "8" => "eighteen", "9" => "nineteen" }

  def initialize(num)
    @num_is_in_range = is_num_in_range? num
    @num = num.to_s
  end

  def is_num_in_range? num
    num >= 0
  end

  def to_english
    if @num_is_in_range
      @num = @num.split('')
      translated_arr = []

      if @num[0] == "1"
        @@teens.each do |teen, value|
          if @num[1] == teen
            translated_arr.push(value)
          end
        end
      elsif @num.length == 1
        @@ones.each do |one, value|
          if @num[0] == one
            translated_arr.push(value)
          end
        end
      else
        @@tens.each do |ten, value|
          if @num[0] == ten
            translated_arr.push(value)
          end
        end
        @@ones.each do |one, value|
          if @num[1] == one
            translated_arr.push(value)
          end
        end
      end
      translated_num = "#{translated_arr[0].to_s}-#{translated_arr[1].to_s}"
      "Your number is: #{translated_num}"
    else
      "Num is out of range"
    end
  end
end