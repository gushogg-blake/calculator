// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
const spec_word = {__proto__:null,mod:24, into:28, from:36, apo:46}
export const parser = LRParser.deserialize({
  version: 14,
  states: "$zOYQPOOOOQO'#C`'#C`OYQPO'#C}Q!lQQO'#C^OOQO'#C{'#C{O!sQQO'#C{QOQPOOOYQPO'#CaO$QQQO,59iOOQO'#Cd'#CdOOQO'#Cg'#CgOOQO'#Ci'#CiOOQO'#Cm'#CmOOQO'#Cr'#CrOYQPO,58}OYQPO,58}OYQPO,58}OYQPO,58}OOQO'#Cu'#CuO$XQPO,58xOOQO'#Cv'#CvOYQPO,58xOOQO,58{,58{OOQO1G/T1G/TOOQO1G.i1G.iO%UQQO1G.iO%oQQO1G.iO'WQQO1G.iOOQO1G.d1G.dO'kQQO1G.d",
  stateData: "'r~OmOSnOS~ORSOUVOpPOrQO~OU`OX_OY_O[YO^ZO_ZO`ZOb[Oc[Od[Oe[Og]Oh]OtXOuXOvYO~OxbO~PhOydOUoXXoXYoX[oX^oX_oX`oXboXcoXdoXeoXgoXhoXkoXtoXuoXvoXxoX~OsgO~PhOpPO~OtXOuXOUVibVicVidVieVigVihVikVixVisVi~OXViYVi[Vi^Vi_Vi`VivVi~P$^OX_OY_O[YO^ZO_ZO`ZOvYO~P$^OU`OX_OY_O[YO^ZO_ZO`ZOb[Oc[Od[Oe[OtXOuXOvYO~OgVihVikVixVisVi~P&YOkQi~PhO",
  goto: "#krPPsPv!VP!V!aPP!iP!iPPP!pPPPP!vPP!{#OPPPP#RP!VRUO^SQV^_`aeQTORlcaSOQV^_`ae]^RWijkmZ_RWjkmX`RWkmVaRWmRcRReTQROQWQQfVQh^Qi_Qj`QkaRme",
  nodeNames: "⚠ program Assignment Number VariableName UnaryExpression ArithOp BinaryExpression Exp ArithOp ArithOp Mod mod Into into ArithOp ArithOp From from ArithOp ArithOp ArithOp AsPercentOf apo ArithOp Equals Equals",
  maxTerm: 41,
  skippedNodes: [0],
  repeatNodeCount: 0,
  tokenData: "&^~ReYZ!d]^!dpq!iuv!qxy#Oyz#Tz{#Y{|#g}!O#g!O!P#l!P!Q$l!Q![$y![!]%[!^!_%a!_!`%f!c!}%k#O#P%x#Q#R%}#R#S&S#T#o%k#p#q&X~!iOn~~!nPm~pq!i~!vPv~uv!y~#OOh~~#TOr~~#YOs~~#_PY~z{#b~#gOu~~#lOU~~#oP!Q![#r~#wRR~!Q![#r!g!h$Q#X#Y$Q~$TR{|$^}!O$^!Q![$d~$aP!Q![$d~$iPR~!Q![$d~$qPX~!P!Q$t~$yO`~~%OSR~!O!P#r!Q![$y!g!h$Q#X#Y$Q~%aOy~~%fOd~~%kOx~R%rQpPwQ!c!}%k#T#o%k~%}O_~~&SOt~~&XOe~~&^Oc~",
  tokenizers: [0, 1],
  topRules: {"program":[0,1]},
  specialized: [{term: 39, get: (value) => spec_word[value] || -1}],
  tokenPrec: 0
})
