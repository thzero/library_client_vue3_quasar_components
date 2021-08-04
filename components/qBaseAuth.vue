<template>
	<div class="q-pa-md">

		<div class="row">
			<div class="col">
				<q-card>
					<q-card-section>
						<div class="row">
							<div class="col">
								<q-btn
									v-if="display"
									:disabled="disabled"
									color="primary"
									@click="signInGoogle">
									<div>{{ $t('auth.google') }}</div>
								</q-btn>
							</div>
						</div>
						<div class="row">
							<div class="col">
								<q-toggle
									v-if="allowRememberMe"
									v-model="rememberMe"
									color="green"
								>
									<div>{{ $t('auth.rememberMe') }}</div>
								</q-toggle>
							</div>
						</div>
					</q-card-section>
				</q-card>
			</div>
		</div>

	</div>
</template>

<script>
import baseAuth from '@/library_vue/components/baseAuth';

export default {
	name: 'QBaseAuth',
	extends: baseAuth,
	setup(props) {
		return Object.assign(baseAuth.setup(props), {
		});
	}
};
</script>

<style>
#federatedSignIn {
	width: 100%;
}
#google button {
	width: 250px;
}
#google button span {
	padding-top: 13px;
	padding-left: 26px;
	padding-bottom: 12px;
	font-size: 18px;
	font-family: Roboto, sans-serif;
}
</style>
