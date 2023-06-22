$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Dell_Mouse_Hover_Functionality.feature");
formatter.feature({
  "name": "Dell_Mouse_Hover",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Dell_Mouse_Hover",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Dell"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Dell_Mouse_Hover_Functionalities.i_am_in_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I mouse hover on product menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Dell_Mouse_Hover_Functionalities.i_mouse_hover_on_product_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I mouse hover on monitor",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Dell_Mouse_Hover_Functionalities.i_mouse_hover_on_monitor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on view all monitors",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Dell_Mouse_Hover_Functionalities.i_click_on_view_all_monitors()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on shop monitor deals",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Dell_Mouse_Hover_Functionalities.i_click_on_shop_monitor_deals()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d101.0.4951.64)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TQ916D9\u0027, ip: \u0027192.168.1.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.64, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\tkhan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49214}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d947769e5699502be77fae69aca361b4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat base_Dell.Base.click(Base.java:19)\r\n\tat step_definitions.Dell_Mouse_Hover_Functionalities.i_click_on_shop_monitor_deals(Dell_Mouse_Hover_Functionalities.java:36)\r\n\tat ✽.I click on shop monitor deals(file:///C:/Java1/workspace/dell_functionalities/src/test/resources/features/Dell_Mouse_Hover_Functionality.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});