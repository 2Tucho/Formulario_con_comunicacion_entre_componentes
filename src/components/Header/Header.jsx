import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";

const Header = () => {
  const {email} = useContext(FormContext)

  return <div>
    <p>Email: {email}</p>
  </div>;
};

export default Header;
