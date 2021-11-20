
package stepdefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

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
	    
	    @Then("^user should be exit$")
	    public void  user_should_be_exit() throws Throwable{
	    	driver.close();
	    }

	    @When("^user enter correct username \"([^\"]*)\" and password \"([^\"]*)\"$")
	    public void user_enter_correct_username_something_and_password_something(String usernameVal, String passwordVal) throws Throwable {

	    	WebElement username =driver.findElement(By.xpath("//input[@name='user-name']"));
	    	username.sendKeys(usernameVal);
			
			WebElement password =driver.findElement(By.xpath("//input[@name='password']"));
			password.sendKeys(passwordVal);
	    }
	    
	  
	    
	    @Then("^you should get error messgae\"([^\"]*)\"$")
	    public void you_should_get_error_messgaesomething(String Expmsg) throws Throwable {
	     	WebElement Error1= driver.findElement(By.cssSelector("//h3[starts-with(text(),'Epic sadface: ')]"));
			String Actualmsg= Error1.getText();
			
			Assert.assertEquals(Expmsg,Actualmsg);
	       
	    }

	    

	
	
	    	
	   

}
