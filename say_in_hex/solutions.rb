# Solution 1
require 'pry'

def hex_to_hexspeak input
  ones = {'0' => '', '1' => 'one', '2' => 'two', '3' => 'three', '4' => 'four', '5' => 'five', '6' => 'six', '7' => 'seven', '8' => 'eight', '9' => 'nine', 'A' => 'a', 'B' => 'bee', 'C' => 'cee', 'D' => 'dee', 'E' => 'ee', 'F' => 'eff'};
  effs = {'0' => '', '1' => 'tenty', '2' => 'twenty', '3' => 'thirty', '4' => 'forty', '5' => 'fifty', '6' => 'sixty', '7' => 'seventy', '8' => 'eighty', '9' => 'ninety', 'A' => 'atta', 'B' => 'bibbity', 'C' => 'city', 'D' => 'dickety', 'E' => 'ebbity', 'F' => 'fleventy'};
  if !input.start_with? "0x"
    return null
  end
  if input == "0x00"
    return "zero"
  end
  output_array = []
  input.slice!(0, 2)
  pairs = input.scan(/.{2}/)
  pairs.count.times do |current_pair|
    pair = pairs[current_pair]
    # don't add anything to output array if the digit is 0
    if pair[0] != '0'
      output_array.push effs[pair[0]]
    end
    if pair[1] != '0'
      output_array.push ones[pair[1]]
    end
    if current_pair != pairs.count - 1
      output_array.push "bitey"
    end
  end
  output_array.join(' ').capitalize
end

puts hex_to_hexspeak("0xF5")
puts hex_to_hexspeak("0xB3")
puts hex_to_hexspeak("0xE4")
puts hex_to_hexspeak("0xBBBB")
puts hex_to_hexspeak("0xA0C9")

binding.pry

# Solution 2
def hex_translator(hex_word)
  chunks = hex_word.scan(/.{2}/)
  if chunks[0] != '0x'
    puts "Sorry that wasnt a hex value"
  else
    single_vals = chunks[1].split('')
    map = {'A' => 'Atta', 'B'=>'Bibbity', 'C'=>'City', 'D'=>'Dickety', 'E'=>'Ebbity', 'F'=>'Fleventy', '1' => 'tenty', '2' => 'twenty', '3' => 'thirty', '4' => 'fourty', '5' => 'fifty', '6' => 'sixty', '7' => 'seventy', '8' => 'eighty', '9' => 'ninty',}
    map.each {|k,v| single_vals[0].sub!(k,v)}
    map2 = {'0' => '', '1'=>'-one', '2'=>'-two', '3'=>'-three', '4'=>'-four', '5'=>'-five', '6'=>'-six', '7'=>'-seven', '8'=>'-eight', '9'=>'-nine', 'A' => '-Aye', 'B'=>'-Bee', 'C'=>'-Cee', 'D'=>'-Dee', 'E'=>'-Eee', 'F'=>'-Fee'}
    map2.each {|k,v| single_vals[1].sub!(k,v)}
    if chunks[2]
      first_part = single_vals.join('') + ' bitey '
      single_vals_2 = chunks[2].split('')
      map.each {|k,v| single_vals_2[0].sub!(k,v)}
      map2.each {|k,v| single_vals_2[1].sub!(k,v)}
      answer = first_part + single_vals_2.join('')
      return answer
    else
      return single_vals.join('')
    end
  end
end