<template>
	<span class="text-caption">
		<span v-if="innerVersion !== null">{{ $t('version.label') }} {{ $t('version.majorMinorDate', innerVersion.client) }}&nbsp;-&nbsp;{{ $t('version.majorMinorDate', innerVersion.server) }}</span>
		<span v-if="hasCopyright">&nbsp;©&nbsp;{{ innerVersion.client.copyright }}
			<span v-if="!innerVersion.client.author_url">{{ innerVersion.client.author }}</span>
			<a
				v-if="innerVersion.client.author_url"
				class="ml-1"
				target="_blank"
				:href="innerVersion.client.author_url"
			>
				{{ innerVersion.client.author }}
			</a>
		</span>
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
	a:link {
		color: white;
	}
	a:visited {
	color: white;
	}
	a:hover {
	color: black;
	}
	a:active {
		color: grey;
	}
</style>
