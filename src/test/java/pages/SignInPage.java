package pages;

import org.openqa.selenium.By;

import base_Dell.Base;

public class SignInPage extends Base{  
	
	public static By textboxemail= By.id("SignInModel_EmailAddress");
	public static By textboxpassword = By.id("userPwd_UserInputSecret");
	public static By buttonSignin = By.id("btnSignIn");
	
	
	public static String signInasUser(String Email,String Password) {
		navigateURL("https://www.dell.com/en-us");
		mouseHover(landingPage.menuSignIn);
		click(landingPage.custSignin);
		sendkeys(SignInPage.textboxemail, Email);
		sendkeys(SignInPage.textboxpassword, Password);
		click(SignInPage.buttonSignin);
		String text = getElementText(UserHomepage.verifytext);
		return text;
	}
	
	
	
	
}//class
