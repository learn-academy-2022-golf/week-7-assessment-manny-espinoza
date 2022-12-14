# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Line 10 starts off the blog_posts_controller.rb page and is automatically generated when ($ rails g controller BlogPost) is ran. Next, a method for index is created using def (endwise extension makes sure that 'end's are automatically generated upon method creation).
class BlogPostsController < ApplicationController
  def index
    # ---2) Calling .all on BlogPost will allow us to see every instance of the BlogPost class, and then THAT is saved into an instance variable (@posts). Calling that instance variable from the index method lets us see all instances of BlogPost.
    @posts = BlogPost.all
  end

  # ---3) We call .find on BlogPost and specify that we're looking for a parameter (params), and that that parameter should be 'id'. This allows us to find any instance of BlogPost that we want to if we put in a param of id. We save that into an instance variable (@post). This all happens in a new method called show. That lets us put down an id param to the URL, and find the specific instance of BlogPost we want. We can put down on the show.html.erb page that we simply, want the application to show us that instance of BlogPost.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) We call .new on BlogPost and save it to an instance variable (@post) inside a newly created method called 'new'. This allows us to make a new instance of the class BlogPost with one command from the 'new' method if we call the @post instance variable. Line 26 starts a new method called 'create'.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) We call .create on BlogPost with the argument of (blog_post_params) and save it to an instance variable (@post). I should note right about now that although we have multiple instance variables of @post, they're all created under different methods and are each locally scoped, so there is no problem with them overriding each other. But what this does is, allows an instance of BlogPost to be created inside the path of blog_post_params. Then we say that if this locally scoped instance variable @post is valid, then we want to redirect ourselves to blog_post_path which accepts an argument of instance variable @post. On line 34 we start creating a new method called 'edit'.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Once again (line 18) we call .find with argument of params with argument of id. That is all appended to BlogPost and saved to instance variable @post underneath the 'edit' method. This lets us find any instance of BlogPost if we put the correct id param in the URL. We can put in the edit.html.erb page that, we want to edit that particular instance of BlogPost. Line 39 starts the creation of the 'update' method, with the same BlogPost.find(params[:id]) and is also saved to instance variable @post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) We append the instance variable @post with .update and provide argument (blog_post_params). Essentially this is saying that when we update a post, we'll be directed to the blog_post_params page. A conditional checks to see if instance variable @post is valid, and if so then we will be redirected to the page blog_post_path. Line 48 starts a new method called 'destroy'. It has an instance variable @post which is assigned to the calling of .find on the BlogPost class. That is provided with an argument for params that takes an id. So it finds an instance of BlogPost when you put that instance's id param in the URL. Line 50 starts a conditional checking if we want to destroy that BlogPost instance.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Once we choose to destroy an instance of BlogPost, then we get redirected to the blog_posts_path page.
      redirect_to blog_posts_path
    end
  end

  # ---9) This is a hidden method called blog_post_params initialized by the private keyword. This prevents users of the web application from accessing and making changes to this method.
  private
  def blog_post_params
    # ---10) These are strong params which are in place to prevent hackers from too easily accessing hidden areas of our web application. So, the required params are an instance of blog_post which will be a string (assumingly the name of the blog_post), and that is additionally chained with .permit(:title, :content). This limits the user from accessing and changing up those attributes of title and content associated with any particular blog post.
    params.require(:blog_post).permit(:title, :content)
  end
end
