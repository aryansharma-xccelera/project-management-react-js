<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { isAuthenticated } from '../auth/auth'
  let { children } = $props()
  $effect(() => { if (!isAuthenticated()) navigate('/login', { replace: true }) })
</script>

{#if isAuthenticated()}{@render children()}{/if}
