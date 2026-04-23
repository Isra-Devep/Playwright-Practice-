

class LoginPage {

constructor (page) {

this.page = page;
this.emailField = page.getByTestId('sign_in_form_email_input');
this.passwordField  = page.getByTestId('sign_in_form_password_input');
this.loginBtn =  page.getByRole('button', { name: 'Login' });
}

async visit () {
await this.page.goto("https://develop.fohlio.io/"); }

async login(email , password) {

await this.emailField.fill(email);
await this.passwordField.fill(password);
await this.loginBtn.click();
await this.page.waitForURL('**/projects**');
}


}

module.exports = LoginPage;





