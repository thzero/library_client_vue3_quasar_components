<template>
	<div>
	</div>
</template>

<script>
import { computed, onBeforeUnmount, watch } from 'vue';
import { useQuasar } from 'quasar';

import baseLoadingOverlay from '@/library_vue/components/baseLoadingOverlay';

export default {
	name: 'QLoadingOverlay',
	extends: baseLoadingOverlay,
	setup (props) {
		const upstream = baseLoadingOverlay.setup(props);

		const $q = useQuasar();
		let timer = null;

		const close = () => {
			if (timer !== null) {
				clearTimeout(timer);
				timer = null;
			};
			$q.loading.hide();
		};

		if (props.timeout) {
			onBeforeUnmount(() => close);
		}

		const signalI = computed(() => {
			return props.signal;
		});

		watch(signalI, (value, prevValue) => {
			if (value) {
				close();
			}
		});

		$q.loading.show({
			message: upstream.displayMessage.value
		});

		if (props.timeout) {
			timer = setTimeout(() => {
				$q.loading.hide();
				timer = null;
			}, props.timeout);
		}

		return Object.assign(upstream, {
		});
	}
};
</script>

<style scoped>
</style>
