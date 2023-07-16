import React from "react";

const TechCard = ({ img, img2, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link text-center "
      onClick={onClick}
    >
      <div
        className="relative rounded-lg scale-50 overflow-visible transition-all ease-out duration-300 h-48 mob:h-auto tecnologias text-center"
        style={{ height: "auto", width:"auto" }}
      >
        <img
          onMouseOver={e => (e.currentTarget.src = img2)}
          onMouseOut={e => (e.currentTarget.src = img)}
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium place-items-center" style={{textAlign:"center"}}>
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50 place-items-center">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default TechCard;
