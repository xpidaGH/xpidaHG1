import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CustomersList from "./CustomersList";
import CustomerCreateUpdate from "./CustomerCreateUpdate";

const BaseLayout = () => (
  <footer className="bg-teal-800">
    <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
      <a
        href="#crm"
        className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
      >
        CRM
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 text-white flex flex-wrap items-center text-base justify-center">
        <a href="/" className="mr-5">
          CUSTOMERS
        </a>
        <a href="/customer" className="mr-5 hover:text-white">
          CREATE CUSTOMER
        </a>
      </nav>
      <div>
        <Route path="/" exact component={CustomersList} />
        <Route path="/customer/:pk" component={CustomerCreateUpdate} />
        <Route path="/customer/" exact component={CustomerCreateUpdate} />
      </div>
    </div>
  </footer>
);

class CrmApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    );
  }
}

export default CrmApp;
