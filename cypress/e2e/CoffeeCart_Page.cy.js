//Import the coffeeCart_Actions page, which has all the actions required for CoffeeCart Page
import { coffeeCart_Actions } from "../pageActions/coffeeCart_Actions.cy.js"

//Create an object for coffeeCart_Actions Class. 
const coffeeCartActions_obj = new coffeeCart_Actions();

describe('Coffee Cart Task Automation', () => {

    //Create a Variable to store the URL
    const url = 'https://coffee-cart.app/';

    beforeEach(() => {
        // This block will run before each test. 

        // Navigate to Coffee-Cart website
        coffeeCartActions_obj.navigate(url);
    })

    it('Add Items to Cart & Verify the Cart is updated', () => {

        //Verify Mocha is available & Add it to the Cart
        coffeeCartActions_obj.addMochaToCart();

        //Verify Mocha is Added to the Cart & Item count in the Cart is 1
        coffeeCartActions_obj.verifyItemCountInCart(1);

        //Verify Americano is available & Add it to the Cart
        coffeeCartActions_obj.addAmericanoToCart();

        //Verify that Americano is added to the cart - the count of the cart shows 2
        coffeeCartActions_obj.verifyItemCountInCart(2);

        //Verify upon clicking Total, the app shows Payment details pop up
        coffeeCartActions_obj.verifyPaymentDetails();

        //Mouse Hover on the Total & verify the items added to the cart are displayed correctly
        coffeeCartActions_obj.verifyMouseHover();

        //From the Item details, increase the Mount Count by 1 using + button 
        coffeeCartActions_obj.addMochafromMouseHover();

        //Add 3 Expresso to the Cart
        coffeeCartActions_obj.addEspressoToCart();

        //Verify that Espresso is added to the cart - the count of the cart shows 6
        coffeeCartActions_obj.verifyItemCountInCart(6);

        //Verify the promo text is displayed & click on "Yes, Of Course" button in the promo
        coffeeCartActions_obj.verifyAndAcceptPromo();

        //Verify that Mocha is added to the cart - now, the count of the cart shows 7
        coffeeCartActions_obj.verifyItemCountInCart(7);


    })



})

