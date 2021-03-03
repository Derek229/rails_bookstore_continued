class BooksController < ApplicationController
  def app
    # no props get from axios
    render component: 'App'
   end
   
   def index
    #  @books = Book.all
     @books = Book.order(:title)
     
     # no render want json
     
     render json: @books
    
   end
  end
 
