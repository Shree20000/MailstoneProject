import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./Product.css";
import { GoPlus } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import cup from "../../assests/Topbarimg/40px/image 2.png";
import { GoSearch } from "react-icons/go";
import { FaListUl } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { PiListFill } from "react-icons/pi";
import { FaSortUp } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Components/Pagination/pagination";
import { IoIosArrowDown } from "react-icons/io";

function Product() {
  // Sample product data
  const [products] = useState([
    {
      id: 1,
      image: cup,
      name: "Mug-Generic",
      category: "Home And Living",
      subCategory: "Others",
    },
    {
      id: 2,
      image: cup,
      name: "Mug-Generic",
      category: "Home And Living",
      subCategory: "Others",
    },
    {
      id: 3,
      image: cup,
      name: "Mug-Generic",
      category: "Home And Living",
      subCategory: "Others",
    },
    {
      id: 4,
      image: cup,
      name: "Mug-Generic",
      category: "Home And Living",
      subCategory: "Others",
    },
    {
      id: 5,
      image: cup,
      name: "Mug-Generic",
      category: "Home And Living",
      subCategory: "Others",
    },
    {
      id: 6,
      image: cup,
      name: "Mug-Generic",
      category: "Home And Living",
      subCategory: "Others",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeButton, setActiveButton] = useState("all");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Filtering logic
  const handleFilter = (filter) => {
    setActiveButton(filter);
    if (filter === "all") {
      setFilteredProducts(products);
    } else if (filter === "available") {
      setFilteredProducts(
        products.filter((product) => product.status === "available")
      );
    } else if (filter === "disabled") {
      setFilteredProducts(
        products.filter((product) => product.status === "disabled")
      );
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container>
        <Row>
          <Col id="products">Products</Col>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              <Button id="manage-cat">Manage Category</Button>
              <Button id="add-product" onClick={() => navigate("/addproduct")}>
                <span id="plus-icon-span">
                  <GoPlus id="plus-icon" />
                </span>
                Add Product
              </Button>
            </div>
          </Col>
        </Row>

        <Row style={{ paddingLeft: "0.2rem", paddingRight: "3rem" }}>
          <div>
            <Button
              id="all-btn"
              className={activeButton === "all" ? "active-filter-btn" : ""}
              onClick={() => handleFilter("all")}
            >
              All <span className="two-eight">283</span>
            </Button>
            <Button
              id="all-btn"
              className={
                activeButton === "available" ? "active-filter-btn" : ""
              }
              onClick={() => handleFilter("available")}
            >
              Available <span className="two-eight">283</span>
            </Button>
            <Button
              id="all-btn"
              className={activeButton === "disabled" ? "active-filter-btn" : ""}
              onClick={() => handleFilter("disabled")}
            >
              Disabled <span className="two-eight">283</span>
            </Button>
          </div>
        </Row>

        <div
          style={{
            border: "1px solid #E8E9EB",
            borderRadius: "10px",
          }}
        >
          <Row>
            <Col lg={7}>
              <div style={{ position: "relative", paddingLeft: "0.5rem" }}>
                <FormControl
                  type="text"
                  placeholder="Search products..."
                  className="search-option"
                />
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "25px",
                    right: "20px",
                    marginRight: "1rem",
                    transform: "translateY(-50%)",
                  }}
                >
                  <GoSearch />
                </span>
              </div>
            </Col>
            <Col
              lg={5}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "2rem",
              }}
            >
              <div className="parent-div">
                <div className="sub-div">
                  <div className="sub-div2">
                    <PiListFill style={{ fontSize: "23px" }} />
                  </div>
                  <div className="sub-div3">
                    <FaListUl style={{ fontSize: "19px" }} />
                  </div>
                </div>
                <div>
                  <Button
                    id="short-btn"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Short
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ lineHeight: "0.1" }}>
                        <FaSortUp />
                      </span>
                      <span style={{ lineHeight: "0.1" }}>
                        <TiArrowSortedDown />
                      </span>
                    </span>
                  </Button>
                </div>
                <div>
                  <Button id="filter-btn">
                    <MdFilterListAlt id="filter-icon" />
                    Filters
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ paddingLeft: "1rem", marginTop: "1.3rem" }}>
            <Col className="preview">Preview</Col>
            <Col className="preview">Name</Col>
            <Col className="preview">Category</Col>
            <Col className="preview">Sub Category</Col>
            <Col className="preview">Actions</Col>
          </Row>
          <hr id="hr-id1" />

          {currentItems.map((product) => (
            <React.Fragment key={product.id}>
              <Row style={{ paddingLeft: "1rem" }}>
                <Col>
                  <Image
                    src={product.image}
                    style={{ width: "35px", marginTop: "-0.3rem" }}
                  />
                </Col>
                <Col className="preview34">{product.name}</Col>
                <Col className="preview34">{product.category}</Col>
                <Col className="preview34">{product.subCategory}</Col>
                <Col>
                  <span className="cross">
                    <MdOutlineModeEditOutline className="cross45-icon" />
                  </span>
                  <span className="cross45">
                    <RxCross2 className="cross45-icon" />
                  </span>
                </Col>
              </Row>
              <hr id="hr-id" />
            </React.Fragment>
          ))}

          <Row style={{ marginBottom: "1rem" }}>
            <Col>
              <Button id="btn-10">
                10 <IoIosArrowDown />
              </Button>
              <span id="showing">Showing 1 - 10 of 100</span>
            </Col>
            <Col
              md={6}
              lg={6}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "1.7rem",
              }}
            >
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(products.length / itemsPerPage)}
                onPageChange={handlePageChange}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Product;
