import React from "react";
import { Button } from "react-bootstrap";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Button
        variant="light"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <MdKeyboardDoubleArrowLeft />
      </Button>
      <Button
        variant="light"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdKeyboardArrowLeft />
      </Button>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          variant={currentPage === number ? "primary" : "light"}
          onClick={() => onPageChange(number)}
          className="mx-1"
        >
          {number}
        </Button>
      ))}
      <Button
        variant="light"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdKeyboardArrowRight />
      </Button>
      <Button
        variant="light"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <MdKeyboardDoubleArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;
