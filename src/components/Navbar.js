import React from "react";
import { Sidetittel } from "nav-frontend-typografi";

const Navbar = () => {
  return (
    <header style={{ height: "60px" }}>
      <nav style={{ lineHeight: "60px" }}>
        <Sidetittel style={{ marginTop: "30px" }}>
          Berg-Hansen Caseoppgave
        </Sidetittel>
        <hr />
      </nav>
    </header>
  );
};

export default Navbar;
