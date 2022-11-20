<template>
	<div>
		<q-dialog
			v-model="dialogSignal"
			persistent
			:scrollable="scrollableI"
			:maximized="fullscreenInternal"
			@keydown.esc="handleCancel"
		>
			<q-card
				flat
				bordered
				dense
				:style="{ maxWidth: maxWidth, width: width }"
			>
				<q-card-section class="text-h5">
					{{ label }}
				</q-card-section>
				<q-separator />
				<q-card-section
					:style="scrollableHeightI" class="scroll"
				>
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
				<q-card-actions>
					<q-space />
					<q-btn
						v-if="buttonDelete"
						color="error lighten-1"
						text
						@click="handleDelete"
					>
						{{ $t('buttons.delete') }}
					</q-btn>
					<q-btn
						v-if="buttonClear"
						color="primary lighten-1"
						text
						@click="handleClear"
					>
						{{ $t('buttons.clear') }}
					</q-btn>
					<q-btn
						v-if="buttonCancel"
						color="primary lighten-1"
						text
						@click="handleCancel"
					>
						{{ $t('buttons.cancel') }}
					</q-btn>
					<q-btn
						v-if="buttonOk"
						:disable="invalid || disabled"
						color="green darken-1"
						text
						@click="submit"
					>
						{{ $t('buttons.ok') }} [[{{ invalid }}]]
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
	name: 'QFormDialog',
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
			// console.log('v.invalid: ' + value.$invalid);
			// console.log('v.error: ' + value.$error);
			// console.log('v.errors: ' + JSON.stringify(value));
			this.invalid = value.$invalid;
			// console.log('v.invalid: ' + this.invalid);
		}
	}
};
</script>

<style scoped>
</style>
