package step_definitions;

import org.openqa.selenium.By;

import base_Dell.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Dell_Mouse_Hover_Functionalities extends Base {
	@Given("I am in landing page")
	public void i_am_in_landing_page() throws InterruptedException {
	    navigateURL("https://www.dell.com/en-us");
	    Thread.sleep(3000);
	}

	@When("I mouse hover on Computer & Accessories menu")
	public void i_mouse_hover_on_product_menu() throws InterruptedException {
	  mouseHover(By.xpath("//span[text()='Computers & Accessories']"));
	  Thread.sleep(3000);
	}

	@When("I mouse hover on monitor")
	public void i_mouse_hover_on_monitor() throws InterruptedException {
	   mouseHover(By.xpath("//button[text()='Monitors']"));
	   Thread.sleep(3000);
	}

	@When("I click on view all monitors")
	public void i_click_on_view_all_monitors() throws InterruptedException {
	    click(By.xpath("//a[text()='View All Monitors']"));
	    Thread.sleep(3000);
	}
	@Then("I click on shop monitor deals")
	public void i_click_on_shop_monitor_deals() throws InterruptedException {
	   click(By.xpath("//a[text()='Shop All Monitors']"));
	   Thread.sleep(3000);
	}
	

}
