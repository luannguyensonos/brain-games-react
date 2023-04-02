import PageContainer from '../components/PageContainer/PageContainer'
import AnalogClockGame from '../apps/AnalogClockGame/AnalogClockGame'

export default function Page() {
  return (
    <PageContainer title="Clock Practice" description="A game for learning to read time">
      <AnalogClockGame/>
    </PageContainer>
  )
}
