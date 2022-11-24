<template>
	<q-select
		v-model="innerValue"
		filled
		clearable
		:error="errorI"
		:options="options"
		:hint="$attrs.hint"
		:label="$attrs.label"
		:multiple="multiple"
		:max-values="maxValues"
		:dense="dense"
		emit-value
		map-options
	>
		<!-- <template v-slot:selected>
			{{ text(innerValue) }}
		</template>
		<template v-slot:option="scope">
			<q-item
				v-bind="scope.itemProps"
				v-on="scope.itemEvents"
			>
				{{ text(scope.opt) }}
			</q-item>
		</template> -->
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
	</q-select>
</template>

<script>
import baseControlEdit from '@/library_vue/components/baseControlEdit';

export default {
	name: 'QSelectWithValidation',
	extends: baseControlEdit,
	props: {
		dense: {
			type: Boolean,
			default: false
		},
		rules: {
			type: [Object, String],
			default: ''
		},
		hideDetails: {
			type: Boolean,
			default: false
		},
		items: {
			type: [Object, Array],
			default: null
		},
		maxValues: {
			type: Number,
			default: null
		},
		multiple: {
			type: Boolean,
			default: false
		},
		soloInverted: {
			type: Boolean,
			default: false
		},
		// must be included in props
		value: {
			type: null,
			default: null
		},
		validation: {
			type: Object,
			default: null
		}
	},
	data: () => ({
		innerItems: []
	}),
	computed: {
		errorI() {
			return this.validation ? this.validation[this.vid] ? this.validation[this.vid].$error : false : true;
		},
		errorsI() {
			return this.validation ? this.validation[this.vid] ? this.validation[this.vid].$errors : [] : [];
		},
		options() {
			return this.innerItems.map(x => { return { label: (x.displayName ? x.displayName : x.name), value: x.id }; });
		}
	},
	watch: {
		// Handles external model changes.
		items(newVal) {
			this.innerItems = newVal;
		},
		// Handles external model changes.
		value(newVal) {
			this.initValue(newVal);
		}
	},
	mounted() {
		if (this.items)
			this.innerItems = this.items;
		this.initValue(this.value);
	},
	methods: {
		text: (item) => (item ? item.displayName ? item.displayName : item.name : '')
	}
};
</script>

<style scoped>
</style>
