# brandons-password-generator

URL: https://doengesba.github.io/brandons-password-generator/

- Added window prompt to generate upon button click to provoke input from user. 
    This prompt asks the user how many characters they would like to use.
    Additionally, the prompt will return the user with an alert if invalid parameters are attempted such as:
        
        - Below 8 characters
        - Above 128 characters
        - Typing the name of the number of characters

- Once character parameters have been sufficiently met, the user is met with four additional confirms asking if the user would like to use uppercase, lowercase, numbers and/or symbols when generating the password. 
   
        - If no character types are selected, the user will be returned to the initial prompt.

Variables have been included to encompass all uppercase, lowercase, numbers and symbols per Owasp criteria (https://owasp.org/www-community/password-special-characters)

Logic was included to randomly select values from the four arrays, depending on the true/false value given by the user input upon each confirm.

Once the password has been sufficiently generated per criteria, the password value is deposited inside the password textarea.



[brandons-password-generator.pdf](https://github.com/DoengesBA/brandons-password-generator/files/9595541/brandons-password-generator.pdf)
