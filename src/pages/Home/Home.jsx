import Presentation from '../../components/Presentation/Presentation'
import Habilities from '../../components/Habilities/Habilities'
import Form from '../../components/Form/Form'
import Header from '../../components/globals/Header/Header'
import Footer from '../../components/globals/Footer/Footer'


function Home() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Habilities />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default Home