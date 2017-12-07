class Pokemon < ApplicationRecord
  validates :species, presence: true
  validates :nickname, presence: true
  validates :level, presence: true
end
