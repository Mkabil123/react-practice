import React, { useEffect, useState } from "react";

import axios from "axios";
import { Card, Form } from "react-bootstrap";

const Homepage = () => {
  const [data, getData] = useState([]);
  const [filter, getFilter] = useState([]);
  const [price, setPrice] = useState({
    start: "",
    end: "",
  });

  const onChangeprice = (e) => {
    setPrice({ ...price, [e.target.name]: e.target.value });
  };

  const gettingdata = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      getData(response.data);
      getFilter(response.data);
      console.log(response.data);
    });
  };

  const filteritem = (event) => {
    console.log(event, "yuygfuyfuyf");
    getData(
      filter.filter((datas) => {
        // console.log(datas.dis_feetype_name);
        return datas.category
          .toString()
          .toUpperCase()
          .includes(event.target.value.toUpperCase());
      })
    );
  };
  const filtereditem = (e) => {
    console.log(price, "yuygfuyfuyf");
    getData(
      filter.filter((datas) => {
        let prices = datas.price;
        return prices >= price.start && prices <= price.end;
      })
    );
  };
  useEffect(() => {
    gettingdata();
  }, []);
  return (
    <div>
      <div className="container">
        <Card className="d-flex">
          <h2>Filter By Price</h2>
          <Form>
            <input
              style={{ width: "20%", height: "47%", marginLeft: "2%" }}
              type="text"
              name="start"
              class="form-group"
              placeholder="Enter starting price"
              value={price.start}
              onChange={onChangeprice}
            ></input>
            <input
              style={{ width: "20%", height: "47%", margin: "2%" }}
              type="text"
              name="end"
              class="form-group"
              placeholder="Enter ending price"
              value={price.end}
              onChange={onChangeprice}
            ></input>
            <button
              style={{ marginLeft: "2%" }}
              type="button"
              className="btn btn-primary"
              onClick={filtereditem}
            >
              Filter
            </button>
            <h2>Filter By Category</h2>
            <input
              style={{ width: "25%", height: "47%", margin: "2%" }}
              type="search"
              class="form-control"
              placeholder="type to search"
              onChange={(event) => {
                filteritem(event);
              }}
            ></input>
          </Form>
        </Card>

        <div className="row">
          {data.map((value) => {
            return (
              <div className="col -4">
                <div
                  className="card-body"
                  style={{
                    width: "18rem",
                    height: "36rem",

                    margin: "4%",
                    backgroundColor: "lightgrey",
                    borderBlockColor: "red",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={value.image}
                    alt="Card image cap"
                    width="75%"
                    height="70%"
                  />
                  <h6 className="card-title">{`Id:${value.id}`}</h6>
                  <h6 className="card-title">{`title:${value.title}`}</h6>
                  <h6 className="card-title">{`Price:${value.price}`}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
