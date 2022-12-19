game.splash("welcome to miss raffin pitzza hut ")
let value = game.askForNumber("what's the diameter of the pizza 'in inches ")
let tax = 1.13
let rent = 1
let matireals = 0.5
let labour = 0.75
let total_cost = tax * (rent + labour + (value + matireals))
game.splash("the cost the pitsa with the diameter of" + value + " inches " + "Plus tax is " + total_cost + "dollars")
