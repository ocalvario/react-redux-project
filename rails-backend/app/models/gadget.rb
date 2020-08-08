class Gadget < ApplicationRecord
    belongs_to :cat
    validates  :name, presence:true
end
