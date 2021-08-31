<template>
	<q-input
		v-model="innerValue"
		filled
		:readonly="readonly"
		:hint="$attrs.hint"
		:label="$attrs.label"
	>
	</q-input>
</template>

<script>
import baseControlEdit from '@/library_vue/components/baseControlEdit';

export default {
	name: 'QTextFieldWithValidation',
	extends: baseControlEdit,
	props: {
		readonly: {
			type: Boolean,
			default: false
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
