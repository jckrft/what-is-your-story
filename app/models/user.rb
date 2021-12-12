class User < ApplicationRecord
  has_many :topics
  has_many :responses
end
