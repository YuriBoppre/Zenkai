import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Page.css";

const Page = () => {
  return (
    <section className="containerPage">
        <Sidebar />
        <div className="Other">Other</div>
    </section>
  );
};

export default Page;
