# LifeQuests React

Collecting workspace information

The login functionality on the website involves multiple components working together to handle user authentication. Here's how they work together:

1. **Pug Template** (login.pug):
   - This file defines the HTML structure for the login form.
   - It includes input fields for the email and password, and a submit button.
   ```pug
   extends base

   block content
       main.main
           .login-form
               h1.ma-bt-lg Log into your account
               form.form.form--login
                   .form__group
                       label.form__label(for='email') Email address
                       input#email.form__input(type='email', placeholder='you@example.com', required)
                   .form__group.ma-bt-md
                       label.form__label(for='password') Password
                       input#password.form__input(type='password', placeholder='••••••••', required, minlength='8')
                   .form__group
                       button.btn.btn--green Login
   ```

2. **Client-Side JavaScript** (index.js):
   - This file handles the client-side logic for the login form submission.
   - It listens for the form submission event, prevents the default form submission, and calls the 

login

 function with the email and password values.
   ```javascript
   /* LOGIN FORM */
   if(loginForm) {
       loginForm.addEventListener("submit", e => {
           e.preventDefault();
           const email = document.getElementById("email").value;
           const password = document.getElementById("password").value;
           login(email, password);
       });
   }
   ```

3. **Login Function** (login.js):
   - This file defines the 

login

 function that sends an AJAX request to the server to authenticate the user.
   - It uses Axios to send a POST request with the email and password to the `/api/v1/users/login` endpoint.
   - If the login is successful, it shows a success alert and redirects the user to the homepage.
   ```javascript
   export const login = async (email, password) => {
       try {
           const res = await axios({
               method: 'POST',
               url: '/api/v1/users/login',
               data: {
                   email: email,
                   password: password
               }
           });
       
           if(res.data.status === "success") {
               showAlert("success", "Logged in successfully!");
               window.setTimeout(() => {
                   location.assign("/");
               }, 1000);
           }
       } catch(err) {
           showAlert("error", err.response.data.message);
       }
   }
   ```

4. **Server-Side Authentication** (authController.js):
   - This file contains the server-side logic for handling the login request.
   - The 

login

 function checks if the email and password are provided, verifies the user's credentials, and generates a JWT token if the credentials are valid.
   - The token is sent back to the client in a cookie.
   ```javascript
   exports.login = catchAsync(async (req, res, next) => {
       const {email, password} = req.body;

       if(!email || !password) {
           return next(new AppError("Please provide email and password", 400));
       }

       const user = await User.findOne({email: email}).select("+password");

       if(!user || !(await user.correctPassword(password, user.password))) {
           return next(new AppError("Incorrect email or password", 401));
       }

       createSendToken(user, 200, res);
   });

   const createSendToken = (user, statusCode, res) => {
       const token = signToken(user._id);

       const cookieOptions = {
           expires: new Date(Date.now()+ process.env.JWT_COOKIE_EXPIRES_IN * 24 * 3600 * 1000),
           httpOnly: true,
       }
       
       if(process.env.NODE_ENV === "production") cookieOptions.secure = true;
       res.cookie("jwt", token, cookieOptions);

       user.password = undefined;

       res.status(statusCode).json({
           status: "success",
           token,
           data: {
               user
           }
       });
   }
   ```

Together, these components handle the login process by:
1. Displaying the login form to the user.
2. Capturing the form submission and sending the login credentials to the server.
3. Authenticating the user on the server and generating a JWT token.
4. Sending the token back to the client and storing it in a cookie.
5. Redirecting the user to the homepage upon successful login.

Similar code found with 2 license types