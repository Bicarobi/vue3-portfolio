<template>
	<div>
		<svg viewBox="0 0 512 512">
			<path
				d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	name: "PhotoIcon",
};
</script>

<style scoped>
div {
	line-height: 0;
}

@media only screen and (min-width: 700px) {
	div {
		min-width: 65px;
		text-align: center;
	}
}

svg {
	height: var(--icon-size2);
}

path {
	fill: var(--color2);
}
</style>
