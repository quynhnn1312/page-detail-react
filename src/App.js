import "./App.css";
import React from "react";
import Colors from "./components/Colors";
import DetailsThumb from "./components/DetailsThumb";

class App extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "https://cdn.shopify.com/s/files/1/0049/9043/5439/products/product_5_f073bdbe-103c-4341-9348-cb7fbf62087c_450x480_crop_center.jpg",
          "https://cdn.shopify.com/s/files/1/0049/9043/5439/products/product_3_54c58d43-afd5-4a38-b121-d11016e82157_450x480_crop_center.jpg",
          "https://cdn.shopify.com/s/files/1/0049/9043/5439/products/product_11_21cdca58-c25a-467d-964c-b7c700bf0bdd_450x480_crop_center.jpg",
          "https://cdn.shopify.com/s/files/1/0049/9043/5439/products/product_7_3e7da5df-3040-473b-8de0-7337ceb27ebc_450x480_crop_center.jpg",
        ],
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({
      index: index,
    });

    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;

    return (
      <div className="app">
        {products.map((item) => (
          <div key={item._id} className="details">
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.description}</p>
              <p>{item.content}</p>
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <button className="cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
