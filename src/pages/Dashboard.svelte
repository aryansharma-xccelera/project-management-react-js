<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { ArrowRight, Truck, ShieldCheck, RotateCcw } from '@lucide/svelte'
  import { getProducts } from '../data/store'
  import type { Product } from '../types'
  let products = $state<Product[]>([])
  $effect(() => { getProducts().then((items) => products = items.slice(0, 4)) })
</script>

<section class="mx-auto max-w-6xl">
  <div class="overflow-hidden rounded-panel bg-navy px-7 py-12 text-white lg:px-12">
    <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-200">New season, new rituals</p>
    <h1 class="max-w-xl text-4xl font-bold leading-tight lg:text-5xl">Thoughtful pieces for your everyday.</h1>
    <p class="mt-4 max-w-md text-blue-100">Discover well-made essentials selected to make every day feel a little better.</p>
    <button onclick={() => navigate('/products')} class="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-navy hover:bg-blue-50">Shop the collection <ArrowRight size={17} /></button>
  </div>
  <div class="mt-10 flex items-end justify-between"><div><p class="text-sm font-semibold text-primary">CURATED FOR YOU</p><h2 class="mt-1 text-2xl font-bold text-navy">Popular right now</h2></div><button onclick={() => navigate('/products')} class="text-sm font-semibold text-primary">View all</button></div>
  <div class="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
    {#each products as product (product.id)}
      <button onclick={() => navigate('/products/' + product.id)} class="rounded-panel bg-card p-4 text-left shadow-sm ring-1 ring-line transition hover:-translate-y-1"><div class="grid h-32 place-items-center rounded-xl bg-surface text-6xl">{product.image}</div><p class="mt-4 text-sm text-muted">{product.category}</p><h3 class="mt-1 font-semibold text-navy">{product.name}</h3><p class="mt-2 font-bold text-navy">${product.price}</p></button>
    {/each}
  </div>
  <div class="mt-10 grid gap-4 md:grid-cols-3">{#each [{icon:Truck,title:'Free delivery',text:'On orders over $75'},{icon:ShieldCheck,title:'Secure checkout',text:'Your payment is protected'},{icon:RotateCcw,title:'Easy returns',text:'30 days to decide'}] as benefit (benefit.title)}<div class="flex items-center gap-3 rounded-xl border border-line bg-card p-4"><benefit.icon class="text-primary" size={22}/><div><p class="font-semibold text-navy">{benefit.title}</p><p class="text-sm text-muted">{benefit.text}</p></div></div>{/each}</div>
</section>
