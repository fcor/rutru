import React from 'react'
import Button from  './Button'

const Transport = () =>
  <section className="transport column">
    <h1 className="transport-title section-title">
      Nuestras soluciones de transporte
    </h1>
    <div className="transport-cards row">
      <Card />
      <Card />
      <Card />
    </div>
    <p className="text">
      In just two hours, capture the critical human insights you need to conﬁdently deliver what
      customers want and expect.
    </p>
  </section>

const Card = () =>
  <div className="t-card column">
    <div className="icon"></div>
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
