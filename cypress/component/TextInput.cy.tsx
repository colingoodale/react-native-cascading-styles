import React from "react";
import TextInput from "../../package/src/components/TextInput";

const TextInputStyleMock = {
  padding: 10,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: "gray",
  backgroundColor: "white",
};

describe("TextInput Component", () => {
  it("Should render with the given placeholder", () => {
    cy.mount(
      <TextInput placeholder="Type here" style={[TextInputStyleMock]} />,
    );
    cy.get('[data-testid="default"]').should(
      "have.attr",
      "placeholder",
      "Type here",
    );
  });

  it("Should render with the default testId", () => {
    cy.mount(
      <TextInput placeholder="Type here" style={[TextInputStyleMock]} />,
    );
    cy.get('[data-testid="default"]').should(
      "have.attr",
      "placeholder",
      "Type here",
    );
  });

  it("Should have the value typed into it after typing", () => {
    cy.mount(
      <TextInput placeholder="Type here" style={[TextInputStyleMock]} />,
    );
    cy.get('[data-testid="default"]').type("Hello World");
    cy.get('[data-testid="default"]').should("have.value", "Hello World");
  });
});
