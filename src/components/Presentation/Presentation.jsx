import foto from '../../assets/crispy.jpeg'
import './Presentation.css'

function Presentation() {
  return (
    <section className="presentation" aria-labelledby="crispy-title">
      <h1 className="presentation__title" id="crispy-title">Crispy</h1>
      <div className="presentation__content">
        <img 
          src={foto}  
          alt="Cotorra argentina verde llamada Crispy sentada en una silla, con plumaje brillante y postura erguida, mirando hacia la cámara con curiosidad" 
          title='Crispy el pájaro programador'
          className="presentation__image"
          loading="lazy"
        />
        <p className="presentation__description">La mejor mascota del bootcamp y gran programador</p>
      </div>
    </section>
  )
}

export default Presentation