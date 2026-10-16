import { renderToString } from 'react-dom/server'
import { AppContent } from './App'
import { InsightRoutes } from './components/InsightRoutes'
import { KentaroPage } from './components/Kentaro'

export function render(pathname = '/') {
  return renderToString(<AppContent pathname={pathname} InsightRenderer={InsightRoutes} KentaroRenderer={KentaroPage} />)
}
