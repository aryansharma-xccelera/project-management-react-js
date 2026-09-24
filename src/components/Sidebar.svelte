<script lang="ts">
  import { Link } from 'svelte-routing'
  import { Home, Package, ShoppingBag, UserRound, Tags } from '@lucide/svelte'
  const items = [
    { label: 'Home', to: '/dashboard', icon: Home },
    { label: 'Shop', to: '/products', icon: ShoppingBag },
    { label: 'Categories', to: '/categories', icon: Tags },
    { label: 'My orders', to: '/orders', icon: Package },
    { label: 'My account', to: '/account', icon: UserRound }
  ]
</script>

<aside class="hidden w-60 shrink-0 border-r border-line bg-card p-5 lg:block">
  <Link to="/dashboard" class="mb-10 flex items-center gap-2 text-xl font-bold text-navy">
    <span class="grid h-8 w-8 place-items-center rounded-lg bg-primary text-white">S</span>
    Shoply
  </Link>
  <nav class="space-y-2">
    {#each items as item (item.to)}
      <Link
        to={item.to}
        getProps={({ isCurrent }) => ({ class: isCurrent ? 'flex items-center gap-3 rounded-xl bg-blue-50 px-3 py-2.5 font-semibold text-primary' : 'flex items-center gap-3 rounded-xl px-3 py-2.5 text-muted hover:bg-surface hover:text-navy' })}
      >
        <item.icon size={19} strokeWidth={1.8} />
        {item.label}
      </Link>
    {/each}
  </nav>
</aside>
