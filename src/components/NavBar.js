import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const newLinks = links.map((link)=>{
    return <a key={link}>{link}</a>
  })

  return <nav>{newLinks}</nav>;
}

export default NavBar;
