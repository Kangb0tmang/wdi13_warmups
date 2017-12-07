# Solution 1
fav_num_arr = []

users.each do |key, value|
 puts fav_num_arr += value[:favorite_numbers]
end
fav_num_arr.sort.uniq

# Solution 2
add_another_name = ""
orders = {}
until add_another_name == "n" do
  puts "Name for order: "
  name = gets.chomp
  orders[name] = {}
  orders[name][:items] = []
  add_another_item = ""
  until add_another_item == "n" do
    puts "#{ name } wants to order: "
    item = gets.chomp
    orders[name][:items].push(item)
    puts "Add another item to the order? (y/n)"
    add_another_item = gets.chomp
  end
  one_person_order = orders[name][:items].join(", ")
  puts "All #{ name } orders: #{ one_person_order }"
  puts "Add another person? (y/n)"
  add_another_name = gets.chomp
end
all_orders = orders.each {|key, value| puts "#{ key } ordered #{ orders[key][:items].join(" & ") }" }

# Solution 3
lunch_orders = {

}

def order_more(order_name, lunch_orders)
  puts "Do you want to add more to your order y/n?"
  more = gets.chomp
    until more == "n" do
      puts "#{order_name} wants to add:"
      order_more = gets.chomp
      lunch_orders[order_name][:order_items].push(order_more)
      puts "Do you want to add more to your order y/n?"
      more = gets.chomp
    end
end



  puts "Any customers? y/n"
  new_customers = gets.chomp
  until new_customers == "n" do
    puts "Name for the order:"
    order_name = gets.chomp

    puts "#{order_name} wants to order:"
    order_items = gets.chomp

    lunch_orders[order_name]= { :order_items => [order_items] }

    order_more(order_name, lunch_orders)

    puts "Your order is as follows: #{lunch_orders}"
    puts "Any customers? y/n"
    new_customers = gets.chomp
  end

# Solution 4
require 'pry'
orders = {}
loop do
  puts "would you like to order? (y/n)"
  answer = gets.chomp
  if answer == 'y'
    puts 'Name for order:'
    customer = gets.chomp
    puts "#{customer} wants to order: "
    item = gets.chomp
    orders[:"#{customer}"] = [item]
    loop do
      puts 'Add another item to the order? (y/n)'
      response = gets.chomp
      if response == 'y'
        puts "#{customer} wants to order: "
        item = gets.chomp
        orders[:"#{customer}"] << item
      else
        break
      end
    end
  else
    break
  end
end

orders.each do |key,values|
  puts "#{key} ordered #{values.join(', ')}."
end

# Solution 5
require "pry"

orders = {}


def new_order(orders)
  puts "Name for Order:"
  name =  gets.chomp

  answer = ""
  items = []

  still_ordering = true
  while still_ordering do
    puts "#{name} wants to order:"
    items.push(gets.chomp)

    puts "And another item to your order? (y/n)"
    still_ordering = gets.chomp == 'y'
    # if (gets.chomp == 'y') {
    #   still_ordering = true
    # } else {
    #   still_ordering = false
    # }
  end
  orders[name] = items
end
binding.pry