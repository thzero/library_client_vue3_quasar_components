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
				<!--  -->
				<span v-if="messageRaw" v-html="messageDisplay" />
				<span v-if="!messageRaw">{{ message ? message : nonRecoverable ? $t('questions.areYouSureNonRecoverable') : $t('questions.areYouSure') }}</span>
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
import { computed } from 'vue';

import GlobalUtility from '@thzero/library_client/utility/global';

import baseConfirmationDialog from '@/library_vue/components/baseConfirmationDialog';

export default {
	name: 'QConfirmationDialog',
	extends: baseConfirmationDialog,
	setup(props) {
		const messageDisplay = computed(() => {
			return props.message ? props.message : props.nonRecoverable ? GlobalUtility.$trans.t('questions.areYouSureNonRecoverable') : GlobalUtility.$trans.t('questions.areYouSure');
		});

		return Object.assign(baseConfirmationDialog.setup(props), {
			messageDisplay
		});
	},
	methods: {
		handleError(response, correlationId) {
			// VueUtility.handleError(this.$refs.obs, this.serverErrors, response, correlationId);
		}
	}
};
</script>
