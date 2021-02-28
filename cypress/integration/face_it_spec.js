describe('FaceIt', () => {
  //Please have the local server running for the intercepts to run accurately
  const baseURL = 'http://localhost:3000/';

  describe('Home', () => {
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

    it('Should have a title, and mission statement', () => {
      cy.get('nav').contains('Home').click()
      cy.get('.App > .titleContainer').should('contain', 'FaceIt').and('contain', 'Discover')
    })

    it('Should have a section with three categories displayed', () => {
      cy.get('.App section a article h3').should('contain', 'Eco').and('contain', 'Allergen').and('contain', 'Vegan')
    })

    it('Should have a footer with links', () => {
      cy.get('footer').should('be.visible');
      cy.get('footer div div p').contains('Kelsie')
      //edit for images in links?
      cy.get('footer div div div a')
      cy.get('footer div div div a').should('have.attr', 'href').should('be.equal', 'https://github.com/kelsiebesingeryeh/')
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

    //Add checks for contents
    it('Should navigate to the eco page', () => {
      cy.get('nav').contains('Eco').click()
    })

    it('Should navigate to the allergen friendly page', () => {
      cy.get('nav').contains('Allergen Friendly').click()
    })

    it('Should navigate to the vegan page', () => {
      cy.get('nav').contains('Vegan').click()
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

    it('Should be able to click into a category', () => {
      
    })
  })
})
