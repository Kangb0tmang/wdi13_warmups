# class Say
#    def Say.in_english(input)
#       converter =
#       {
#          100 => "hundred",
#          90 => "ninety",
#          80 => "eighty",
#          70 => "seventy",
#          60 => "sixty",
#          50 => "fifty",
#          40 => "forty",
#          30 => "thirty",
#          20 => "twenty",
#          19 => "nineteen",
#          18 => "eighteen",
#          17 => "seventeen",
#          16 => "sixteen",
#          15 => "fifteen",
#          14 => "fourteen",
#          13 => "thirteen",
#          12 => "twelve",
#          11 => "eleven",
#          10 => "ten",
#          9 => "nine",
#          8 => "eight",
#          7 => "seven",
#          6 => "six",
#          5 => "five",
#          4 => "four",
#          3 => "three",
#          2 => "two",
#          1 => "one"
#       }
#       string = ""
#       converter.each do |number, name|
#       if input == 0
#          return string
#       elsif input < 0
#          return "(#{input}) Error, number must be between 0 and 99"
#       elsif input.to_s.length == 1 && input/number > 0
#          return string + "#{name}"
#       elsif input < 100 && input/number > 0
#          return string + "#{name}" if input%number == 0
#          return string + "#{name} " + in_english(input%number)
#       elsif input/number > 0
#          return string + in_english(input/number) + " #{name} " + in_english(input%number)
#       end
#       end
#    end
# end

class Say
   def Say.in_english(number)
      string = ""
      if number < 0
         return "Number must be between 0 and 99"
      else
         return string + "#{number.humanize}"
      end
   end
end
