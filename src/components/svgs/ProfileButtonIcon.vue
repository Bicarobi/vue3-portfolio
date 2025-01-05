<template>
	<div>
		<svg v-if="openedProfile" viewBox="0 0 512 512">
			<path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
		</svg>
		<svg v-else viewBox="0 0 512 512">
			<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
		</svg>
	</div>
</template>

<script>
export default {
	name: "ProfileButtonIcon",
	props: ["openedProfile"],
};
</script>

<style scoped>
div {
	line-height: 0;
}

svg {
	height: var(--icon-size);
}

path {
	fill: var(--color2);
}
</style>
