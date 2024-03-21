<script lang="ts">
	import { fade } from 'svelte/animate';
	import { phones, filtered, term, temp } from '$lib/stores/stores';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	$: $phones = data.props.phones;
	$: {
		filtered.set($temp);
	}
</script>

<div class="grid sm:grid-cols-3 gap-4 m-10">
	{#if $filtered}
		{#each $filtered as phone}
			<div class="card w-auto bg-secondary text-primary-content" transition:fade>
				<div class="card-body">
					<h2 class="card-title">{phone.name}</h2>
					<p>{phone.section}</p>
					<div class="card-actions justify-end">
						<p>{phone.interphone}</p>
					</div>
				</div>
			</div>
		{/each}
	{/if}
</div>
