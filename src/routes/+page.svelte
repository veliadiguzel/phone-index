<script lang="ts">
	import { goto } from '$app/navigation';
	import { phones, filtered, term, temp } from '$lib/stores/stores';
	import { onMount } from 'svelte';
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

	let currentPage = 1;
	let itemsPerPage = 15; // Sayfa başına gösterilecek öğe sayısı

	function paginate() {
		const start = (currentPage - 1) * itemsPerPage;
		const end = start + itemsPerPage;
		$filtered = $phones.slice(start, end);
	}

	function goToPage(pageNumber: number) {
		currentPage = pageNumber;
		paginate();
	}
	onMount(() => {
		paginate();
	});
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
	<div class="join justify-center">
		<button
			class="btn join-item btn-neutral"
			on:click={() => goToPage(currentPage - 1)}
			disabled={currentPage === 1}>Önceki Sayfa</button
		>

		<button
			class="btn join-item btn-neutral"
			on:click={() => goToPage(currentPage + 1)}
			disabled={currentPage === Math.ceil($phones.length / itemsPerPage)}>Sonraki Sayfa</button
		>
	</div>
</div>
