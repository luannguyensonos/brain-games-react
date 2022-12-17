import PageContainer from '../components/PageContainer/PageContainer'
import SimpleCounter from '../apps/RainbowCounter/RainbowCounter'

export default function Page() {
  return (
    <PageContainer title="Rainbow Counter" description="A game to learn the numbers 1-100">
      <SimpleCounter/>
    </PageContainer>
  )
}
