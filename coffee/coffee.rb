class Coffee
   # getter method (write)
   attr_reader :coffee, :sugar, :size, :name, :extras
   # setter method (read)
   # attr_writer :coffee
   #  creates both! be careful using it...
   # attr_accessor :coffee
   # def name=(val)
   #    @name = val
   # end

   def initialize(coffee, sugar, size, name)
      @coffee = coffee
      @sugar = sugar
      @size = size
      @name = name
      @extras = []
   end

   def add_extras(choice)
      extras.push(choice)
   end

   def ready
      random_wait = [*2..5].sample
      puts "Waiting time is: #{random_wait} seconds"
      sleep(random_wait)
      to_s
   end

   # def collected
   #
   # end

   def to_s
      puts "Order for #{name.split("").shuffle.join}! #{size.capitalize} #{coffee}, with #{extras.join(", ")} and #{sugar} sugars!"
   end
end
