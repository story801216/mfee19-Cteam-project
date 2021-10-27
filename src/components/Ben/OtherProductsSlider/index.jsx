import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductItem from '../ProductItem'
import './index.css'

class OtherProducts extends Component {
  constructor(props) {
    super(props)
    this.state = { otherData: [], otherProducts: [], Location: '' }
  }

  componentDidMount() {
    ;(async () => {
      let r = await fetch('http://localhost:3001/productAll')
      let j = await r.json()
      if (j.totalRows) {
        this.setState({ otherData: j.rows })
      }
    })()
    ;(async () => {
      let r = await fetch(
        'http://localhost:3001/product/' + this.props.match.params.sid
      )
      let j = await r.json()
      if (j) {
        this.setState({ Location: j.data.Location })
      }

      let otherProducts = []
      otherProducts = this.state.otherData
        ? this.state.otherData.filter((v) => {
            return v.Location === j.data.Location
          })
        : ''

      this.setState({ otherProducts: otherProducts })
    })()
  }

  render() {
    const settings = {
      arrow: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow:
        this.state.otherProducts.length < 4
          ? this.state.otherProducts.length
          : 4,
      slidesToScroll: 1,
      responsive: [
        {
          // 螢幕寬度小於992
          breakpoint: 992,
          settings: {
            slidesToShow: 1, //一次顯示1個
            slidesToScroll: 1, //切換下一頁時移動1個
          },
        },
      ],
    }

    return (
      <div>
        <div className="other-prodcuts">
          <div className="title">
            <div className="notebook-icon">
              <img src="http://localhost:3000/images/icon/1011813.png" alt="" />
            </div>
            <div className="circle-icon">
              <img src="http://localhost:3000/images/icon/3561625.png" alt="" />
            </div>
            <div className="text">
              <p>其他人也看過</p>
            </div>
          </div>
        </div>
        <Slider className="otherProductsSlider" {...settings}>
          {this.state.otherProducts
            ? this.state.otherProducts.map((product) => {
                return (
                  <Link
                    key={product.sid}
                    to={'/prod-list/prod/' + product.sid}
                    onClick={() => {
                      this.props.updateBrowseRecordToLocalStorage(product)
                    }}
                  >
                    <ProductItem {...product} />
                  </Link>
                )
              })
            : ''}
        </Slider>
      </div>
    )
  }
}

export default withRouter(OtherProducts)
