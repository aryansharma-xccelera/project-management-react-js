import apiClient from '../api/client'
import { defaultAddresses, mockProducts } from './mockData'
import type { Address, CartItem, Order, Product } from '../types'

export const USE_MOCK = true

function read<T>(key: string, fallback: T): T {
  const raw = localStorage.getItem(key)
  if (raw) return JSON.parse(raw) as T
  localStorage.setItem(key, JSON.stringify(fallback))
  return fallback
}

export async function getProducts(): Promise<Product[]> {
  if (USE_MOCK) return read('products', mockProducts)
  return (await apiClient.get('/api/v1/products')).data as Product[]
}

export async function getProduct(id: string): Promise<Product | undefined> {
  if (USE_MOCK) return (await getProducts()).find((product) => product.id === id)
  return (await apiClient.get(`/api/v1/products/${id}`)).data as Product
}

export async function getCart(): Promise<CartItem[]> {
  if (USE_MOCK) return read<CartItem[]>('cart', [])
  return (await apiClient.get('/api/v1/cart')).data as CartItem[]
}

export async function saveCart(cart: CartItem[]): Promise<CartItem[]> {
  if (USE_MOCK) { localStorage.setItem('cart', JSON.stringify(cart)); return cart }
  return (await apiClient.put('/api/v1/cart', cart)).data as CartItem[]
}

export async function getAddresses(): Promise<Address[]> {
  if (USE_MOCK) return read('addresses', defaultAddresses)
  return (await apiClient.get('/api/v1/addresses')).data as Address[]
}

export async function createAddress(input: Omit<Address, 'id' | 'isDefault'>): Promise<Address> {
  if (USE_MOCK) {
    const addresses = await getAddresses()
    const address = { ...input, id: crypto.randomUUID(), isDefault: addresses.length === 0 }
    localStorage.setItem('addresses', JSON.stringify([...addresses, address]))
    return address
  }
  return (await apiClient.post('/api/v1/addresses', input)).data as Address
}

export async function getOrders(): Promise<Order[]> {
  if (USE_MOCK) return read<Order[]>('orders', [])
  return (await apiClient.get('/api/v1/orders')).data as Order[]
}

export async function getOrder(id: string): Promise<Order | undefined> {
  if (USE_MOCK) return (await getOrders()).find((order) => order.id === id)
  return (await apiClient.get(`/api/v1/orders/${id}`)).data as Order
}

export async function createOrder(input: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
  if (USE_MOCK) {
    const order = { ...input, id: `ORD-${Math.floor(100000 + Math.random() * 899999)}`, createdAt: new Date().toISOString() }
    const orders = await getOrders()
    localStorage.setItem('orders', JSON.stringify([order, ...orders]))
    await saveCart([])
    return order
  }
  return (await apiClient.post('/api/v1/orders', input)).data as Order
}
