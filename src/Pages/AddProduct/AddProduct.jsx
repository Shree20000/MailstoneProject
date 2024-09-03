import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { WithContext as ReactTagInput } from "react-tag-input";
import "./AddProduct.css";
import CustomTagInput from "./CustomTagInput";
import SetupProduct from "./Components/SetupProduct/SetupProduct";

function AddProduct() {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        style={{ display: "flex", textAlign: "center", alignItems: "center" }}
      >
        <div onClick={() => navigate(-1)}>
          <FaArrowLeft id="arrow-left" />
        </div>
        <div className="add-product">Add Product</div>
      </div>

      <Form>
        <Row style={{ paddingRight: "2.5rem" }}>
          <Col md={6} lg={6}>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label id="product-level">
                Product Name <span id="star">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter product name" />
            </Form.Group>
          </Col>
          <Col md={6} lg={6}>
            <Form.Group className="mb-3" controlId="productType">
              <Form.Label id="product-level">
                Product Type <span id="star">*</span>
              </Form.Label>
              <Form.Select>
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ paddingRight: "2.5rem" }}>
          <Col md={6} lg={6}>
            <Form.Group className="mb-3" controlId="color">
              <Form.Label id="product-level">
                Color <span id="star">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter color" />
            </Form.Group>
          </Col>
          <Col md={6} lg={6}>
            <Form.Group className="mb-3" controlId="subCategory">
              <Form.Label id="product-level">
                Sub Category <span id="star">*</span>
              </Form.Label>
              <Form.Select>
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ paddingRight: "2.5rem" }}>
          <Col md={6} lg={6}>
            <div id="product-level-des">Description</div>
            <ReactQuill
              className="description-editor"
              theme="snow"
              placeholder="Type something"
            />
          </Col>
          <Col md={6} lg={6}>
            <Form.Group className="mb-3" controlId="templateCategory">
              <Form.Label id="product-level">
                Template Category <span id="star">*</span>
              </Form.Label>
              <Form.Select>
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <div>
              <div id="product-level-des">Tags</div>
              <CustomTagInput />
            </div>
          </Col>
        </Row>
      </Form>
      <div id="row-parent-div">
        <Row>
          <Col md={5} lg={5}>
            <SetupProduct />
          </Col>
          <Col md={7} lg={7}></Col>
        </Row>
      </div>
    </Container>
  );
}

export default AddProduct;
