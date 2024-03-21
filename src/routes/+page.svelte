<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let tema: string = '';

	let logo: string = '';
	function handleClick(event: Event) {
		const select = event.target as HTMLSelectElement;
		const one_year = 60 * 60 * 24 * 365;
		if (tema === 'night') tema = 'nord';
		else tema = 'night';
		window.localStorage.setItem('theme', tema);
		document.cookie = `theme=${tema}; max-age=${one_year}; path=/;`;
		document.documentElement.setAttribute('data-theme', tema);
		if (tema === 'nord') logo = 'kroman-logo-light.png';
		else logo = 'kroman-logo-dark.png';
	}
	onMount(() => {
		tema = document.documentElement.getAttribute('data-theme');
		if (tema === 'nord') logo = 'kroman-logo-light.png';
		else logo = 'kroman-logo-dark.png';
	});
</script>

<div class="flex justify-center items-center m-4">
	<img src={logo} alt="kroman logo" />
	<input
		type="text"
		placeholder="Arama yapmak için bir şeyler girin..."
		class="input input-bordered w-full max-w-xs"
	/>
	<div class="ml-7">
		<label class="flex cursor-pointer gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
			>
			<input
				checked={tema === 'nord'}
				type="checkbox"
				value="night"
				class="toggle"
				on:click={handleClick}
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><circle cx="12" cy="12" r="5" /><path
					d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
				/></svg
			>
		</label>
	</div>
</div>
{#each data.phones as phone}
	<ul>
		<li>
			<a href="/phones/{phone.id}">{phone.name} </a>
		</li>
	</ul>
{/each}
<div class="flex justify-end">
	<p>{data.phones.length} adet listeleniyor...</p>
</div>
