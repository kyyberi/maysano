import { lazy, Suspense, type ComponentType } from 'react'

type InsightRouteProps = {
  pathname: string
}

type KentaroRouteProps = {
  pathname: string
}

type RouteComponent = ComponentType<Record<string, never>>

const InsightRoutes = lazy(() => import('./components/InsightRoutes').then((module) => ({ default: module.InsightRoutes })))
const KentaroRoute = lazy(() => import('./components/Kentaro').then((module) => ({ default: module.KentaroPage })))
const KentaroWhyRoute = lazy(() => import('./components/KentaroWhy').then((module) => ({ default: module.KentaroWhyPage })))
const ArchitectureRoute = lazy(() => import('./components/ArchitecturePage').then((module) => ({ default: module.ArchitecturePage })))
const HomeRoute = lazy(() => import('./components/HomePage').then((module) => ({ default: module.HomePage })))

type AppProps = {
  pathname?: string
}

export function AppContent({ pathname = '/', InsightRenderer, KentaroRenderer, KentaroWhyRenderer, ArchitectureRenderer, HomeRenderer }: AppProps & { InsightRenderer?: ComponentType<InsightRouteProps>; KentaroRenderer?: ComponentType<KentaroRouteProps>; KentaroWhyRenderer?: RouteComponent; ArchitectureRenderer?: RouteComponent; HomeRenderer?: RouteComponent }) {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path.startsWith('/insights')) {
    if (InsightRenderer) return <InsightRenderer pathname={path} />
    return <Suspense fallback={null}><InsightRoutes pathname={path} /></Suspense>
  }

  if (path === '/kentaro/why-kentaro-exists') {
    if (KentaroWhyRenderer) return <KentaroWhyRenderer />
    return <Suspense fallback={null}><KentaroWhyRoute /></Suspense>
  }
  if (path === '/kentaro') {
    if (KentaroRenderer) return <KentaroRenderer pathname={path} />
    return <Suspense fallback={null}><KentaroRoute pathname={path} /></Suspense>
  }

  if (path === '/architecture') {
    if (ArchitectureRenderer) return <ArchitectureRenderer />
    return <Suspense fallback={null}><ArchitectureRoute /></Suspense>
  }

  if (HomeRenderer) return <HomeRenderer />
  return <Suspense fallback={null}><HomeRoute /></Suspense>
}

export default function App({ pathname = '/' }: AppProps) {
  return <AppContent pathname={pathname} />
}
