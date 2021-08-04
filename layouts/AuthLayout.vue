<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar class="text-white">
				<q-toolbar-title class="text-left">
					<router-link
						to="/"
						class="toolbar-title"
					>
						{{ $t('titles.application') }}
					</router-link>
				</q-toolbar-title>
			</q-toolbar>
		</q-header>
		<!-- <v-app-bar
			app
			dark
		>
			<v-toolbar-title class="headline text-uppercase">
				<span>{{ $t('titles.application') }}</span>
			</v-toolbar-title>
			<v-spacer />
		</v-app-bar> -->

		<QLayoutFooter />

		<q-page-container>
			<!-- <span class="bg" /> -->
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import baseMainLayout from '@/library_vue/layouts/baseMainLayout';

import QLayoutFooter from '../components/QLayoutFooter';

export default {
	name: 'AuthLayout',
	components: {
		QLayoutFooter
	},
	extends: baseMainLayout,
	setup() {
		return Object.assign(baseMainLayout.setup(), {
		});
	}
};
</script>

<style scoped>
.toolbar-title {
	color: white;
	text-decoration: none;
}
</style>
