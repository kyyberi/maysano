import { lazy, Suspense, type ComponentType } from 'react'
import { AgentGraph } from './components/AgentGraph'
import { ArchitectureLayer } from './components/ArchitectureLayer'
import { ArchitecturePage } from './components/ArchitecturePage'
import { ConcreteExample } from './components/ConcreteExample'
import { CreatorProfile } from './components/CreatorProfile'
import { DeploymentModels } from './components/DeploymentModels'
import { EnterpriseTrust } from './components/EnterpriseTrust'
import { Evidence } from './components/Evidence'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { GovernanceFlow } from './components/GovernanceFlow'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { KentaroWhyPage } from './components/KentaroWhy'
import { OutcomeStrip } from './components/OutcomeStrip'
import { ProblemBridge } from './components/ProblemBridge'
import { ProductLifecycle } from './components/ProductLifecycle'
import { ProductDemos } from './components/ProductDemos'
import { Standards } from './components/Standards'
import { StrategyGraph } from './components/StrategyGraph'
import { StructuredData } from './components/StructuredData'

type InsightRouteProps = {
  pathname: string
}

type KentaroRouteProps = {
  pathname: string
}

const InsightRoutes = lazy(() => import('./components/InsightRoutes').then((module) => ({ default: module.InsightRoutes })))
const KentaroRoute = lazy(() => import('./components/Kentaro').then((module) => ({ default: module.KentaroPage })))

type AppProps = {
  pathname?: string
}

export function AppContent({ pathname = '/', InsightRenderer, KentaroRenderer }: AppProps & { InsightRenderer?: ComponentType<InsightRouteProps>; KentaroRenderer?: ComponentType<KentaroRouteProps> }) {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path.startsWith('/insights')) {
    if (InsightRenderer) return <InsightRenderer pathname={path} />
    return <Suspense fallback={null}><InsightRoutes pathname={path} /></Suspense>
  }

  if (path === '/kentaro/why-kentaro-exists') return <KentaroWhyPage />
  if (path === '/kentaro' || path.startsWith('/kentaro/episodes/')) {
    if (KentaroRenderer) return <KentaroRenderer pathname={path} />
    return <Suspense fallback={null}><KentaroRoute pathname={path} /></Suspense>
  }

  if (path === '/architecture') return <ArchitecturePage />

  return (
    <>
      <StructuredData />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <OutcomeStrip />
        <ProblemBridge />
        <StrategyGraph />
        <ConcreteExample />
        <ProductDemos />
        <ArchitectureLayer />
        <DeploymentModels />
        <GovernanceFlow />
        <AgentGraph />
        <ProductLifecycle />
        <Evidence />
        <CreatorProfile />
        <Standards />
        <EnterpriseTrust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default function App({ pathname = '/' }: AppProps) {
  return <AppContent pathname={pathname} />
}
