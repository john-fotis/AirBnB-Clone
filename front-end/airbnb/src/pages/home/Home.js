import React, { Component } from "react";
import UserService from "../../_services/user.service";
// import {PropertyListingsProvider} from '../../context/PropertyListingsProvider';
import Hero from '../../components/Listings/Hero/Hero';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getListings().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <Hero />
        <div className="container">
          {/* <PropertyListingsProvider /> */}
          <div className="content">
            <ul className="products">
              <li>
                <div className="product">
                  <img className="product-image" src="./images/d1.jpg" alt="product" />
                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="/images/d1.jpg" alt="product" />
                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="/images/d1.jpg" alt="product" />
                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="/images/d1.jpg" alt="product" />
                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="/images/d1.jpg" alt="product" />
                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="product" />
                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;