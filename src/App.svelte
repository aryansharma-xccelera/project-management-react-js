<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Layout from './components/Layout.svelte'
  import RequireAuth from './components/RequireAuth.svelte'
  import Redirect from './components/Redirect.svelte'
  import Dashboard from './pages/Dashboard.svelte'
  import Products from './pages/Products.svelte'
  import Categories from './pages/Categories.svelte'
  import ProductDetail from './pages/ProductDetail.svelte'
  import Cart from './pages/Cart.svelte'
  import Checkout from './pages/Checkout.svelte'
  import Orders from './pages/Orders.svelte'
  import OrderDetail from './pages/OrderDetail.svelte'
  import Account from './pages/Account.svelte'
  import Login from './pages/Login.svelte'
  import Signup from './pages/Signup.svelte'
  import NotFound from './pages/NotFound.svelte'
</script>

<Router>
  <Route path="/login"><Login /></Route>
  <Route path="/signup"><Signup /></Route>
  <Route path="/"><Redirect to="/dashboard" /></Route>
  <Route path="/dashboard"><RequireAuth><Layout><Dashboard /></Layout></RequireAuth></Route>
  <Route path="/products"><RequireAuth><Layout><Products /></Layout></RequireAuth></Route>
  <Route path="/categories"><RequireAuth><Layout><Categories /></Layout></RequireAuth></Route>
  <Route path="/products/:id" let:params><RequireAuth><Layout><ProductDetail id={params.id} /></Layout></RequireAuth></Route>
  <Route path="/cart"><RequireAuth><Layout><Cart /></Layout></RequireAuth></Route>
  <Route path="/checkout"><RequireAuth><Layout><Checkout /></Layout></RequireAuth></Route>
  <Route path="/orders"><RequireAuth><Layout><Orders /></Layout></RequireAuth></Route>
  <Route path="/orders/:id" let:params><RequireAuth><Layout><OrderDetail id={params.id} /></Layout></RequireAuth></Route>
  <Route path="/account"><RequireAuth><Layout><Account /></Layout></RequireAuth></Route>
  <Route path="*"><NotFound /></Route>
</Router>
