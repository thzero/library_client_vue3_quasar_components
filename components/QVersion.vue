<template>
	<span class="text-subtext1">
		<span v-if="innerVersion !== null">{{ $t('version.label') }} {{ $t('version.majorMinorDate', innerVersion.client) }}&nbsp;-&nbsp;{{ $t('version.majorMinorDate', innerVersion.server) }}</span>
	</span>
</template>

<script>
import baseVersion from '@/library_vue/components/baseVersion';

export default {
	name: 'QVersion',
	extends: baseVersion,
	setup(props) {
		return Object.assign(baseVersion.setup(props), {
		});
	}
};
</script>

<style scoped>
</style>
