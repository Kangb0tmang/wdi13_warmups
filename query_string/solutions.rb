book_ruby = {}
string = "title=jaws&page=5"
string = string.split(/\W/)
title = string[0]
page = string[2]
book_ruby[:title] = 'jaws'
book_ruby[:page] = 5
puts book_ruby