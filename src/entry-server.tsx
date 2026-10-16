import { renderToString } from 'react-dom/server'
import { AppContent } from './App'
import { ArchitecturePage } from './components/ArchitecturePage'
import { HomePage } from './components/HomePage'
import { InsightRoutes } from './components/InsightRoutes'
import { KentaroPage } from './components/Kentaro'
import { KentaroWhyPage } from './components/KentaroWhy'

export function render(pathname = '/') {
  return renderToString(<AppContent pathname={pathname} InsightRenderer={InsightRoutes} KentaroRenderer={KentaroPage} KentaroWhyRenderer={KentaroWhyPage} ArchitectureRenderer={ArchitecturePage} HomeRenderer={HomePage} />)
}
