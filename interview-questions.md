# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.
First, without external resources. Challenge yourself to answer from memory.
Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.



1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
    - We have two models, Cohort and Student. These tables are related, relation being that Cohort has_many students, and those students belongs_to Cohort. The primary key of Cohort is supposed to be the foreign key for Student. We didn't add a foreign key to the Student model, which we need to fix now.
    - Terminal: Generate a migration to add a column and be specific with the naming convention. ($ rails g migration add_column_for_foreign_key)
    - A new page in the text editor will be generated (forgot the exact pathway to access that page, but it will be called add_column_for_foreign_key). In here is a method that has been generated for us as well, which should say 'def AddColumnForForeignKey' 'end'. We input within the method, add_column(table_name, column_name), and more specifically, add_column(:Student, foreign_key)
    - Terminal: $ rails db:migrate => This migrates the changes we've implemented and now our student model should have a column for foreign key!

Researched answer:
    - Terminal: ($ rails generate migration desired_method_here) This is the general command for creating migrations to do various things we want to do, for example adding columns, deleting columns, changing column names, etc. Since we want to add a foreign key we can say ($ rails generate migration add_column_for_foreign_key)
    - The new page in the text editor that is created will be located following this pathway (db -> migrate -> add_column_for_foreign_key). An empty method will be created, called 'change' in contrary to what I mentioned earlier about saying the method would be called AddColumnToForeignKey. Within the method though, we place the add_column and pass through arguments of table_name, column_name, and data type.
    - Terminal: Now we can run ($ rails db:migrate). This updates the database and additionally, the schema.



2. Which RESTful routes must always be passed params? Why?

Your answer:
    - The RESTful routes to always be passed into params are index, and show..??? These are the two RESTful routes that deal with actually getting our data to show up on the rails application, and without them we wouldn't be able to view anything on our rails app.

Researched answer:
    - Correction, there are more and different routes that need params within them, namely delete/destroy (needs to be passed in the things it's deleting) and photos (requires param of :id).



3. Name three rails generator commands. What is created by each?

Your answer:
    - $ rails g model ModelName column_header1:data_type1 column_header2:data_type2 => Generates a model/table within our database with predetermined column headers.
    - $ rails g migration ModelName => Generates some migration files which allow for particular database items to be either created/read/updated/deleted.
    - $ rails g controller ModelName => Generates some controller files which allow us to create pathways to access different parts of the rails application.

Researched answer:
    - $ rails g model ModelName header1:type1 header2:type2
        - Generates the table our database operates on, and here is where we specify the column headers our table will have, with their specified data types.
    - $ rails g migration desired_change_method
        - Generates a new file in db/migrate, which is the name of the method in PascalCase. An empty change method is automatically generated in this file, and within the method we put down the change_method we want, for example add_column, remove_column, change_column, etc.
    - $ rails g controller Name
        - There are multiple files generated upon the execution of this command, in different locations. There is app/views/Name, app/helpers/name_helper.rb, app/assets/stylesheets/name.css, and app/controllers/name_controller.rb, but we will mainly be concerned with app/controllers/name_controller.rb. Here we will be able to create different methods for things to appear on our rails application. 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

    action: "GET" location: /students        - displays a list of all students
    action: "POST" location: /students       - creates a new instance of student
    action: "GET" location: /students/new    - returns an HTML form for creating a new student
    action: "GET" location: /students/2      - displays the student with :id 2
    action: "GET" location: /students/2/edit - returns an HTML form for editing the student with :id 2
    action: "PATCH" location: /students/2    - updates the student with :id 2
    action: "DELETE" location: /students/2   - deletes the student with :id 2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    1. As myself, I want to categorize tasks by importance/priority, so I may better organize my list and choose to do either one really big and important task or do multiple smaller and less important tasks.
    2. As myself, I want to give a deadline to my tasks, so I can feel a sense of urgency and push myself to complete those tasks.
    3. As myself, I want to have the option to add prerequisites to tasks, so I know if there are other things to be completed before something else is done.
    4. As myself, I want to mark tasks as complete, so I can check off things I've done.
    5. As myself, I want to categorize tasks by status, so I can say if something is either in progress, hasn't gotten started yet, dropped, or completed.
    6. As myself, I want to have the option to add a location to tasks, so I know if something should be done elsewhere (ex. Oil change for car @Valvoline)
    7. As myself, I want to have the option to drop/abandon a task but still see it in my database, so I can see previous tasks and get an general overview of productivity.
    8. As myself, I want to sort tasks by any chosen metric, so I can see them laid out by either importance, deadline, status, location, or by needing prerequisites or not.
    9. As myself, I want to invite other users of the application to the task list, so we can collaborate on things needing to be done (ex. Create a new task list for house chores, and include everyone inside of the house on that list).
    10. As myself, I want to designate tasks to certain people if it is a list with more than one person on it, so we can know who will be doing what.