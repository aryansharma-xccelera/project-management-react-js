import type { Address, Product, User } from '../types'

export const demoUsers: User[] = [
  { id: 'u1', name: 'Avery Morgan', email: 'avery@example.com', password: 'password123', role: 'customer' },
  { id: 'u2', name: 'Store Admin', email: 'admin@example.com', password: 'password123', role: 'admin' }
]

export const mockProducts: Product[] = [
  { id: 'p1', name: 'Orbit Noise Cancelling Headphones', category: 'Electronics', price: 129, originalPrice: 159, rating: 4.8, reviews: 234, image: '🎧', description: 'Immersive sound with soft memory foam cushions and 30-hour battery life.', inStock: true, colors: ['Midnight', 'Cloud'] },
  { id: 'p2', name: 'Luma Desk Lamp', category: 'Home', price: 58, rating: 4.6, reviews: 89, image: '💡', description: 'A warm, dimmable light made for calm corners and focused work.', inStock: true, colors: ['Sand', 'Black'] },
  { id: 'p3', name: 'Arc Everyday Sneakers', category: 'Fashion', price: 84, rating: 4.7, reviews: 162, image: '👟', description: 'Lightweight everyday sneakers with a comfortable cushioned sole.', inStock: true, colors: ['White', 'Stone'] },
  { id: 'p4', name: 'Serein Ceramic Set', category: 'Home', price: 46, rating: 4.9, reviews: 72, image: '☕', description: 'Four hand-finished ceramic cups for your slow morning ritual.', inStock: true, colors: ['Cream', 'Sage'] },
  { id: 'p5', name: 'Pulse Smart Watch', category: 'Electronics', price: 199, rating: 4.5, reviews: 301, image: '⌚', description: 'Track your movement, sleep and notifications in a refined silhouette.', inStock: true, colors: ['Black', 'Rose'] },
  { id: 'p6', name: 'Cloud Knit Throw', category: 'Home', price: 64, rating: 4.8, reviews: 120, image: '🧶', description: 'An exceptionally soft textured throw for every season.', inStock: false, colors: ['Oat', 'Blue'] },
  { id: 'p7', name: 'Daily Renewal Serum', category: 'Wellness', price: 38, rating: 4.6, reviews: 190, image: '✨', description: 'A gentle hydrating serum with vitamin-rich botanical extracts.', inStock: true, colors: ['Clear'] },
  { id: 'p8', name: 'Canvas Market Tote', category: 'Fashion', price: 32, rating: 4.4, reviews: 55, image: '👜', description: 'A durable, spacious canvas tote designed for the everyday.', inStock: true, colors: ['Natural', 'Navy'] },
  { id: 'p9', name: 'Mini Air Purifier', category: 'Wellness', price: 76, rating: 4.5, reviews: 92, image: '🌿', description: 'A quiet compact purifier for your bedside or workspace.', inStock: true, colors: ['White'] },
  { id: 'p10', name: 'Travel Charger Kit', category: 'Electronics', price: 42, rating: 4.7, reviews: 144, image: '🔌', description: 'A fast charging kit with interchangeable travel adapters.', inStock: true, colors: ['Graphite'] }
]

export const defaultAddresses: Address[] = [
  { id: 'a1', label: 'Home', recipient: 'Avery Morgan', line1: '18 Willow Lane', city: 'Austin', state: 'Texas', postalCode: '78701', phone: '(512) 555-0198', isDefault: true }
]
