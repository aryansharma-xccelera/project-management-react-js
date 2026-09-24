# E-Commerce Platform — Routes & Navigation

## How to run
cd /home/ryzen/frontend_generator_backend-test/frontend_runs/run_fa50d9fe_20260820_114914/project
npm install --legacy-peer-deps && npm run dev
Then open http://localhost:48523

## Routes

| Route | Page file | Description |
|-------|-----------|-------------|
| / | redirects | Redirects to the main dashboard screen |
| /login | src/pages/Login.svelte | Customer sign-in screen |
| /signup | src/pages/Signup.svelte | New customer account registration |
| /dashboard | src/pages/Dashboard.svelte | Storefront home with hero and popular products |
| /products | src/pages/Products.svelte | Searchable, filterable product catalogue |
| /categories | src/pages/Categories.svelte | Product category discovery page |
| /products/:id | src/pages/ProductDetail.svelte | Product details, quantity and add-to-cart controls |
| /cart | src/pages/Cart.svelte | Editable shopping cart and totals |
| /checkout | src/pages/Checkout.svelte | Address, payment choice and final order review |
| /orders | src/pages/Orders.svelte | Customer order history and delivery statuses |
| /orders/:id | src/pages/OrderDetail.svelte | Complete order confirmation and delivery details |
| /account | src/pages/Account.svelte | Profile summary and saved address management |
| * | src/pages/NotFound.svelte | Unknown-route recovery page |

## Navigation map
- Login -> Dashboard (valid sign-in submission)
- Login -> Signup (account creation link)
- Signup -> Dashboard (valid registration submission)
- Dashboard -> Products (shop collection and view-all controls)
- Dashboard -> ProductDetail (popular product cards)
- Sidebar -> Dashboard, Products, Categories, Orders, Account (primary navigation links)
- TopBar -> Products (search shortcut), Cart (cart icon), Account (profile shortcut), Login (logout action)
- Products -> ProductDetail (product cards)
- Categories -> Products (category collection controls)
- ProductDetail -> Cart (add item then top-bar cart) and Checkout (buy now)
- Cart -> Products (continue shopping) and Checkout (proceed to checkout)
- Checkout -> Account (manage delivery addresses) and OrderDetail (successful payment)
- Orders -> OrderDetail (order rows)
- OrderDetail -> Orders (back control)
- Any page -> NotFound (unknown URL)

## Shared components
- src/components/Sidebar.svelte — desktop primary navigation with active-link states.
- src/components/TopBar.svelte — cart item count, account shortcut, and logout control.
- src/components/Layout.svelte — authenticated storefront shell combining the sidebar and top bar.
- src/components/RequireAuth.svelte — client-side authenticated-route guard.
- src/components/Redirect.svelte — reusable replacement navigation component.

## Design tokens
- primary: #2563eb
- navy: #172554
- surface: #f8fafc
- card: #ffffff
- muted: #64748b
- line: #e2e8f0
- accent: #f59e0b
- success: #16a34a
- danger: #dc2626
