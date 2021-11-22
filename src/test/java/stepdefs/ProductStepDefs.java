package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class ProductStepDefs {
	
	WebDriver driver = Baseclass.driver;
	
	
	
	 @And("^User add a product \"([^\"]*)\" to the cart$")
	    public void user_add_a_product_something_to_the_cart(String Product_Name) throws Throwable {
	    	
	    	
	    	//a/div[starts-with(text(),'Sauce Labs Backpack')]
	    	
		 	WebElement Product = driver.findElement(By.xpath("//a/div[starts-with(text(),'"+Product_Name+"')]"));
		 			
			String Actualmsg= Product.getText();
			Assert.assertEquals(Product_Name,Actualmsg);
//	    	Product.click();
			WebElement add=driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"));
			add.click();
	    }
	
	 @Then("^validate that product product is added in cart$")
	    public void validate_that_product_product_is_added_in_cart() throws Throwable 
	  {
		 	WebElement cart_verify = driver.findElement(By.xpath("//*[@class='shopping_cart_badge']"));
		 	Assert.assertEquals("1", cart_verify.getText());
			
	    }

}
