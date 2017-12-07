require 'pry'
require_relative 'coffee.rb'

c1 = Coffee.new('mocha', 0, 'medium', 'Jon')
c1.add_extras('hazelnut syrup')
c1.add_extras('nutella')
c1.ready

binding.pry
