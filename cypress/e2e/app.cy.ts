describe('My First Test', () => {
    it('Visits the React app', () => {
      cy.visit('http://localhost:3000'); // Asegúrate de que tu aplicación esté corriendo en este puerto
      cy.contains('App test'); // Verifica que el texto "Learn React" esté en la página
    });
  });
  