import { AgentGraph } from './components/AgentGraph'
import { ArchitectureLayer } from './components/ArchitectureLayer'
import { ConcreteExample } from './components/ConcreteExample'
import { EnterpriseTrust } from './components/EnterpriseTrust'
import { Evidence } from './components/Evidence'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { GovernanceFlow } from './components/GovernanceFlow'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OutcomeStrip } from './components/OutcomeStrip'
import { ProblemBridge } from './components/ProblemBridge'
import { ProductLifecycle } from './components/ProductLifecycle'
import { Standards } from './components/Standards'
import { StrategyGraph } from './components/StrategyGraph'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <OutcomeStrip />
        <ProblemBridge />
        <StrategyGraph />
        <ConcreteExample />
        <ArchitectureLayer />
        <GovernanceFlow />
        <AgentGraph />
        <ProductLifecycle />
        <Evidence />
        <Standards />
        <EnterpriseTrust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
