import React, { useEffect, useState } from "react";

import axios from "axios";
import { Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Homepage = () => {
  const [data, getData] = useState([]);
  const [filter, getFilter] = useState([]);
  const [price, setPrice] = useState({
    start: "",
    end: "",
  });
  const [formError, setFormError] = useState({});
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const re = /^[0-9\b]+$/;

  const onChangeprice = (e) => {
    if (e.target.value === "" || re.test(e.target.value))
      setPrice({ ...price, [e.target.name]: e.target.value });
  };

  const gettingdata = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      getData(response.data);
      getFilter(response.data);
      setCategory(response.data);
    });
  };

  const filteritem = (event) => {
    getData(
      filter.filter((datas) => {
        let filtering = datas.title
          .toString()
          .toUpperCase()
          .includes(event.target.value.toUpperCase());
        console.log(filtering);
        if (filtering.length === 0) {
          console.log("no dat f"); // <h1>no data dound</h1>;
        } else return filtering;
      })
    );
  };

  const filtereditem = (e) => {
    getData(
      filter.filter((datas) => {
        setFormError(validate(price));
        let prices = datas.price;

        return price.start && price.end
          ? prices >= price.start && prices <= price.end
          : datas.price;
      })
    );
  };

  const categoryitem = (categories) => {
    getData(
      category.filter((datas) => {
        if (categories.target.value === "All") {
          gettingdata();
        } else {
          return datas.category
            .toString()
            .toUpperCase()
            .includes(categories.target.value.toUpperCase());
        }
      })
    );
  };

  useEffect(() => {
    gettingdata();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const validate = (price) => {
    const errors = {};
    if (!price.start) {
      errors.start = "Starting value is required!";
    }
    if (!price.end) {
      errors.end = "Ending value is required!";
    }
    return errors;
  };

  return (
    <div style={{ color: "steelblue", backgroundColor: "#FFFFFF" }}>
      {loading ? (
        <Spinner
          animation="border"
          variant="danger"
          size="xxlg"
          style={{
            marginLeft: "47%",
            marginTop: "10%",
          }}
        />
      ) : (
        <div className="container" style={{ Color: "bisque" }}>
          <Card style={{ paddingLeft: "5%", backgroundColor: "whitesmoke" }}>
            <h6>Filter By Price</h6>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="number"
                  name="start"
                  className="form-control"
                  placeholder="Enter starting price"
                  value={price.start}
                  onChange={onChangeprice}
                ></input>
                <p style={{ color: "red" }}>{formError.start}</p>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  name="end"
                  className="form-control"
                  placeholder="Enter ending price"
                  value={price.end}
                  onChange={onChangeprice}
                ></input>

                <p style={{ color: "red" }}>{formError.end}</p>
              </div>
              <button
                style={{ height: "40px", width: "70px" }}
                type="button"
                className="btn btn-primary col-md-3"
                onClick={filtereditem}
              >
                Filter
              </button>
            </div>
            <div className="row" style={{ marginBottom: "1%" }}>
              <div className="col-md-4">
                <h6>Filter By Title</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  onChange={(event) => {
                    filteritem(event);
                  }}
                ></input>
              </div>
              <div className="col-md-2  "></div>

              <div className="col-md-6  ">
                <div>
                  <select
                    data-toggle="dropdown"
                    className="custom-select"
                    onChange={(categories) => {
                      categoryitem(categories);
                    }}
                  >
                    <option value="All">All</option>
                    <option value="men's clothing">Mens Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Womens Clothing</option>
                  </select>
                </div>
              </div>
            </div>
          </Card>

          <div className="row">
            {data.map((value, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div
                    className="card "
                    style={{
                      height: "25rem",
                      marginTop: "5%",

                      backgroundColor: "#FAD94E",
                      borderBlockColor: "black",
                    }}
                  >
                    <div
                      className="card-body-center"
                      style={{ paddingTop: "25px " }}
                    >
                      <img
                        className="card-img "
                        src={value.image}
                        alt="Card image cap"
                        height="215px"
                        style={{ width: "75%", paddingLeft: "25%" }}
                      />

                      <h6
                        className="text-center"
                        style={{
                          color: "ThreeDHighlight",
                          paddingTop: "20px",
                        }}
                      >
                        {`$${value.price}`}
                      </h6>
                      <h6
                        className=" text-center"
                        style={{ paddingLeft: "33px", color: "green" }}
                      >
                        {value.title}
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
