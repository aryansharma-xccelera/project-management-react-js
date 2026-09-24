/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: { extend: { colors: { primary: '#2563eb', navy: '#172554', surface: '#f8fafc', card: '#ffffff', muted: '#64748b', line: '#e2e8f0', accent: '#f59e0b', success: '#16a34a', danger: '#dc2626' }, fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] }, borderRadius: { panel: '1rem' } } },
  plugins: []
}
