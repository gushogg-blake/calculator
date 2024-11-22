<script>
import {onMount, setContext, getContext, createEventDispatcher, tick} from "svelte";
import buildCalculator from "$lib/index";
import Spacer from "$components/utils/Spacer.svelte";

let inputString = $state("");
let results = $state([]);
let context = $state({});
let calculator = buildCalculator(context);

function keydown(e) {
	let {key} = e;
	
	if (key === "Enter") {
		let result = calculator(inputString);
		
		console.log(result);
		
		results.push({
			expression: inputString,
			value: result,
		});
		
		inputString = result;
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
	padding: 1em;
	background: #e0e0e0;
	
}


.result {
	display: flex;
}

input {
	
	font-size: 20px;
	width: 100%;
	border: 1px solid #c0c0c0;
	border-radius: 5px;
	padding: 6px;
}
</style>

<div class="col">
	<div id="main">
		<div id="results">
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
			
		</div>
	</div>
</div>
