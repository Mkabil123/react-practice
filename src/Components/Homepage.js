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
    setLoading(true);

    axios.get("https://fakestoreapi.com/products").then((response) => {
      setLoading(false);
      getData(response.data);
      getFilter(response.data);
      setCategory(response.data);
    });
  };

  const filteritem = (event) => {
    getData(
      filter.filter((datas) => {
        return datas.title
          .toString()
          .toUpperCase()
          .includes(event.target.value.toUpperCase());
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
          return datas.price;
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
    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);
  }, []);

  const validate = (price) => {
    const errors = {};
    if (!price.start) {
      errors.start = "Starting value is required!";
    }
    if (!price.end) {
      errors.end = "Ending value is required!";
    } else if (price.start > price.end) {
      errors.end = "Ending value must be greater than starting value!";
    }

    return errors;
  };

  return (
    <div style={{ color: "steelblue" }}>
      <div className="container" style={{ Color: "bisque" }}>
        <Card style={{ paddingLeft: "5%", backgroundColor: "#d9d9d9" }}>
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    filtereditem(e);
                  }
                }}
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
            <div className="col-md-1  "></div>

            <div className="col-md-3  ">
              <div>
                <select
                  data-toggle="dropdown"
                  className="form-select"
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
          {data && data.length ? (
            data.map((value, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div
                    className="card "
                    style={{
                      height: "25rem",
                      marginTop: "5%",
                      background:
                        "linear-gradient(to bottom, #ffffff 0%, #ccccff 100%)",
                    }}
                  >
                    <div
                      className="card-body-center"
                      style={{ paddingTop: "25px " }}
                    >
                      <img
                        className="card-img "
                        src={value.image}
                        alt="Card  cap"
                        height="215px"
                        style={{
                          width: "45%",

                          margin: "auto",
                          display: "block",
                        }}
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
                        style={{ paddingLeft: "33px", color: "royalblue" }}
                      >
                        {value.title}
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })
          ) : loading ? (
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
            <>
              <h1 style={{ marginLeft: "47%", marginTop: "15%", color: "red" }}>
                Error{" "}
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
