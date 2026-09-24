export type Category = 'Electronics' | 'Home' | 'Fashion' | 'Wellness'

export interface Product {
  id: string
  name: string
  category: Category
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  description: string
  inStock: boolean
  colors: string[]
}

export interface CartItem {
  productId: string
  quantity: number
  color: string
}

export interface Address {
  id: string
  label: string
  recipient: string
  line1: string
  city: string
  state: string
  postalCode: string
  phone: string
  isDefault: boolean
}

export interface Order {
  id: string
  createdAt: string
  items: CartItem[]
  total: number
  status: 'Processing' | 'Shipped' | 'Delivered'
  paymentStatus: 'Paid'
  address: Address
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  role: 'customer' | 'admin'
}
