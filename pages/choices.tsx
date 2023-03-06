import PageContainer from '../components/PageContainer/PageContainer'
import PersistingCounter from '../apps/PersistingCounter/PersistingCounter'
import { CookiesProvider } from 'react-cookie'


export default function Page() {
  return (
    <CookiesProvider>
      <PageContainer title="Choices" description="Good choices equals more choices">
        <PersistingCounter label='Khai'/>
        <PersistingCounter label='Camille'/>
        <PersistingCounter label='Parents'/>
      </PageContainer>
    </CookiesProvider>
  )
}
