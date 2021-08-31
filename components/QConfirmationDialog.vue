<template>
	<q-dialog
		v-model="dialogSignal"
		persistent
		max-width="300px"
		@keydown.esc="dialogCancel()"
	>
		<q-card>
			<q-card-section>
				<div class="text-h6 headline">{{ $attrs.label }}</div>
			</q-card-section>
			<q-card-section class="q-pt-none">
				{{ message ? message : nonRecoverable ? $t('questions.areYouSureNonRecoverable') : $t('questions.areYouSure') }}
				<div
					v-for="(item, index) in serverErrors"
					:key="index"
					class="red--text text--lighten-1 v-messages"
				>
					{{ item }}
				</div>
			</q-card-section>
			<q-card-actions>
				<q-btn
					color="primary"
					flat
					@click.stop="dialogCancel()"
				>
					{{ $t('buttons.cancel') }}
				</q-btn>
				<q-btn
					color="primary"
					flat
					@click.stop="dialogOk()"
				>
					{{ $t('buttons.ok') }}
				</q-btn>
			</q-card-actions>
		</q-card>
	</q-dialog>
</template>

<script>
// import VueUtility from '@thzero/library_client_vue3/utility/index';

import baseConfirmationDialog from '@/library_vue/components/baseConfirmationDialog';

export default {
	name: 'QConfirmationDialog',
	extends: baseConfirmationDialog,
	setup(props) {
		return Object.assign(baseConfirmationDialog.setup(props), {
		});
	},
	methods: {
		handleError(response, correlationId) {
			// VueUtility.handleError(this.$refs.obs, this.serverErrors, response, correlationId);
		}
	}
};
</script>
