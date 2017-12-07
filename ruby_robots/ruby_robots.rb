class Robots
   def initialize
      @name = name_randomizer
      @mac = name_randomizer
      @operations_count = 0
      @created_time = Time.now.to_i
      # @boot_time = Time.now.to_i
   end

   def name_randomizer
      Array.new(5){[*"A".."Z", *"0".."9"].sample}.join
   end

   def name
      @operations_count += 1
      return @name
   end

   def mac
      @operations_count += 1
      return @mac
   end

   def operations_count
      return @operations_count
   end

   def reset
      @operations_count += 1
      @name = Array.new(5){[*"A".."Z", *"0".."9"].sample}.join
   end

   def created_time
      return @created_time
   end

   # def timers
   #    current_time = Time.now
   #    created_age = current_time - creation_time
   #    boot_age = Time.now.to_i - boot_time.to_i
   # end
end
