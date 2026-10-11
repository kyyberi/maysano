import { renderToString } from 'react-dom/server'
import { AppContent } from './App'
import { InsightRoutes } from './components/InsightRoutes'

export function render(pathname = '/') {
  return renderToString(<AppContent pathname={pathname} InsightRenderer={InsightRoutes} />)
}
