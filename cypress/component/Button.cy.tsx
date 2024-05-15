import React from 'react';
import Button from '../../package/src/components/Button'

const buttonStyleMock = {
    backgroundColor: 'white',
    padding: 10
}

const TextStyleMock = {
    color: 'black',
    fontSize: 20
}

describe("Button Component", () => {
    it("Should render with the given label", () => {
      cy.mount(
        <Button
          label="Press Me"
          onPress={() => {}}
          buttonStyle={[ButtonStyleMock]}
          textStyle={[TextStyleMock]}
        />,
      );
      cy.get('[data-testid="default"]').should("contain.text", "Press Me");
    });
  
    it("Should call onPress when clicked", () => {
      const handlePress = cy.spy();
  
      cy.mount(
        <Button
          label="Press Me"
          testId={"simple-button"}
          onPress={handlePress}
          buttonStyle={[ButtonStyleMock]}
          textStyle={[TextStyleMock]}
        />,
      );
  
      cy.get('[data-testid="simple-button"]').click();
  
      cy.wrap(handlePress).should("have.been.calledOnce");
    });
  
    it("Should render with the default testId", () => {
      cy.mount(
        <Button
          label="Press Me"
          onPress={() => {}}
          buttonStyle={[ButtonStyleMock]}
          textStyle={[TextStyleMock]}
        />,
      );
      cy.get('[data-testid="default"]').should("contain.text", "Press Me");
    });
  });