import React, { Component } from "react";
import CustomersService from "./CustomersService";

const customersService = new CustomersService();

class CustomerCreateUpdate extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    if (params && params.pk) {
      customersService.getCustomer(params.pk).then((c) => {
        this.refs.firstname.value = c.first_name;
        this.refs.lastname.value = c.last_name;
        this.refs.phone.value = c.phone;
        this.refs.email.value = c.email;
        this.refs.language.value = c.language;
        this.refs.address.value = c.address;
        this.refs.description.value = c.description;
      });
    }
  }

  handleCreate() {
    customersService
      .createCustomer({
        first_name: this.refs.firstname.value,
        last_name: this.refs.lastname.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
        language: this.refs.language.value,
        address: this.refs.address.value,
        description: this.refs.description.value,
      })
      .then((result) => {
        alert("Customer created!");
      })
      .catch(() => {
        alert("There was an error! Please re-check your form.");
      });
  }
  handleUpdate(pk) {
    customersService
      .updateCustomer({
        pk: pk,
        first_name: this.refs.firstname.value,
        last_name: this.refs.lastname.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
        language: this.refs.language.value,
        address: this.refs.address.value,
        description: this.refs.description.value,
      })
      .then((result) => {
        console.log(result);
        alert("Customer updated!");
      })
      .catch(() => {
        alert("There was an error! Please re-check your form.");
      });
  }
  handleSubmit(event) {
    const {
      match: { params },
    } = this.props;

    if (params && params.pk) {
      this.handleUpdate(params.pk);
    } else {
      this.handleCreate();
    }

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          className={`border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4`}
        >
          <label
            htmlFor="firstname' "
            className="leading-7 text-sm text-gray-400"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="w-full bg-yellow-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setFirstname(e.target.value)}
          />

          <label
            htmlFor="lastname' "
            className="leading-7 text-sm text-gray-400"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="w-full bg-yellow-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="phone' " className="leading-7 text-sm text-gray-400">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full bg-yellow-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="email' " className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full bg-yellow-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative mb-4">
            <label
              htmlFor="language"
              className="leading-7 text-sm text-gray-400"
            >
              Language:
            </label>
            <select
              id="language"
              name="language"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option>English</option>
              <option>Arabic</option>
              <option>Chinese</option>
              <option>French</option>
              <option>Russian</option>
              <option>Spanish</option>
              {/* onChange={(e) => setLanguage(e.target.value)} */}
            </select>
          </div>

          <label
            htmlFor="address' "
            className="leading-7 text-sm text-gray-400"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full bg-yellow-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setAddress(e.target.value)}
          />

          <label
            htmlFor="description"
            className="leading-7 text-sm text-gray-400"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full bg-yellow-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            // onChange={(e) => setDescription(e.target.value)}
          />

          <button
            type="submit"
            className="text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default CustomerCreateUpdate;
