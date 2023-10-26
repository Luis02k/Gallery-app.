import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Modal } from "@nextui-org/react";

export const Cardcontainer = ({ img }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card style={{ margin: "10px", overflow: "hidden" }}>
        <img
          onClick={() => {
            setIsOpen(true);
          }}
          class="rounded mx-auto d-block"
          src={img}
          className="card-img-top"
          alt="imagen.png"
        />
      </Card>
      <Modal size="full" blur open={isOpen}>
        <img
          width={"1080px"}
          height={"auto"}
          class="rounded mx-auto d-block"
          src={img}
        />
      </Modal>
      {/* <h1>1</h1>
      <h2>2</h2>
      <h3>3</h3>
      <h4>4</h4>
      <h5>5</h5>
      <h6>6</h6>
      <h7>7</h7> */}
    </>
  );
};

//aa

Cardcontainer.propTypes = {
  img: PropTypes.string,
};

export default Cardcontainer;
