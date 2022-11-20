<template>
	<q-input
		v-model="innerValue"
		filled
		:error="errorI"
		:readonly="readonly"
		:hint="$attrs.hint"
		:label="$attrs.label"
		:maxcount="maxcount"
		:mincount="mincount"
		:dense="dense"
	>
		<template v-slot:append>
			<span :class="countClass">{{ count }}</span>
		</template>
		<template v-slot:error>
			<div
				v-for="error of errorsI"
				:key="error.$uid"
			>
				<strong>{{ error.$message }}</strong>
				<small> on </small>
				<strong>{{ error.$property }}</strong>
			</div>
		</template>
	</q-input>
</template>

<script>
import baseControlEdit from '@/library_vue/components/baseControlEdit';

export default {
	name: 'QTextFieldWithValidation',
	extends: baseControlEdit,
	props: {
		dense: {
			type: Boolean,
			default: false
		},
		maxcount: {
			type: Number,
			default: null
		},
		mincount: {
			type: Number,
			default: null
		},
		readonly: {
			type: Boolean,
			default: false
		},
		validation: {
			type: Object,
			default: null
		}
	},
	computed: {
		count() {
			return this.maxcount ? '(' + (this.innerValue ? this.innerValue.length : 0) + ')' : '';
		},
		countClass() {
			return (this.maxcount && !String.isNullOrEmpty(this.innerValue) ? this.innerValue.length > this.maxcount ? 'negative ' : '' : '') + 'title-body2';
		},
		errorI() {
			return this.validation ? this.validation[this.vid] ? this.validation[this.vid].$error : false : true;
		},
		errorsI() {
			return this.validation ? this.validation[this.vid] ? this.validation[this.vid].$errors : [] : [];
		}
	},
	watch: {
		// Handles external model changes.
		value(newVal) {
			this.initValue(newVal);
		}
	},
	mounted() {
		this.initValue(this.value);
	}
};
</script>

<style scoped>
</style>
