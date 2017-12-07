# Solution 1
class Robot

    def initialize
      @name = "#{prefix}#{suffix}"
    end

    def name
      @name
    end

    def prefix
      ('AA'..'ZZ').to_a.sample
    end

    def suffix
      ('000'..'999').to_a.sample
    end

    def reset
      @name = "#{prefix}#{suffix}"
    end

end

r1 = Robot.new
puts r1.name
puts r1.name
puts r1.name

# Solution 2
class Robot
  def initialize
    @count = 0
    @creation_time = Time.now
    @name = make_name
  end
  def name
    @count += 1
    @name
  end
  def make_name
    @name = SecureRandom.hex(3).upcase
  end
  def reset
    @count += 1
    @boot_time = Time.now
    @name = SecureRandom.hex(3).upcase
  end
  def instruction_count
    @count
  end
  def timers
    end_time = Time.now
    puts "#{(end_time - @creation_time)} since creation and #{(end_time - @boot_time)} since last reboot"
  end
end

# Solution 3
class Robot
  def initialize
    @name = random_name
    @mac = random_mac
    @operations = 0
    @birth_time = Time.now.to_i
    @reset_time = Time.now.to_i
  end
  def name
    @operations+= 1
    @name
  end
  def age
    since_birth = Time.now.to_i - @birth_time
    since_reset = Time.now.to_i - @reset_time
    "#{ since_birth } seconds since birth, #{ since_reset } seconds since reset"
  end
  def mac
    @operations+= 1
    @mac
  end
  def reset
    @operations+= 1
    @reset_time = Time.now.to_i
    @name = random_name
  end
  def instruction_count
    @operations
  end
  def random_name
    name = Array.new(2) { Array('A'..'Z').sample }
    name += Array.new(3) { Random.rand(9).to_s }
    return name.join
  end
  def random_mac
    hex = Array('a'..'f') + Array('0'..'9')
    return Array.new(6) { hex.sample + hex.sample }.join('-')
  end
    
end

# Solultion 4
class Robot
  def initialize
    @name = name_generator
    @instruction_count = 0
    @create_time = Time.now
    @boot_time = nil
  end

  def name_generator
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    random_letters = letters.split("").sample + letters.split("").sample
    random_numbers = rand(100..999).to_s
    name = random_letters + random_numbers
  end

  def name
    @instruction_count += 1
    @name
  end

  def reset
    @instruction_count += 1
    @boot_time = Time.now
    @name = name_generator
  end

  def instruction_count
    @instruction_count
  end

  def timers
    "#{(Time.now).to_i - @boot_time.to_i} seconds since last boot, #{(Time.now).to_i - @create_time.to_i} seconds since creation"
  end
end

# Solution 5
def timers
    puts "#{Time.now.to_i - @creation_time.to_i} seconds since creation,"
    if @reset_time
      puts "#{Time.now.to_i - @reset_time.to_i} seconds since last boot."
    else
      puts "Unit has not been reset"
    end
  end
  
# Solution 6
class Robot

  def initialize
    @name = gen_random
    @mac = gen_random
    @instruction_count = 0
    @creation_time = Time.now
    # @boot_time = Time.now
  end

  def gen_random
    ([*('A'..'Z'),*('0'..'9')]-%w(0 1 I O)).sample(8).join
  end

  def name
    @instruction_count += 1
    @name
  end

  def mac
    @instruction_count += 1
    @mac
  end

  def reset
    @instruction_count += 1
    @boot_time = Time.now
    @name = ([*('A'..'Z'),*('0'..'9')]-%w(0 1 I O)).sample(8).join
  end

  def instruction_count
    @instruction_count
  end

  def timers
      current_time = Time.now
    if @boot_time
      creation_age = current_time - @creation_time
      boot_age = current_time - @boot_time
      "#{boot_age.to_i} seconds since last boot, #{creation_age.to_i} seconds since creation"
    else
      creation_age = current_time - @creation_time
      "no resets yet, #{creation_age.to_i} seconds since creation"
    end
  end

end