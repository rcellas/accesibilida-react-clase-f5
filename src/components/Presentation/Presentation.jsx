import foto from '../../assets/crispy.jpeg'

function Presentation() {
  return (
    <section className='presentation' aria-labelledby='Sección presentación'>
      <h1 className='presentation__title'>Crispy</h1>
      <img src={foto} alt="Cotorra argentina verde llamada Crispy sentada en una silla, con plumaje brillante y postura erguida, mirando hacia la cámara con curiosidad"></img>
      <p>La mejor mascota del bootcamp y gran programador</p>
    </section>
  )
}

export default Presentation