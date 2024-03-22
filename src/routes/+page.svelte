<script lang="ts">
	import { goto } from '$app/navigation';
	import { phones, filtered, term, temp } from '$lib/stores/stores';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	$: $phones = data.props.phones;
	$: {
		filtered.set($temp);
	}
	let selectedRow = null;

	const showDetails = () => {
		if (selectedRow) {
			goto(`/phones/${selectedRow.id}`);
		}
	};
</script>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>S.No</th>
				<th>Bölümü</th>
				<th>Ünvan</th>
				<th>Dahili</th>
			</tr>
		</thead>
		<tbody>
			{#if $filtered}
				{#each $filtered as phone}
					<tr
						class="cursor-pointer hover:bg-slate-500"
						on:click={() => {
							selectedRow = phone;
							showDetails();
						}}
					>
						<th>{phone.id}</th>
						<td>{phone.section}</td>
						<td>{phone.name}</td>
						<td>{phone.interphone}</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</div>
