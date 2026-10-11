import {
  DataContractsInsightArticle,
  GovernedDeliveryInsightArticle,
  GovernedAgentsInsightArticle,
  InsightArticle,
  InsightsIndex,
  KnowledgeGraphInsightArticle,
  MinimumLovableGovernanceInsightArticle,
} from './Insights'

export function InsightRoutes({ pathname }: { pathname: string }) {
  if (pathname === '/insights') return <InsightsIndex />
  if (pathname === '/insights/data-catalog-vs-data-product-portfolio-management') return <InsightArticle />
  if (pathname === '/insights/data-contracts-and-data-product-specifications') return <DataContractsInsightArticle />
  if (pathname === '/insights/traditional-governance-to-minimum-lovable-governance') return <MinimumLovableGovernanceInsightArticle />
  if (pathname === '/insights/knowledge-graph-vs-ontology') return <KnowledgeGraphInsightArticle />
  if (pathname === '/insights/traditional-ai-agents-vs-governed-ai-agents') return <GovernedAgentsInsightArticle />
  if (pathname === '/insights/manual-vs-ai-assisted-governed-data-product-delivery') return <GovernedDeliveryInsightArticle />

  return null
}
