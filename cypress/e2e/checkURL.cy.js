describe("URL test", () => {
  it("Test if URL is correct", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.url().should("equals", "http://127.0.0.1:5500/index.html");
  });

  it("Test if portnumber is correct", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.url().should("contains", ["5500"]);
  });
});
