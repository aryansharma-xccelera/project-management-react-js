import apiClient from '../api/client'
import { demoUsers } from '../data/mockData'
import type { User } from '../types'

export const USE_MOCK = true
const savedUsersKey = 'app_users'

function getUsers(): User[] {
  const saved = localStorage.getItem(savedUsersKey)
  return [...demoUsers, ...(saved ? JSON.parse(saved) as User[] : [])]
}

function localLogin(email: string, password: string): boolean {
  const user = getUsers().find((item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password)
  if (!user) return false
  localStorage.setItem('auth_token', JSON.stringify({ email: user.email, name: user.name, role: user.role }))
  return true
}

function localSignup(name: string, email: string, password: string): User | null {
  if (getUsers().some((user) => user.email.toLowerCase() === email.toLowerCase())) return null
  const user: User = { id: crypto.randomUUID(), name, email, password, role: 'customer' }
  const saved = JSON.parse(localStorage.getItem(savedUsersKey) ?? '[]') as User[]
  localStorage.setItem(savedUsersKey, JSON.stringify([...saved, user]))
  localStorage.setItem('auth_token', JSON.stringify({ email, name, role: user.role }))
  return user
}

export async function login(email: string, password: string): Promise<boolean> {
  if (USE_MOCK) return localLogin(email, password)
  const response = await apiClient.post('/api/v1/auth/login', { email, password })
  localStorage.setItem('auth_token', JSON.stringify(response.data))
  return true
}

export async function signup(name: string, email: string, password: string): Promise<User | null> {
  if (USE_MOCK) return localSignup(name, email, password)
  const response = await apiClient.post('/api/v1/auth/signup', { name, email, password })
  localStorage.setItem('auth_token', JSON.stringify(response.data))
  return response.data as User
}

export function logout(): void { localStorage.removeItem('auth_token') }
export function isAuthenticated(): boolean { return Boolean(localStorage.getItem('auth_token')) }
export function currentUser(): { email: string; name: string; role: User['role'] } | null { return JSON.parse(localStorage.getItem('auth_token') ?? 'null') }
export function currentRole(): User['role'] | null { return currentUser()?.role ?? null }
