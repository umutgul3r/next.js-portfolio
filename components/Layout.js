import Header from "@composite/Header";
import { useEffect } from "react";

function Layout({ children }) {
  useEffect(() => {
    console.log("Layout");
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
