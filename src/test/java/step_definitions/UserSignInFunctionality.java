package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.SignInPage;
import base_Dell.Base;
import io.cucumber.datatable.DataTable;
public class UserSignInFunctionality extends Base {
	@Given("I signed in as User")
	public void i_signed_in_as_User(DataTable dataTable) {
	   String text = SignInPage.signInasUser(dataTable.cell(1, 0), dataTable.cell(1, 1));
	  
	}

	@Given("I verify Text")
	public void i_verify_Text() {
	    
	}

	@Then("I log out")
	public void i_log_out() {
	    
	}


}
