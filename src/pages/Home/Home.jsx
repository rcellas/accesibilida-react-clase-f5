import SkipLink from '../../components/SkipLink/SkipLink'
import Header from '../../components/globals/Header/Header'
import Presentation from '../../components/Presentation/Presentation'
import Habilities from '../../components/Habilities/Habilities'
import Form from '../../components/Form/Form'
import Footer from '../../components/globals/Footer/Footer'


function Home() {
  return (
    <>
      <SkipLink/>
      <Header />
      <main id="main-content">
        <Presentation />
        <Habilities />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default Home