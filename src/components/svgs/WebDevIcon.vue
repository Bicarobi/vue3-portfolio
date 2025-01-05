<template>
	<div>
		<svg viewBox="0 0 640 512">
			<path
				d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	name: "WebDevIcon",
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
