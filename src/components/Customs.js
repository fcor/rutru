import React from 'react'

const Customs = () =>
  <section className="customs column">
    <div className="customs-box">
      <h1 className="customs-title section-title">
        Nuestros servicios de aduana
      </h1>
      <p className="customs-text text">
        In just two hours, capture the critical human insights you need to conﬁdently deliver what
        customers want and expect.
      </p>
      <div className="c-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </section>

const Card = () =>
  <div className="c-card">
    <div className="icon-small"></div>
    <p className="c-card-title">Customers</p>
    <p className="c-card-text text">
      Powder lollipop I love. Jelly dessert
      marshmallow jelly. Croissant dragée
      cookie. Pudding candy jelly beans
      cotton candy tootsie roll.
    </p>
  </div>

export default Customs
