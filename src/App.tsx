import { AgentControls } from './components/AgentControls'
import { AgentGraph } from './components/AgentGraph'
import { ArchitectureLayer } from './components/ArchitectureLayer'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { GovernanceFlow } from './components/GovernanceFlow'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PlatformComparison } from './components/PlatformComparison'
import { ProcessFlow } from './components/ProcessFlow'
import { ProductLifecycle } from './components/ProductLifecycle'
import { Standards } from './components/Standards'
import { StrategyGraph } from './components/StrategyGraph'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <Hero />
      <ArchitectureLayer />
      <StrategyGraph />
      <ProductLifecycle />
      <GovernanceFlow />
      <AgentGraph />
      <AgentControls />
      <PlatformComparison />
      <ProcessFlow />
      <Standards />
      <FinalCTA />
      <Footer />
    </>
  )
}
