require 'pry'

# lunch_orders =
# {
#    "Greg" => { :order => ["burger", "fries"] },
#    "Jim" => { :order => ["pie", "chips"] },
# }

all_orders = {}
puts "Can I get your name please?"
name = gets.chomp.to_s
puts "What can I get for you?"
food = gets.chomp.to_s

def take_order(name, food, all_orders)
   all_orders[name] = {:orders => [food]}

   puts "Would you like anything else?"
   more_food = gets.chomp.to_s
   if more_food == "y"
      puts "Ok, what else would you like?"
      add_food = gets.chomp.to_s
      puts add_food
   elsif more_food == "n"
      puts "Thank you #{name} your order. You've ordered #{food}"
   end
end

take_order(name, food, all_orders)

binding.pry
puts "Lunch Orders"
