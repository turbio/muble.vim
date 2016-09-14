#!/usr/bin/env python
import sys


class Greeter():
	def __init__(self, name):
		self.name = name

	def greet(self):
		print("hello %s" % self.name)

if len(sys.argv) > 1:
	greeter = Greeter(sys.argv[1])
	greeter.greet()
else:
	print('I don\'t know who you are')
