import React, { useState } from "react";
import Form from './Form';
import Card from './Card'

const Main = ({setEmail}) => {
  const [formResults, setFormResults] = useState({
    name: "",
    email: "",
    img_url: "",
    age: "",
  });

  return <section>
    <Form setFormResults={setFormResults} setEmail={setEmail}/>
    <Card formResults={formResults}/>
  </section>
};

export default Main;
