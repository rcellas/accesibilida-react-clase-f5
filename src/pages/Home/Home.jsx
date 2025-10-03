import Presentation from '../../components/Presentation/Presentation'
import Habilities from '../../components/Habilities/Habilities'
import Form from '../../components/Form/Form'
import Header from '../../components/globals/Header/Header'
import Footer from '../../components/globals/Footer/Footer'
import SkipLink from '../../components/SkipLink/SkipLink'


function Home() {
  return (
    <>
      <SkipLink/>
      <Header />
      <main id='main-content'>
        <Presentation />
        <Habilities />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default Home