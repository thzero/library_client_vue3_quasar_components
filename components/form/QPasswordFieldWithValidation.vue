<template>
	<q-input
		v-model="innerValue"
		filled
		:type="isPwd ? 'password' : 'text'"
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
			<!-- eslint-disable vue/no-v-html -->
			<span v-if="isPwd" v-pre>&nbsp;</span>
			<q-icon
				v-if="flippable"
				:name="isPwd ? 'visibility_off' : 'visibility'"
				class="cursor-pointer"
				@click="isPwd = !isPwd"
			/>
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
	name: 'QPasswordFieldWithValidation',
	extends: baseControlEdit,
	props: {
		dense: {
			type: Boolean,
			default: false
		},
		flippable: {
			type: Boolean,
			default: true
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
	data: () => ({
		isPwd: true
	}),
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
		},
		displayType() {
			return this.flippable ? (this.isPwd ? 'password' : 'text') : 'password';
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
