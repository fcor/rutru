import React from 'react'
import city from '../images/city.png'
import frontera from '../images/frontera.png'
import puerto from '../images/puerto.png'

const Storage = () =>
  <section className="storage column">
    <h1 className="storage-title section-title">
      Contamos con servicios de almacenaje en sitios estratégicos
    </h1>
    <p className="text storage-text">
      Powder lollipop I love. Jelly dessert marshmallow jelly. Croissant dragée cookie. Pudding candy jelly beans cotton candy tootsie roll. Bonbon
      chocolate topping lemon drops oat cake. Tart gummi bears toee. Gingerbread sweet roll candy chocolate marshmallow I love I love topping
    </p>
    <div className="storage-cards row">
      <Card icon={city}/>
      <Card icon={frontera}/>
      <Card icon={puerto}/>
    </div>
  </section>

const Card = (props) =>
  <div className="s-card column">
    <img className="t-icon" src={props.icon} alt="icon" />
    <p className="text">
      Powder lollipop I love. Jelly dessert
      marshmallow jelly. Croissant dragée
      cookie. Pudding candy jelly beans
      cotton candy tootsie roll.
    </p>
  </div>

export default Storage
