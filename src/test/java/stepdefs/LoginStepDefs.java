
package stepdefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class LoginStepDefs {
	
	
		WebDriver driver = Baseclass.driver;

	    @Given("^user has navigated to Swag Login Page$")
	    public void user_has_navigated_to_the_login_page() throws Throwable {
	    	       
		    driver.get("https://www.saucedemo.com/");
	        driver.manage().window().maximize();
	        driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);

	    }

	    @When("^user enter correct username and password$")
	    public void user_enter_correct_username_and_password() throws Throwable {	
	    	
	    	WebElement username =driver.findElement(By.xpath("//input[@name='user-name']"));
	    	username.sendKeys("standard_user");
			
			WebElement password =driver.findElement(By.xpath("//input[@name='password']"));
			password.sendKeys("secret_sauce");

	    }

	    @And("^user clicks on Login Button$")
	    public void user_clicks_on_login_button() throws Throwable {

	    	WebElement loginbuttn =driver.findElement(By.xpath("//input[@id='login-button']"));
			loginbuttn.click();
	       
	    }
	    
//	    @Then("^user should be exit$")
//	    public void  user_should_be_exit() throws Throwable{
//	    	driver.close();
//	    }

	    @When("^user enter correct username \"([^\"]*)\" and password \"([^\"]*)\"$")
	    public void user_enter_correct_username_something_and_password_something(String usernameVal, String passwordVal) throws Throwable {

	    	WebElement username =driver.findElement(By.xpath("//input[@name='user-name']"));
	    	username.sendKeys(usernameVal);
			
			WebElement password =driver.findElement(By.xpath("//input[@name='password']"));
			password.sendKeys(passwordVal);
	    }
	    
	  
	    
	    @Then("^you should get error messgae\"([^\"]*)\"$")
	    public void you_should_get_error_messgaesomething(String Expmsg) throws Throwable 
	    {
	     	WebElement Error1= driver.findElement(By.xpath("//h3[starts-with(text(),'Epic sadface: ')]"));
			String Actualmsg= Error1.getText();
			Assert.assertEquals(Expmsg,Actualmsg);
	       
	    }
	    
	    @Then("^User should be landed on Products Page\"([^\"]*)\"$")
	    public void user_should_be_landed_on_products_pagesomething(String Name) throws Throwable {
	    	
	    	WebElement Error1= driver.findElement(By.xpath("//span[@class='title']"));
			String Actualmsg= Error1.getText();
			Assert.assertEquals(Name,Actualmsg);
	       
	    }
	    
//	    @And("^User add a product \"([^\"]*)\" to the cart$")
//	    public void user_add_a_product_something_to_the_cart(String Product_Name) throws Throwable {
//	    	
//	    	
//	    	////a/div[starts-with(text(),'Sauce Labs Backpack')]
//	    	
//	    	WebElement Product= driver.findElement(By.xpath("//a/div[starts-with(text(),'Sauce Labs Backpack')]"));
//			String Actualmsg= Product.getText();
//			Assert.assertEquals(Product_Name,Actualmsg);
////	    	Product.click();
//			WebElement add=driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"));
//			add.click();
//	       
//	    }


	    

	
	
	    	
	   

}
