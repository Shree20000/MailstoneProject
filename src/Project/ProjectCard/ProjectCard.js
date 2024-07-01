import React from "react";
import { Container, Row } from "react-bootstrap";
import BiggerCard from "../../GlobalComponent/CardsContainer/BiggerCard";
import SmallerCard from "../../GlobalComponent/CardsContainer/SmallerCard";
import HorizontalLine from "../../GlobalComponent/HorizontalLine/HorizontalLine";
import SecondSectionSmall from "../../GlobalComponent/CardsContainer/SecondSectionSmall";
import SecondSectionBigCard from "../../GlobalComponent/CardsContainer/SecondSectionBigCard";

export default function ProjectCard() {
  return (
    <Container>
      <Row style={{ marginTop: "2rem", marginBottom: "1.3rem" }}>
        <HorizontalLine />
      </Row>

      <Row>
        <BiggerCard
          headername="PROJECT-1"
          buttonname="Residentials"
          imgurl="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719813846/bkod8pxautpabxihhfun.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
        <SmallerCard
          headername="PROJECT-2"
          buttonname="Commercials"
          imgurl="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719814110/sddjemhjzjjaoth1che1.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
      </Row>
      <Row style={{ marginTop: "1.3rem", marginBottom: "1.3rem" }}>
        <HorizontalLine />
      </Row>

      <Row>
        <SecondSectionSmall
          headername="PROJECT-2"
          buttonname="Residentials"
          imgurl="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719814110/sddjemhjzjjaoth1che1.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
        <SecondSectionBigCard
          headername="PROJECT-1"
          buttonname="Commercial"
          imgurl="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719813846/bkod8pxautpabxihhfun.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
      </Row>
      <Row style={{ marginTop: "1.3rem", marginBottom: "1.3rem" }}>
        <HorizontalLine />
      </Row>

      <Row>
        <BiggerCard
          headername="PROJECT-1"
          buttonname="Residentials"
          imgurl="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719813846/bkod8pxautpabxihhfun.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
        <SmallerCard
          headername="PROJECT-2"
          buttonname="Commercials"
          imgurl="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719465987/mailStone/ij2d8mer9xwmyletlrw6.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
      </Row>
      <Row style={{ marginTop: "1.3rem", marginBottom: "1.3rem" }}>
        <HorizontalLine />
      </Row>

      <Row>
        <BiggerCard
          headername="PROJECT-1"
          buttonname="Residentials"
          imgurl="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719813846/bkod8pxautpabxihhfun.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
        <SmallerCard
          headername="PROJECT-2"
          buttonname="Commercials"
          imgurl="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719465987/mailStone/ij2d8mer9xwmyletlrw6.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
      </Row>
      <Row style={{ marginTop: "1.3rem", marginBottom: "1.3rem" }}>
        <HorizontalLine />
      </Row>

      <Row style={{ marginBottom: "2.4rem" }}>
        <SecondSectionSmall
          headername="PROJECT-2"
          buttonname="Residentials"
          imgurl="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719465987/mailStone/ij2d8mer9xwmyletlrw6.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
        <SecondSectionBigCard
          headername="PROJECT-1"
          buttonname="Commercial"
          imgurl="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719813846/bkod8pxautpabxihhfun.png"
          contained="For three generations and nearly a century, Mailstone has been delivering elegant, timeless spaces and made-to-measure, handcrafted, fine furniture that excite the eye and nurture the soul."
        />
      </Row>
    </Container>
  );
}
