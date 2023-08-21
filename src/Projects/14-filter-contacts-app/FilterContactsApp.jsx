import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import ContactData from "./Data.json";
import Contact from "./Contact";

export default function FilterContactsApp() {
  let inputSearch = useRef(null);

  useEffect(() => {
    inputSearch.current.focus();
  }, [inputSearch]);

  const [searchContact, setSearchContact] = useState("");
  return (
    <div className="text-center">
      <Title text={"Filter Contacts App"} classes={"text-info"}/>
      <input
        type="text"
        placeholder="Search by First Name"
        className="mb-2"
        style={{ padding: ".3rem .5rem" }}
        ref={inputSearch}
        onChange={(e) => setSearchContact(e.target.value)}
      />
      <section
        className="d-flex"
        style={{
          gap: 15,
          maxWidth: "1600px",
          margin: "auto",
          flexWrap: "wrap",
        }}
      >
        {ContactData.filter((contact) => {
          if (searchContact === "") {
            return contact;
          } else if (
            contact.first_name
              .toLowerCase()
              .includes(searchContact.toLowerCase())
          ) {
            return contact;
          }
        }).map((contact) => (
          <Contact
            contact={contact}
            cardColor="card-info"
            textColor="text-info"
            key={contact.id}
          />
        ))}
      </section>
    </div>
  );
}
