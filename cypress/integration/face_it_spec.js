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

  describe.skip('Items into Cosmetic', () => {
    beforeEach(() => {
      cy.fixture('mock.json')
        .then(makeup => {
          cy.intercept('http://localhost:3001/api/v1/makeup/', {
            body: makeup
          })
        });
      cy.visit(baseURL)
    })

    it('Should be able to click into an avaliable cosmetic to view its details', () => {
      cy.get('.App section a article h3').contains('Vegan').click()
        .get('div a article h3').contains('blush').click()
        .get('div a article').first().click()
        .get('.detailsPage').should('be.visible')
        .get('.detailsPage h2').contains('Saint Cosmetics Blush')
        .get('.detailsPage img').should('be.visible')
        .get('.detailsPage .singleProductDescriptionWrapper').should('be.visible')
        .get('.detailsPage .tags').should('be.visible')
    })
  })

  describe.only('Search Bar', () => {
    beforeEach(() => {
      cy.fixture('mock.json')
        .then(makeup => {
          cy.intercept('http://localhost:3001/api/v1/makeup/', {
            body: makeup
          })
        });
      cy.visit(baseURL)
    })

    it('Should have a functional serach bar', () => {
      cy.get('form input').type('e.l.f')
        .get('form button').click()
        .get('.searchResultsContainer').should('be.visible')
      //Type
      //Search
      //check result to be equal to expected outcome
    })
  })

  describe.skip('Loading', () => {
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
    //Error testing problem, to test on our server, we must include error message & status codes in our server

    //Error testing can *only* occur on original API, not on mock, local server. Please note url difference, however, it doesn't imply data difference between the two.
      it('Should display an error message on home if there no data to display', () => {
        cy.fixture('mock.json')
          .then(() => {
            cy.intercept('http://localhost:3001/api/v1/makeup/', {
              statusCode: 404,
              body: []
            })
          });
        cy.visit('http://makeup-api.herokuapp.com/api/v1/products.json')
        cy.get('.error-message').should('be.visible')

        //Where else besides @ home do we want to have an error redirect?
        //Refactor catch & error status?
    })
  })

})
