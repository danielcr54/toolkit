describe("My First Test", () => {
  it("My Todo webApp", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000);

    cy.get("#firstname").type("William");
    cy.wait(1000);
    cy.get("#lastname").type("S. Gafford");
    cy.wait(1000);
    cy.get("#email").type("WilliamSGafford001@gmail.com");
    cy.wait(2000);
    cy.get("#root > div > div > form > button").click();
    cy.wait(2000);

    cy.get("#firstname").type("Milena");
    cy.wait(1000);
    cy.get("#lastname").type("Efremova");
    cy.wait(1000);
    cy.get("#email").type("EfremovaMilena001@gmail.com");
    cy.wait(2000);
    cy.get("#root > div > div > form > button").click();
    cy.wait(2000);

    cy.get("#firstname").type("Lima");
    cy.wait(1000);
    cy.get("#lastname").type("Mishina");
    cy.wait(1000);
    cy.get("#email").type("LimaMishina990@gmail.com");
    cy.wait(2000);
    cy.get("#root > div > div > form > button").click();
    cy.wait(2000);

    cy.get("#firstname").type("Mayor");
    cy.wait(1000);
    cy.get("#lastname").type("Belousov");
    cy.wait(1000);
    cy.get("#email").type("BelousovMayor45@gmail.com");
    cy.wait(2000);
    cy.get("#root > div > div > form > button").click();
    cy.wait(2000);

    cy.get("#firstname").type("Nick");
    cy.wait(1000);
    cy.get("#lastname").type("Sorokina");
    cy.wait(1000);
    cy.get("#email").type("NickSorokina4545@gmail.com");
    cy.wait(2000);
    cy.get("#root > div > div > form > button").click();
    cy.wait(2000);

    cy.get(
      "#root > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > img"
    ).click();
    cy.wait(2000);
    cy.get(
      "#root > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > img"
    ).click();
    cy.wait(2000);
    cy.get(
      "#root > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > img"
    ).click();
    cy.wait(2000);
    cy.get(
      "#root > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > img"
    ).click();
    cy.wait(2000);
    cy.get(
      "#root > div > div > div > div > table > tbody > tr > td:nth-child(4) > img"
    ).click();
  });
});
