import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

const app = document.getElementById('app')

async function render() {
  const { data: { session } } = await supabase.auth.getSession()
  const user = session?.user

  const route = window.location.pathname

  if (!user && route !== '/') {
    window.location.href = '/'
    return
  }

  const nav = user ? `
    <p>👋 Hello, ${user.email}</p>
    <nav>
      <a href="/">Home</a> |
      <a href="/profile">Profile</a> |
      <a href="/burn">Burn</a> |
      <a href="/claim">Claim</a> |
      <a href="/vault">Vault</a> |
      <button id="logout">Logout</button>
    </nav>
  ` : ''

  let content = ''

  if (route === '/') {
    content = user ? `<h1>Welcome back to Farpy</h1>` : `
      <h1>Welcome to Farpy</h1>
      <button id="login">Login with Supabase</button>
    `
  }

  if (route === '/profile') {
    content = '<h2>🧑 Profile Page</h2><div id="profile"></div>'
  }

  if (route === '/burn') {
    content = `<h2>🔥 Burn</h2><button id="burnBtn">Burn Token</button>`
  }

  if (route === '/claim') {
    content = `<h2>🎁 Claim Tokens</h2><button id="claimBtn">Claim</button>`
  }

  if (route === '/vault') {
    content = `<h2>📊 Vault</h2><div id="vault"></div>`
  }

  app.innerHTML = `
    ${nav}
    <main>${content}</main>
  `

  if (document.getElementById('login')) {
    document.getElementById('login').onclick = () => {
      supabase.auth.signInWithOAuth({ provider: 'github' })
    }
  }

  if (document.getElementById('logout')) {
    document.getElementById('logout').onclick = async () => {
      await supabase.auth.signOut()
      location.reload()
    }
  }

  if (route === '/burn') {
    document.getElementById('burnBtn').onclick = async () => {
      await fetch(`${import.meta.env.VITE_API_URL}/api/burn`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.id, value: 10, type: 'ritual' })
      })
      alert('🔥 Burned 10 tokens!')
    }
  }

  if (route === '/claim') {
    document.getElementById('claimBtn').onclick = async () => {
      await fetch(`${import.meta.env.VITE_API_URL}/api/claim-tokens`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.id, amount: 50, reason: 'starter bonus' })
      })
      alert('🎁 Claimed 50 tokens!')
    }
  }

  if (route === '/vault') {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/vault-share`)
    const json = await res.json()
    document.getElementById('vault').innerText = JSON.stringify(json.shares, null, 2)
  }

  if (route === '/profile') {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/init-user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.id, display_name: user.email })
    })
    const json = await res.json()
    document.getElementById('profile').innerText = JSON.stringify(json.data, null, 2)
  }
}

render()
