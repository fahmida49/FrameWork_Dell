package step_definitions;

import base_Dell.Base;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.landingPage;

public class SignInFunctionality extends Base {
	
	@When("I mouse hover on sign in")
	public void i_mouse_hover_on_sign_in() {
	    mouseHover(landingPage.menuSignIn);
	}

	@Then("click sign in button")
	public void click_sign_in_button() {
	   click(landingPage.custSignin);
	}


}
