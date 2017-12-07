require 'pry'
# "title=jaws&page=5"
# movie =
# {
#    :title => 'Jaws',
#    :page => 5,
# }

jaws = {}
params = "title=jaws&page=5"
string = params.split(/\W/)

jaws[:title] = string[1]
jaws[:page] = string[3]
puts jaws

binding.pry
