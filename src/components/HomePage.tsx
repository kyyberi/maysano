import { AgentGraph } from './AgentGraph'
import { ArchitectureLayer } from './ArchitectureLayer'
import { ConcreteExample } from './ConcreteExample'
import { CreatorProfile } from './CreatorProfile'
import { DeploymentModels } from './DeploymentModels'
import { EnterpriseTrust } from './EnterpriseTrust'
import { Evidence } from './Evidence'
import { FAQ } from './FAQ'
import { FinalCTA } from './FinalCTA'
import { Footer } from './Footer'
import { GovernanceFlow } from './GovernanceFlow'
import { Header } from './Header'
import { Hero } from './Hero'
import { OutcomeStrip } from './OutcomeStrip'
import { ProblemBridge } from './ProblemBridge'
import { ProductLifecycle } from './ProductLifecycle'
import { ProductDemos } from './ProductDemos'
import { Standards } from './Standards'
import { StrategyGraph } from './StrategyGraph'
import { StructuredData } from './StructuredData'

export function HomePage() {
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
