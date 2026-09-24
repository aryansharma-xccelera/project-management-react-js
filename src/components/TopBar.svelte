<script lang="ts">
  import { Link, navigate } from 'svelte-routing'
  import { Search, ShoppingCart, LogOut } from '@lucide/svelte'
  import { currentUser, logout } from '../auth/auth'
  import { getCart } from '../data/store'
  let count = $state(0)
  $effect(() => { getCart().then((items) => count = items.reduce((sum, item) => sum + item.quantity, 0)) })
  function signOut(): void { logout(); navigate('/login') }
</script>

<header class="flex h-18 shrink-0 items-center justify-between border-b border-line bg-card px-5 lg:px-8">
  <Link to="/dashboard" class="text-lg font-bold text-navy lg:hidden">Shoply</Link>
  <Link to="/products" class="hidden items-center gap-2 text-sm text-muted md:flex"><Search size={17} /> Search products</Link>
  <div class="ml-auto flex items-center gap-4">
    <Link to="/cart" class="relative rounded-lg p-2 text-navy hover:bg-surface"><ShoppingCart size={21} /><span class="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-xs font-bold text-white">{count}</span></Link>
    <Link to="/account" class="hidden text-right sm:block"><span class="block text-sm font-semibold text-navy">{currentUser()?.name ?? 'Account'}</span><span class="text-xs text-muted">My account</span></Link>
    <button onclick={signOut} class="rounded-lg p-2 text-muted hover:bg-surface" aria-label="Log out"><LogOut size={19} /></button>
  </div>
</header>
