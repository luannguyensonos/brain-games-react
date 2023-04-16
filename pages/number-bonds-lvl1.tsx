import PageContainer from '../components/PageContainer/PageContainer'
import NumberBondGame from '../apps/NumberBondGame/NumberBondGame'

export default function Page() {
  return (
    <PageContainer title="Number Bonds Level 1" description="A game for learning addition bonds">
      <NumberBondGame/>
    </PageContainer>
  )
}
