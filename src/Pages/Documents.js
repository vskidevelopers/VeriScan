import React from "react";
import { Link } from "react-router-dom";

function Documents() {
  const docs = [{ id: "dRGJ132UdskjaKJ1", title: "Doc dRGJ132UdskjaKJ1 " }];
  return (
    <>
      {docs.map((doc) => (
        <div key={doc.id}>
          <h2>
            <Link to={`/docs/${doc.id}`}>{doc.title}</Link>
          </h2>
          <p>{doc.body}</p>
        </div>
      ))}
    </>
  );
}

export default Documents;
