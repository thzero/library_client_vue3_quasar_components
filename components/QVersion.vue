<template>
	<div>
		<span v-if="innerVersion !== null">{{ $t('version.label') }} {{ $t('version.majorMinorDate', innerVersion.client) }}&nbsp;-&nbsp;{{ $t('version.majorMinorDate', innerVersion.server) }}</span>
	</div>
</template>

<script>
import base from '@/library_vue/components/baseVersion';

export default {
	name: 'QVersion',
	extends: base,
	setup(props) {
		return Object.assign(base.setup(props), {
		});
	}
};
</script>

<style scoped>
</style>
