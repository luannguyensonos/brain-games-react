import PageContainer from '../components/PageContainer/PageContainer'
import RainbowPad from '../apps/RainbowPad/RainbowPad'

export default function Page() {
  return (
    <PageContainer title="Rainbow Pad" description="A game for kids to mash the keyboard">
      <RainbowPad/>
    </PageContainer>
  )
}
