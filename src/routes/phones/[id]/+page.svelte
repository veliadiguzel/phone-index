<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    function formatDate(date:Date) {
        return new Intl.DateTimeFormat('tr-TR',{ dateStyle:'long' }).format(date);
    }
</script>

<hgroup>
    <h1>{data?.phone.name}</h1>
    <h2>{data?.phone.section}</h2>
    <p>{data?.phone.interphone}</p>
</hgroup>
