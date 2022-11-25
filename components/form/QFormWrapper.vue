<template>
	<div>
		<q-card
			flat
			bordered
			dense
		>
			<q-card-section
				v-if="label"
				class="text-h5"
			>
				{{ label }}
			</q-card-section>
			<q-separator
				v-if="label"
			/>
			<q-card-section>
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
				<slot name="buttons_pre" />
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
					{{ $t(buttonClearName) }}
				</q-btn>
				<q-btn
					v-if="buttonOk"
					:disable="invalid"
					color="green darken-1"
					text
					@click="submit"
				>
					{{ $t(buttonOkName) }}
				</q-btn>
				<slot name="buttons_post" />
			</q-card-actions>
		</q-card>
		<QConfirmationDialog
			v-if="buttonDelete"
			:non-recoverable="nonRecoverable"
			:signal="dialogDeleteConfirmSignal.signal"
			@cancel="dialogDeleteConfirmSignal.cancelI()"
			@ok="handleDeleteConfirmOk"
		/>
	</div>
</template>

<script>
import baseEdit from '@/library_vue/components/baseEdit';
import QConfirmationDialog from '../QConfirmationDialog';

export default {
	name: 'QFormWrapper',
	components: {
		QConfirmationDialog
	},
	extends: baseEdit,
	props: {
		buttonClear: {
			type: Boolean,
			default: true
		},
		buttonClearName: {
			type: String,
			default: 'buttons.clear'
		},
		buttonDelete: {
			type: Boolean,
			default: false
		},
		buttonOk: {
			type: Boolean,
			default: true
		},
		buttonOkName: {
			type: String,
			default: 'buttons.ok'
		},
		label: {
			type: String,
			default: null
		},
		nonRecoverable: {
			type: Boolean,
			default: false
		},
		preCompleteDelete: {
			type: Function,
			default: null
		},
		preCompleteOk: {
			type: Function,
			default: null
		},
		resetForm: {
			type: Function,
			default: null
		},
		validation: {
			type: Object,
			default: null
		}
	},
	setup (props) {
		return Object.assign(baseEdit.setup(props), {
		});
	},
	data: () => ({
		internalItem: null,
		invalid: true
	}),
	watch: {
		// Handles external model changes.
		validation(value) {
			// console.log('v.invalid: ' + value.$invalid);
			// console.log('v.error: ' + value.$error);
			// console.log('v.errors: ' + JSON.stringify(value));
			this.invalid = value.$invalid;
			// console.log('v.invalid: ' + this.invalid);
		}
	},
	methods: {
		handleClear(correlationId) {
			this.logger.debug('FormDialog', 'clear', 'clear', null, correlationId);
			// this.$nextTick(() => {
			// 	// this.$refs.obs.reset(correlationId);
			// });
			this.reset(this.correlationId(), false);
		},
		async handleDelete() {
			this.serverErrors = [];
			this.dialogDeleteConfirmSignal.open(this.correlationId());
		},
		async handleDeleteConfirmOk() {
			this.serverErrors = [];

			const correlationId = this.correlationId();

			this.dialogDeleteConfirmSignal.ok();

			if (this.preCompleteDelete) {
				const response = await this.preCompleteDelete(correlationId);
				this.logger.debug('FormDialog', 'handleDeleteConfirmOk', 'response', response, correlationId);
				if (this.hasFailed(response)) {
					// VueUtility.handleError(this.$refs.obs, this.serverErrors, response, correlationId);
					return;
				}
			}

			this.logger.debug('FormDialog', 'handleDeleteConfirmOk', 'delete', null, correlationId);
			this.$emit('ok');
			this.handleClear(correlationId);
		},
		async reset(correlationId, value) {
			await this.resetFormI(correlationId, value);
			this.serverErrors = [];
			await this.validation.$validate();
		},
		async resetFormI(correlationId, value) {
			if (this.resetForm)
				this.resetForm(correlationId, value);
		},
		// eslint-disable-next-line
		setErrors(errors) {
			// this.$refs.obs.setErrors(errors);
		},
		async submit() {
			this.serverErrors = [];

			const correlationId = this.correlationId();

			// const result = await this.$refs.obs.validate(correlationId);
			const result = await this.validation.$validate();
			this.logger.debug('FormDialog', 'submit', 'result', result, correlationId);
			if (!result)
				return;

			let response = { success: true, route: null };
			if (this.preCompleteOk) {
				response = await this.preCompleteOk(correlationId);
				this.logger.debug('FormDialog', 'submit', 'response', response, correlationId);
				if (this.hasFailed(response)) {
					// VueUtility.handleError(this.$refs.obs, this.serverErrors, response, correlationId);
					return;
				}
			}

			this.logger.debug('FormDialog', 'submit', 'ok', null, correlationId);
			this.$emit('ok');
		}
	}
};
</script>

<style scoped>
</style>
