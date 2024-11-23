<script>
import "$css/app.scss";
import {onMount, setContext, getContext, createEventDispatcher, tick} from "svelte";


</script>

<style lang="scss">
#main {
	
}
</style>

<svelte:head>
	<title>Fluent Calculator</title>
</svelte:head>

<div id="main">
	<slot/>
</div>
