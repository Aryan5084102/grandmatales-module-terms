import Header from './Header'
import TabsComponent from './TabsComponent'
import '../styles/global.css'

const FAQItem = () => {
  return (
    <div className='flex flex-col gap-5 '>
      <Header />
      <TabsComponent />
    </div>
  )
}

export default FAQItem