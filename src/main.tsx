import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

document.documentElement.classList.add('js')

function restoreInitialHashPosition() {
  const hash = window.location.hash
  if (!hash) return

  const id = decodeURIComponent(hash.slice(1))
  if (!id) return

  const scrollToTarget = () => {
    document.getElementById(id)?.scrollIntoView({ block: 'start' })
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollToTarget()
    })
  })
  window.setTimeout(scrollToTarget, 300)
  window.setTimeout(scrollToTarget, 800)
}

const app = (
  <React.StrictMode>
    <App pathname={window.location.pathname} />
  </React.StrictMode>
)

const root = document.getElementById('root')!

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}

restoreInitialHashPosition()
