import React from "react";
import "./selectTagStore.css";

const storeMap = [
  { city: "台北市", site: ["大安區", "信義區", "松山區"] },
  { city: "新北市", site: ["板橋區", "土城區", "新莊區"] },
  { city: "台中市", site: ["北屯區", "大甲區", "后里區"] },
];

class SelectTagStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SiteArr: [] };
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeSite = this.handleChangeSite.bind(this);
  }

  handleChangeCity(event) {
    this.props.setStoresMapCity(event.target.value);

    if (event.target.value === "縣市") {
      this.setState({ SiteArr: [] });
    } else {
      storeMap.forEach((v) => {
        if (event.target.value === v.city) {
          this.setState({ SiteArr: v.site });
        }
      });
    }
  }

  handleChangeSite(event) {
    this.props.setStoresMapSite(event.target.value);
  }

  render() {
    return (
      <>
        <div className="selectAll">
          <label>
            <select
              className="selectClass"
              value={this.props.storesMapCity}
              onChange={this.handleChangeCity}
            >
              <option value="縣市">縣市</option>
              {this.props.inputCityIn.map((v, i) => (
                <option value={v} key={i}>
                  {v}
                </option>
              ))}
            </select>
          </label>

          <label>
            <select
              className="selectClass"
              value={this.props.storesMapSite}
              onChange={this.handleChangeSite}
            >
              <option value="區域">區域</option>
              {this.props.inputSiteIn.map((v, i) => (
                <option value={v} key={i}>
                  {v}
                </option>
              ))}
            </select>
          </label>
        </div>
      </>
    );
  }
}
export default SelectTagStore;
