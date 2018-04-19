import React from 'react'
import Button from  './Button'
import aereo from '../images/aereo.png'
import terrestre from '../images/terrestre.png'
import mar from '../images/mar.png'

const Transport = () =>
  <section className="transport column">
    <h1 className="transport-title section-title">
      Nuestras soluciones de transporte
    </h1>
    <div className="transport-cards row">
      <Card icon={terrestre}/>
      <Card icon={aereo}/>
      <Card icon={mar}/>
    </div>
    <p className="text">
      In just two hours, capture the critical human insights you need to conﬁdently deliver what
      customers want and expect.
    </p>
  </section>

const Card = (props) =>
  <div className="t-card column">
    <img className="t-icon" src={props.icon} alt="icon" />
    <p className="text">
      Powder lollipop I love. Jelly dessert
      marshmallow jelly. Croissant dragée
      cookie. Pudding candy jelly beans
      cotton candy tootsie roll.
    </p>
    <Button type="red">
      Ver más
    </Button>
  </div>

export default Transport
