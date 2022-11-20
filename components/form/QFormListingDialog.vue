<template>
	<div>
		<q-dialog
			v-model="dialogSignal"
			persistent
			:maximized="fullscreenInternal"
			@keydown.esc="handleCancel"
		>
			<q-card
				flat
				bordered
				dense
				:style="{ maxWidth: maxWidth, width: width }"
			>
				<q-card-section>
					<div class="text-center text-h5">{{ label }}</div>
					<q-form>
						<slot />
						<div
							v-for="(item, index) in serverErrors"
							:key="index"
							class="red--text text--lighten-1 v-messages"
						>
							{{ item }}
						</div>
					</q-form>
				</q-card-section>

				<q-separator />

				<q-card-section style="max-height: 50vh" class="scroll">
					<slot name="listing"/>
				</q-card-section>

				<q-separator />

				<q-card-actions align="right">
					<q-space />
					<q-btn
						color="primary lighten-1"
						text
						@click="handleCancel"
					>
						{{ $t('buttons.close') }}
					</q-btn>
				</q-card-actions>
			</q-card>
		</q-dialog>
		<QConfirmationDialog
			v-if="buttonDelete"
			:non-recoverable="true"
			:signal="dialogDeleteConfirmSignal.signal"
			@cancel="dialogDeleteConfirmSignal.cancelI()"
			@ok="handleDeleteConfirmOk"
		/>
	</div>
</template>

<script>
import QVueUtility from '../../utility/index';

import baseFormDialogControl from '@/library_vue/components/form/baseFormDialogControl';
import QConfirmationDialog from '../QConfirmationDialog';

export default {
	name: 'QFormListingDialog',
	components: {
		QConfirmationDialog
	},
	extends: baseFormDialogControl,
	setup (props) {
		return Object.assign(baseFormDialogControl.setup(props), {
		});
	},
	data: () => ({
		internalItem: null,
		invalid: true
	}),
	computed: {
		fullscreenInternal() {
			return QVueUtility.fullscreen(this.$q);
		}
	},
	watch: {
		// Handles external model changes.
		validation(value) {
			console.log('v.invalid: ' + value.$invalid);
			console.log('v.error: ' + value.$error);
			console.log('v.errors: ' + JSON.stringify(value));
			this.invalid = value.$invalid;
			console.log('v.invalid: ' + this.invalid);
		}
	}
};
</script>

<style scoped>
</style>
