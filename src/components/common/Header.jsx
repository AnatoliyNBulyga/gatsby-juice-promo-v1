import React from "react"
import juiceImg from '../../assets/images/juice.png'
import leaf1 from '../../assets/images/leaf01.png'
import leaf2 from '../../assets/images/leaf02.png'
import leaf3 from '../../assets/images/leaf03.png'
import leaf4 from '../../assets/images/leaf04.png'
import leaf5 from '../../assets/images/leaf05.png'
import WithParallax from "../../hoc/WithParallax"

const Header = () => {

  return (
    <div className="wrapper">
      <div className="nav">
        <div className="logo">Clean Juice</div>

        <div className="menu-links">
          <ul>
            <li>locations</li>
            <li>our menu</li>
            <li>our story</li>
            <li>meet our teem</li>
            <li>own a clean juice</li>
            <li>contact us</li>
          </ul>
        </div>

        <div className="search"><i className="fa fa-search"></i></div>

        <div className="account">my account</div>

        <div className="cart"><i className="i fa fa-shopping-cart"></i></div>
      </div>

      <div className="content">
        <div className="tagline">Find your clean juice</div>

        <div className="pages"><span>2</span>/21</div>

        <div className="title">orange</div>

        <div className="more"><a href="#">show all the juices</a></div>

        <div className="desc">
          <p>
            Your <span>healthy</span> life <br/>
            starts here with us
          </p>
          <p>
            A family owned company founded with the purpose of giving your family access to clean, organic products
            while
            you are on the go.
          </p>
        </div>
      </div>

      <div className="juice">
        <img src={juiceImg} alt="Juice" />
      </div>

      <WithParallax>
        <div className="leaves parallax__items">
          <ul>
            <li className="layer layer_1">
              <img src={leaf1} alt="Leaf" />
            </li>
            <li className="layer layer_2">
              <img src={leaf2} alt="Leaf" />
            </li>
            <li className="layer layer_3">
              <img src={leaf3} alt="Leaf" />
            </li>
            <li className="layer layer_4">
              <img src={leaf4} alt="Leaf" />
            </li>
            <li className="layer layer_5">
              <img src={leaf5} alt="Leaf" />
            </li>
          </ul>
        </div>
      </WithParallax>

      <div className="arrows">
        <button className="prev"><i className="fa fa-chevron-left"></i></button>
        <button className="next"><i className="fa fa-chevron-right"></i></button>
      </div>


    </div>
  )
}

export default Header