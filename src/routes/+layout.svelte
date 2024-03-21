<script lang="ts">
	import { filtered } from '$lib/stores/stores';
	import 'tailwindcss/tailwind.css';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<slot />
<footer class="footer footer-center p-4 bg-base-300 text-base-content fixed inset-x-0 bottom-0">
	<aside>
		{#if $filtered.length > 0}
			<p>{$filtered.length} kayıt bulundu...</p>
		{:else}
			<p>Kayıt bulunamadı</p>
		{/if}
	</aside>
</footer>
