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
  
    def create 
      book = Book.new(books_params)
      if book.save
        render json: book
      else 
        render json: { errors: book.errors}, status: :unprocessable_entity
      
      end
    end

      def destroy
        @book = Book.find(params[:id]).destroy
  
        render json: @book
      end
    
  private
  

  def books_params
    params.require(:book).permit(:title, :author)
  end
 
end