class Dice
   # or self.roll
   def Dice.roll(num_rolls=1)
      all_rolls = []
      # rand(1..6)
      num_rolls.times do
         all_rolls.push([*1..6].sample)
      end
      return all_rolls
   end
   # attr_reader :dice
   #
   # def Dice.roll
   #    @dice = dice
   # end
   #
   # def roll(num_rolls)
   #    all_rolls = []
   #    (1..num_rolls).each do
   #       single_roll = [*1..6].sample
   #       all_rolls.push(single_roll)
   #    end
   #
   #    return all_rolls
   #    return all_rolls.join(", ")
   # end
end
