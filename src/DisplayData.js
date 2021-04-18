import React from "react";

const DisplayData = ({ data }) => {
  console.log("dataaarr" + data);
  //console.log("ggg" + data.id);
  if (data != null) {
    return (
      <div>
        <div>
          <p>Name : {data.name}</p>
          <p>Price : {data.price}</p>
          <p>Description : {data.description}</p>
          <p>Published : {data.published}</p>
        </div>
      </div>
    );
  } else {
    return <div>No product available for this id</div>;
  }
};

export default DisplayData;
