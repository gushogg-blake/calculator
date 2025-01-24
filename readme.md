# Calculator

A SvelteKit app for a simple calculator.

**WIP** this calculator is still a work in progress. [Contributions](//github.com/gushogg-blake/calculator) welcome!

## Why?

While doing quick calculations I often make use of the previous result still being in the input box, so to add up the numbers from 1-4 for example you can do:

- 1 + 2 \[Enter]
- \+ 3 \[Enter]
- \+ 4 \[Enter]

This works great for addition and multiplication, and for division and subtraction when the left operand happens to be the one you want. For the other cases, though, you have to clear the input and then type the left operand you want followed by the original result.

This gave me the idea to create two new operators, "into" and "from", which are just division and subtraction with the operands reversed.

This allows for fluent building on previous results regardless of the order.

Another thing I wanted was "x as a proportion of y" which I realise is just x / y, but it's still nice to have it built in as a separate concept.

## New operators

- Into: `into`, `//`, or `\`.

	- `5 into 20` = 4

- From: `from`, `<`, `_`, or `|`.

	- `5 from 20` = 15

- AsProportionOf: `apo`.

	- `5 apo 20` = 0.25

- Assignment: type _expression_ = _name_ or _name_: _expression_ to store the value of _expression_ as _name_ for later use:

	- `subtotal: 4 + 5 + 6`
	
	- `4 + 5 + 6 = subtotal`
	
	- `subtotal * 2` = 22
