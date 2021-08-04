<template>
	<q-layout view="lHh Lpr lFf">
		<q-page-container>
			<span class="bg" />
			<!-- <span class="bg" /> -->
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import baseMainLayout from '@/library_vue/layouts/baseMainLayout';

export default {
	name: 'BlankLayout',
	extends: baseMainLayout
};
</script>

<style scoped>
.toolbar-title {
	color: white;
	text-decoration: none;
}
</style>
