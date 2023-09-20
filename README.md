Project 2 - My Lego Collection

Heroku site - https://tranquil-beach-10750-49463d7ba5ad.herokuapp.com/legos
GitHub repo - https://github.com/sicao1/Project-2

User stories
For this project I wanted users to be able to keep track of your which lego sets they have. Moreover, which ones are built and purchased. Additionally users can keep a wishlist of which lego sets they want in the future.

Technologies used
Tailwinds for CSS - used the Play CDN by inserting a <script> into the head of the views ejs pages. Was able to customize CSS themes.

Ionicons - used a <script> near the end of the closing </body> tag. Icons were used for the checkmarks; as well as, the social media icons in the footer of the page.

Google Fonts - font used is Mooli \*\* problem is that it only comes in one type, no diversity so bolding was not an option.

EJS, Express, Mongoose, Mongodb Altas were used to build the functionality of the application.

Server.js - requires express, method-override, env.PORT and middleware
Controllers: legos.js - houses all the routes with all 7 RESTful routes and full CRUD.
Models: legos.js - creates a schema for the dataset and is exported
Public/CSS - static files were created, but not used as I went to tailwinds instead.
Views:
Index - Home page displays all lego sets with options to delete, edit, add and view wishlist from here.

Show - display selected lego set with full specificiations. Also able to go back to index, add new or edit here.

Edit - displays a form with information pre-filled for user to edit. This will take the user back to the show page.

New - display a form with blank spaces for user to input data.

Wishlist - display items the meet conditional that lego set is not built and purchased.

Seed.js - small sample size to initially start dataset. Contains 3 items.

Future improvement:
Index page should be able to sort through all lego sets. By theme, pieces, size etc. The ul should be able to filter whatever the user is specifically looking for.

Pathways for a href links. If user goes from Index to Edit, submitting the form on the edit page should take them back to index not show page.

Some background imgs have a white background instead of being transparent.

Overall display of info on index page for each card needs improvement for better and clearer view i.e. delete and edit button index page.
