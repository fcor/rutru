import React from 'react'

const Storage = () =>
  <section className="storage column">
    <h1 className="storage-title section-title">
      Jelly dessert marshmallow jelly
    </h1>
    <p className="text storage-text">
      Powder lollipop I love. Jelly dessert marshmallow jelly. Croissant dragée cookie. Pudding candy jelly beans cotton candy tootsie roll. Bonbon
      chocolate topping lemon drops oat cake. Tart gummi bears toee. Gingerbread sweet roll candy chocolate marshmallow I love I love topping
    </p>
    <div className="storage-cards row">
      <Card />
      <Card />
      <Card />
    </div>
  </section>

const Card = () =>
  <div className="s-card column">
    <div className="icon"></div>
    <p className="text">
      Powder lollipop I love. Jelly dessert
      marshmallow jelly. Croissant dragée
      cookie. Pudding candy jelly beans
      cotton candy tootsie roll.
    </p>
  </div>

export default Storage
