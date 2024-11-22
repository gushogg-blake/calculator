<script>
import {onMount, setContext, getContext, createEventDispatcher, tick} from "svelte";
import Readme from "/readme.md";
import buildCalculator from "$lib/index";
import Spacer from "$components/utils/Spacer.svelte";

let inputString = $state("");
let results = $state([]);
let context = $state({});
let calculator = buildCalculator(context);

let justGone = false;

let minusKeyState = "init";
let lastMinusKeyDown = null;
let enableMinusKeyShortcut = $state(true);

let resultsDiv = $state();

let MINUS_KEY_FROM_MAX_DELAY = 400;

function keydown(e) {
	let {key} = e;
	
	if (justGone && key !== "Enter") {
		inputString = "";
	}
	
	justGone = false;
	
	if (key === "Enter") {
		go();
	}
	
	if (enableMinusKeyShortcut) {
		if (key === "-") {
			if (minusKeyState === "init") {
				minusKeyState = "ready";
				
				lastMinusKeyDown = Date.now();
			} else if (minusKeyState === "ready") {
				let diff = Date.now() - lastMinusKeyDown;
				
				if (diff <= MINUS_KEY_FROM_MAX_DELAY) {
					if (inputString.endsWith("-")) {
						e.preventDefault();
						
						inputString = inputString.replace(/-$/, " from ");
					}
				} else {
					minusKeyState = "ready";
					
					lastMinusKeyDown = Date.now();
				}
			}
		} else {
			minusKeyState = "init";
		}
	}
}

function go() {
	let result = calculator(inputString);
	
	console.log(result);
	
	results.push({
		expression: inputString,
		value: result,
	});
	
	inputString = result?.toString() || "";
	
	justGone = true;
	
	scroll();
}

async function scroll() {
	await tick();
	
	resultsDiv.scrollTop = resultsDiv.scrollHeight;
}

let buttonLabels = {
	"x": "×",
	"div": "÷",
};

let codeMap = {
	"x": "*",
	"div": "/",
	"into": " into ",
	"from": " from ",
	"apo": " apo ",
};

function click(c) {
	
	if (justGone && c !== "=") {
		inputString = "";
	}
	
	justGone = false;
	
	if (c === "C") {
		inputString = "";
	} else if (c === "=") {
		go();
	} else {
		inputString += codeMap[c] || c;
	}
}

$effect(function() {
	console.log(Object.entries(context).map(([k, v]) => k + ": " + v).join("; "));
});
</script>

<style lang="scss">
.col {
	width: 600px;
	max-width: 100%;
	margin: 0 auto;
}

#main {
	border-radius: 8px;
	margin-top: 1em;
}

#calc {
	border-radius: 8px;
	margin-top: 1em;
	padding: 1em;
	background: #e0e0e0;
	
}


.result {
	display: flex;
}

#input input {
	
	font-size: 20px;
	width: 100%;
	border: 1px solid #c0c0c0;
	border-radius: 5px;
	padding: 12px;
}

#options {
	margin-top: .5em;
}

#top {
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	padding: .5em 0;
}

.buttonWrapper {
	position: relative;
}

.button {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

#keypad {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	gap: 5px;
	grid-template-areas:
		". . . . ."
		". . . . ."
		". . . . ."
		". . . . eq"
		". . . . eq";
	margin-top: 1em;
	height: 300px;
}

.eq {
	grid-area: eq;
}

button {
	border: 1px solid #c0c0c0;
	border-radius: 6px;
	
	&:active {
		box-shadow: inset 1px 2px 5px -2px #00000020;
		background: linear-gradient(0deg, transparent 100%, #00000080 0%);
	}
	
	&:active div {
		position: relative;
		top: 1px;
		left: 1px;
	}
	
	
}

#results {
	height: 8em;
	overflow-y: auto;
}
</style>

{#snippet Button(c)}
	<div class="buttonWrapper" class:eq={c === "="}>
		{#if c !== "_"}
			<button class="button" on:click={() => click(c)}>
				<div>
					{buttonLabels[c] || c}
				</div>
			</button>
		{/if}
	</div>
{/snippet}

<div id="main" class="col">
	<div id="top">
		<div id="title">
			Fluent Calculator
		</div>
		<div id="links">
			<a href="//github.com/gushogg-blake/calculator">GitHub</a>
		</div>
	</div>
	<div id="calc">
		<div id="results" bind:this={resultsDiv}>
			{#each results as {expression, value, name}}
				<div class="result">
					<div class="expression">
						{expression}
					</div>
					<Spacer/>
					<div class="value">
						{value.toString()}
					</div>
					{#if name}
						<div class="name">
							{result.name}
						</div>
					{/if}
				</div>
			{/each}
		</div>
		<div id="input">
			<input bind:value={inputString} on:keydown={keydown}>
		</div>
		<div id="keypad">
			{#each "C ( ) mod apo 7 8 9 div into 4 5 6 - from 1 2 3 x = 0 . _ +".split(" ") as c}
				{@render Button(c)}
			{/each}
		</div>
	</div>
	<div id="options">
		<label>
			<input type="checkbox" bind:checked={enableMinusKeyShortcut}>
			Convert double-tap of "-" key into "from"
		</label>
	</div>
	<div id="readme">
		<Readme/>
	</div>
</div>
