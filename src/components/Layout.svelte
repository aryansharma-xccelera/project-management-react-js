<script lang="ts">
  import Sidebar from './Sidebar.svelte'
  import TopBar from './TopBar.svelte'
  let { children } = $props()
</script>

<div class="flex min-h-screen bg-surface">
  <Sidebar />
  <div class="flex min-w-0 flex-1 flex-col">
    <TopBar />
    <main class="flex-1 p-5 lg:p-8">{@render children()}</main>
    <footer class="px-5 py-4 text-center text-sm text-muted lg:px-8">Cross-repo push test</footer>
  </div>
</div>
