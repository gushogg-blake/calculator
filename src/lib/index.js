import BigNumber from "bignumber.js";
import {parser} from "./parser.js";

function buildCalculator(context) {
	function getChildren(node) {
		let res = [];
		let c = node.firstChild;
		
		while (c) {
			res.push(c);
			
			c = c.nextSibling;
		}
		
		return res;
	}
	
	function evaluate(node) {
		if (node.type === "Assignment") {
			let [l, e, r] = node.children;
			
			if (e.text === "=") {
				let tmp = r;
				
				r = l;
				l = tmp;
			}
			
			let val = evaluate(r);
			
			context[l.text] = val;
			
			return val;
		} else if (node.type === "BinaryExpression") {
			let [l, op, r] = node.children;
			
			if (op.text === "+") {
				return evaluate(l).plus(evaluate(r));
			} else if (op.text === "-") {
				return evaluate(l).minus(evaluate(r));
			} else if (op.text === "*") {
				return evaluate(l).times(evaluate(r));
			} else if (op.text === "/") {
				return evaluate(l).div(evaluate(r));
			}  else if (op.type === "Mod") {
				return evaluate(l).mod(evaluate(r));
			}else if (op.type === "Into") {
				return evaluate(r).div(evaluate(l));
			} else if (op.type === "From") {
				return evaluate(r).minus(evaluate(l));
			} else if (op.type === "AsPercentOf") {
				return evaluate(l).div(evaluate(r));
			} else if (op.type === "Exp") {
				return evaluate(l).pow(evaluate(r));
			}
		} else if (node.type === "Number") {
			return new BigNumber(node.text);
		} else if (node.type === "UnaryExpression") {
			return BigNumber(node.text);
		} else if (node.type === "VariableName") {
			return context[node.text];
		}
	}
	
	function getText(str, node) {
		return str.substring(node.from, node.to);
	}
	
	function buildTree(str) {
		let tree = parser.parse(str);
		let program = tree.topNode;
		let rootNode = program.firstChild;
		
		let root = buildNode(str, rootNode);
		
		return root;
	}
	
	function buildNode(str, lNode) {
		let childLNodes = getChildren(lNode);
		
		return {
			type: lNode.type.name,
			text: getText(str, lNode),
			children: childLNodes.map(l => buildNode(str, l)),
		};
	}
	
	return function(str) {
		let root = buildTree(str);
		
		if (root.type === "⚠") {
			throw new Error("malformed expression: \"" + str + "\"");
		}
		
		let result = evaluate(root);
		
		return result;
	}
}

export default buildCalculator;
