//Create Object to Access the Elements from LoginPage_Elements.json
const obj_id = require('../pageObjects/Objects.json')

export class coffeeCart_Actions {

    //Navigate to CoffeeCart application   
    navigate(urlpassed) {
        cy.visit(urlpassed);
    }

    //Add Mocha to Cart
    addMochaToCart() {
       
    //Verify if the item 'Mocha is visible'
    cy.get(obj_id.Coffecart_Objects.mocha_obj).should('be.visible');

    //Click on Mocha to add it to the cart
    cy.get(obj_id.Coffecart_Objects.mocha_obj).click();
     
    }

   //Verify the Item Count on the Cart using this method at any point
    verifyItemCountInCart(count){

    //Verify that item is added to the cart & check the item count of the cart
    cy.get(obj_id.Coffecart_Objects.cart_obj).should('contain.text', count);

    }

    //Add Americano Item to the Cart
    addAmericanoToCart(){

        //Verify if the item 'Americano is visible'
        cy.get(obj_id.Coffecart_Objects.americano_obj).should('be.visible');

        //Click on Americano to add it to the cart
        cy.get(obj_id.Coffecart_Objects.americano_obj).click();

    }

    //Verify Payment details section is displayed upon clicking the Total
    verifyPaymentDetails(){

        //Click on the Total
        cy.get(obj_id.Coffecart_Objects.total_obj).click();

        //Verify upon clicking Total, the app shows Payment details
        cy.get(obj_id.Coffecart_Objects.payments_popup).should('contain.text', 'Payment details');
       
       //Click on the Close button in the payment details section
        cy.get(obj_id.Coffecart_Objects.close_btn).click();
    }

    //Mouse Hover on the Total & Verify that items added to the cart are displayed 
    verifyMouseHover(){

        //Mouse Hover on Total 
        cy.get(obj_id.Coffecart_Objects.mousehover_total_obj).trigger('mouseover');

        // Verify that the Items added to the cart are visible
        cy.xpath(obj_id.Coffecart_Objects.itemdAdded_txt).should('be.visible');
    }

    //Using Mouse Hover Add Mocha item to the Cart
    addMochafromMouseHover(){

        //Click on the + button to Add one Mocha
        cy.xpath(obj_id.Coffecart_Objects.cartdetails_add_btn).click();
        
        //Verify Mocha is Added to the Cart
        cy.xpath(obj_id.Coffecart_Objects.cartdetails_added_txt).should('contain.text', ' x 2');
    }

    //Click on Espresso 3 times to add 3 espresso to the cart
    addEspressoToCart(){

        for (let i = 0; i < 3; i++) {
            cy.get(obj_id.Coffecart_Objects.espresso_obj).click();
          }
    }

   //Verify promo is displayed when the Items in cart reaches 6 and the promo allows user to add an extra mocha
    verifyAndAcceptPromo(){

        //Verify that a promo text is displayed
        cy.get(obj_id.Coffecart_Objects.promo_msg).should('contain.text', "It's your lucky day! Get an extra cup of Mocha for $4.")

        //Click on Yes, Of Course button
        cy.get(obj_id.Coffecart_Objects.promo_yes_btn).click();

    }
}
