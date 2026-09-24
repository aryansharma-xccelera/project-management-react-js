<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { Search } from '@lucide/svelte'
  import { getProducts } from '../data/store'
  import type { Product } from '../types'
  let products = $state<Product[]>([])
  let query = $state('')
  let category = $state('All')
  let sort = $state('featured')
  let filtered = $derived(products.filter((product) => (category === 'All' || product.category === category) && product.name.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : b.rating - a.rating))
  $effect(() => { getProducts().then((items) => products = items) })
</script>

<section class="mx-auto max-w-6xl"><p class="text-sm font-semibold text-primary">SHOP</p><h1 class="mt-1 text-3xl font-bold text-navy">Find your next favorite</h1><div class="mt-6 flex flex-col gap-3 rounded-panel border border-line bg-card p-4 md:flex-row"><label class="flex flex-1 items-center gap-2 rounded-lg bg-surface px-3"><Search size={18} class="text-muted"/><input bind:value={query} class="w-full bg-transparent py-2 outline-none" placeholder="Search products"/></label><select bind:value={category} class="rounded-lg border border-line px-3 py-2 text-sm"><option>All</option><option>Electronics</option><option>Home</option><option>Fashion</option><option>Wellness</option></select><select bind:value={sort} class="rounded-lg border border-line px-3 py-2 text-sm"><option value="featured">Most popular</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div><p class="mt-5 text-sm text-muted">{filtered.length} products found</p><div class="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{#each filtered as product (product.id)}<button onclick={() => navigate('/products/' + product.id)} class="rounded-panel bg-card p-4 text-left shadow-sm ring-1 ring-line hover:ring-primary"><div class="grid h-40 place-items-center rounded-xl bg-surface text-6xl">{product.image}</div><p class="mt-4 text-sm text-muted">{product.category}</p><h2 class="mt-1 font-semibold text-navy">{product.name}</h2><div class="mt-2 flex justify-between"><span class="font-bold text-navy">${product.price}</span><span class="text-sm text-accent">★ {product.rating}</span></div>{#if !product.inStock}<p class="mt-2 text-sm font-semibold text-danger">Out of stock</p>{/if}</button>{:else}<div class="col-span-full rounded-panel bg-card p-10 text-center text-muted">No products match your search. Try a different keyword.</div>{/each}</div></section>
