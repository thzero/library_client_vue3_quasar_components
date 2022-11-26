<template>
	<q-footer
		elevated
		class="text-white"
	>
		<q-toolbar>
			<QVersion :value="version" />
			<q-space />
			<QCopyright :value="version" />
			<span
				v-if="isDev"
				style="padding-left: 4px;"
			>
				{{ environmentName }}
			</span>
		</q-toolbar>
	</q-footer>
</template>

<script>
import { computed, getCurrentInstance, onMounted, ref } from 'vue';

import LibraryConstants from '@thzero/library_client/constants';

import LibraryUtility from '@thzero/library_common/utility';
import GlobalUtility from '@thzero/library_client/utility/global';

import base from '@/library_vue/components/base';
import QCopyright from './QCopyright';
import QVersion from './QVersion';

export default {
	name: 'QLayoutFooter',
	components: {
		QCopyright,
		QVersion
	},
	extends: base,
	props: {
		nonRecoverable: {
			type: String,
			default: 'messages.dev'
		}
	},
	setup(props) {
		const version = ref({});

		const environmentName = computed(() => {
			return LibraryUtility.isDev ? GlobalUtility.$trans.t('messages.dev') : '';
		});
		const isDev = computed(() => {
			return LibraryUtility.isDev;
		});

		const instance = getCurrentInstance();

		const serviceStore = GlobalUtility.$injector.getService(LibraryConstants.InjectorKeys.SERVICE_STORE);

		onMounted(async () => {
			await serviceStore.dispatcher.getVersion(instance.ctx.correlationId());
			version.value = serviceStore.state.version;
		});

		return Object.assign(base.setup(props), {
			version,
			environmentName,
			isDev
		});
	}
};
</script>

<style scoped>
</style>
