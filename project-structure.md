# Project structure

The expression parsing is done with a [Lezer](//lezer.codemirror.net) grammar. See [calc.grammar](./src/lib/calc.grammar) for the grammar definition.

Once we have a tree from the parser, evaluating it to calculate the result is a case of matching on the type (BinaryExpression, Number, etc) and acting accordingly. See [here](./src/lib/index.js) for the actual "calculator" functionality.

We also maintain a context object to hold the values of assignments from previous results such as `4 + 5 = subtotal`.
