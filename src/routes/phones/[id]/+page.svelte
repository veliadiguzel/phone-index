<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;
	let isModalOpen: boolean = true;

	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('tr-TR', { dateStyle: 'long' }).format(date);
	}
</script>

{#if !isModalOpen}
	{goto('/')}
{/if}
<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_6" class="modal-toggle" bind:checked={isModalOpen} />
<div class="modal" role="dialog">
	<div class="modal-box">
		<h3 class="font-bold text-lg">{data?.phone.name}</h3>
		<p class="py-4">{data?.phone.section}</p>
		<p class="py-4">{data?.phone.interphone}</p>
		<div class="modal-action">
			<label for="my_modal_6" class="btn">Kapat</label>
		</div>
	</div>
</div>
