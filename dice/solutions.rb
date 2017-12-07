class Dice
  def Dice.roll (size = 1)
    return Dice.new(size)
  end

  def initialize (size = 1)
    if size == 1
      @result = [*1..6].sample
    else
      @result = Array.new(size) { [*1..6].sample }
    end
  end

  def result
    return @result
  end

  def to_s
    return "#{@result}"
  end

  def sum
    [@result, @result.sum]
  end
end