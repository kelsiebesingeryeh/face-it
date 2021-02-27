describe('FaceIt', () => {
  //Please have the local server running for the intercepts to run accurately
  const baseURL = 'http://localhost:3000/';

  describe.only('Home', () => {
    beforeEach(() => {
      cy.fixture('mockData.json')
        .then(makeup => {
          console.log(makeup);
          cy.intercept('http://localhost:3001/api/v1/makeup/', {
            body: makeup
          })
        });
      cy.visit(baseURL)
    })

    it('Should have a navigation bar', () => {
      cy.get('nav').should('be.visible')
    })

    it('Should have a title, logo, and mission statement', () => {
      cy.get('nav').contains('Home').click()
      cy.get('.App > .titleContainer').should('contain', 'FaceIt').and('contain', 'Discover')

    })


  })

  describe('Nav Bar', () => {
    beforeEach(() => {
      cy.fixture('mockData.json')
        .then(makeup => {
          console.log(makeup);
          cy.intercept('http://localhost:3001/api/v1/makeup/', {
            body: makeup
          })
        });
      cy.visit(baseURL)
    })

    it('Should have a clickable navigation bar', () => {
      cy.get('nav').contains('Home').click()
      cy.get('nav').contains('Eco').click()
      cy.get('nav').contains('Allergen Friendly').click()
      cy.get('nav').contains('Vegan').click()
    })

    it('Should navigate home page', () => {
      cy.get('nav').contains('Home').click()
        .get('.App').should('be.visible')
    })

    it('Should navigate eco page', () => {

    })

    it('Should navigate allergen friendly page', () => {

    })

    it('Should navigate to vegan page', () => {

    })
  })

})
