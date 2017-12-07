# attr_reader :name, :size
# attr_writer :name
attr_accessor(:name, :size)

# getter
def name
    @name
end

def size
    @size
end

# setter
def name=(val)
    @name = val
end
# c1.name = (abc)

def change_name(val)
    @name = val
end #syntax sugar
# c1.change_name abc

def size=(val)
    @size = val
end

require 'pry'

class Coffee

    def initialize (name, drink_order,size, num_sugars)
        @name = name
        @drink_order = drink_order
        @size = size
        @num_sugars = num_sugars
    end

#ruby automatically looks to a to_s method in your code
#bad practice to have "puts" in methods

    def print_order
        puts "#{@name}'s #{@drink_order}, #{@size}, #{@num_sugars}."
    end

    def gen_mispelled_name
        mispelled_name_arr = @name.upcase.split("")
        mispelled_name_str = mispelled_name_arr.sample(@name.length).join
        @name = mispelled_name_str
    end

    def ready?
        time_min = 2
        time_max = 5
        waiting_time = [*time_min..time_max].sample
        gen_mispelled_name
        puts "Estimated waiting time: #{waiting_time} mins"
    end

    #setter
    def collected=(val)
        @collected = val
        # puts @collected
    end

    def collected?
        @collected
    end

    def name
        @name
    end

end