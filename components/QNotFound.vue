<template>
	<div class="row justify-center">
		<v-alert type="error">
			{{ $t('errors.notFound') }}
		</v-alert>
	</div>
	<div class="row mb-8"
		justify="center"
	>
		<q-img
			src="/icons/icon.png"
			:width="imageWidth"
			:max-width="imageWidth"
		/>
	</div>
	<div class="row justify-center">
		<q-btn
			color="primary"
			@click="clickHome"
		>
			{{ $t('titles.home') }}
		</q-btn>
	</div>
</template>

<script>
import baseNotFound from '@/library_vue/components/baseNotFound';

export default {
	name: 'QNotFound',
	extends: baseNotFound,
	setup(props) {
		return Object.assign(baseNotFound.setup(props), {
		});
	}
};
</script>

<style scoped>
</style>
