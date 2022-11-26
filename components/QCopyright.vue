<template>
	<span class="text-subtext1">
		<span v-if="hasCopyright">&nbsp;©&nbsp;{{ copyright }}
			<span v-if="!hasAuthorUrl && hasAuthor">{{ innerVersion.client.author }}</span>
			<a
				v-if="hasAuthorUrl"
				class="ml-1"
				target="_blank"
				:href="authorUrl"
			>
				{{ hasAuthor ? author : $t('developer') }}
			</a>
		</span>
	</span>
</template>

<script>
import baseVersion from '@/library_vue/components/baseVersion';

export default {
	name: 'QCopyright',
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
