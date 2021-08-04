<template>
	<div>
		<q-card>
			<q-card-section
				class="text-h4"
			>
				{{ $t('titles.openSource') }}
			</q-card-section>
			<q-card-section class="pt-2">
				<div class="row">
					<div class="col">
						<q-markup-table
							dense
							flat
							:height="height"
						>
							<thead>
								<tr>
									<td colspan="3">
										<span class="text-h6">{{ $t(`openSource.client`) }}</span>
									</td>
								</tr>
								<tr>
									<th class="text-left">
										<span class="text-h6">{{ $t('openSource.resource') }}</span>
									</th>
									<th class="text-left">
										<span class="text-h6">{{ $t('openSource.license') }}</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="(item2, jndex) in dependenciesClient"
									:key="key(jndex, 'b')"
								>
									<td>
										<a
											v-if="item2.url"
											class="opensource-padding"
											:href="item2.url"
										>
											{{ item2.name }}
										</a>
										<span
											v-if="!item2.url"
											class="opensource-padding"
										>
											{{ item2.name }}
										</span>
									</td>
									<td>
										<a
											v-if="item2.licenseUrl"
											class="opensource-padding"
											:href="item2.licenseUrl"
										>
											{{ item2.licenseName }}
										</a>
										<span
											v-if="!item2.licenseUrl"
											class="opensource-padding"
										>
											{{ item2.licenseName }}
										</span>
									</td>
								</tr>
							</tbody>
						</q-markup-table>
					</div>
					<div class="col">
						<q-markup-table
							dense
							flat
							:height="height"
						>
							<thead>
								<tr>
									<td colspan="3">
										<span class="text-h6">{{ $t(`openSource.server`) }}</span>
									</td>
								</tr>
								<tr>
									<th class="text-left">
										<span class="text-h6">{{ $t('openSource.resource') }}</span>
									</th>
									<th class="text-left">
										<span class="text-h6">{{ $t('openSource.license') }}</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="(item2, jndex) in dependenciesServer"
									:key="key(jndex, 'b')"
								>
									<td>
										<a
											v-if="item2.url"
											class="opensource-padding"
											:href="item2.url"
										>
											{{ item2.name }}
										</a>
										<span
											v-if="!item2.url"
											class="opensource-padding"
										>
											{{ item2.name }}
										</span>
									</td>
									<td>
										<a
											v-if="item2.licenseUrl"
											class="opensource-padding"
											:href="item2.licenseUrl"
										>
											{{ item2.licenseName }}
										</a>
										<span
											v-if="!item2.licenseUrl"
											class="opensource-padding"
										>
											{{ item2.licenseName }}
										</span>
									</td>
								</tr>
							</tbody>
						</q-markup-table>
					</div>
				</div>
			</q-card-section>
		</q-card>
	</div>
</template>

<script>

import baseOpenSource from '@/library_vue/components/baseOpenSource';

export default {
	name: 'QOpenSource',
	extends: baseOpenSource,
	setup(props) {
		return Object.assign(baseOpenSource.setup(props), {
		});
	}
};
</script>

<style scoped>
	.opensource-padding {
		padding-left: 16px
	}
</style>
