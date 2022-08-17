import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="info">
      <article className="question">
        <header>
          <h4>{title}</h4>
          {!open ? (
            <AiOutlinePlus
              className="btn icon"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <AiOutlineMinus className="btn" onClick={() => setOpen(!open)} />
          )}
        </header>
        <p>{open && info}</p>
      </article>
    </section>
  );
};

export default Question;
