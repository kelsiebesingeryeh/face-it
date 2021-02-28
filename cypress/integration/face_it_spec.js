describe('FaceIt', () => {
  //Please have the local server running for the intercepts to run accurately
  const baseURL = 'http://localhost:3000/';

  describe.skip('Home', () => {
    beforeEach(() => {
      cy.fixture('mock.json')
        .then(makeup => {
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
      cy.get('footer div div div a').should('have.attr', 'href').should('be.equal', 'https://github.com/kelsiebesingeryeh/')
      cy.get('footer div div div a img')
    })
  })

  describe.skip('Nav Bar', () => {
    beforeEach(() => {
      cy.fixture('mock.json')
        .then(makeup => {
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

    it('Should navigate to the eco page', () => {
      cy.get('nav').contains('Eco').click()
        .location('pathname').should('eq', '/eco')
    })

    it('Should navigate to the allergen friendly page', () => {
      cy.get('nav').contains('Allergen Friendly').click()
        .location('pathname').should('eq', '/allergenFriendly')
    })

    it('Should navigate to the vegan page', () => {
      cy.get('nav').contains('Vegan').click()
        .location('pathname').should('eq', '/vegan')
    })
  })

  describe.skip('Category into Type and Items', () => {
    beforeEach(() => {
      cy.fixture('mock.json')
        .then(makeup => {
          cy.intercept('http://localhost:3001/api/v1/makeup/', {
            body: makeup
          })
        });
      cy.visit(baseURL)
    })

    it('Should be able to click into a category from home', () => {
      cy.get('.App section a article h3').contains('Vegan').click()
        .location('pathname').should('eq', '/vegan')
    })

    it('Should be able to click into a displayed type of makeup product from a category page', () => {
      cy.get('.App section a article h3').contains('Vegan').click()
        .get('div a article h3').contains('blush').click()
        .location('pathname').should('eq', '/vegan/blush')
    })

    it('Should display avaliable items', () => {
      cy.get('.App section a article h3').contains('Vegan').click()
        .get('div a article h3').contains('blush').click()
        .get('.productTypeContainer').should('be.visible')
    })
  })

  describe('Loading', () => {
    beforeEach(() => {
      cy.fixture('mock.json')
        .then(makeup => {
          cy.intercept('http://localhost:3001/api/v1/makeup/', {
            body: makeup
          })
        });
      cy.visit(baseURL)
    })
    it('Should display a loading message on home', () => {
      cy.get('.loading-message').should('be.visible')
    })

    it('Should display a loading message when naviagting to category', () => {
      //do we need one here? And at other locations, too?
    })

  })

  describe.skip('Error Message', () => {
      it('Should display an error message on home if there no data to display', () => {
        //Where else besides @ home do we want to have an error redirect?
        //Refactor catch & error status? 
    })
  })

})
