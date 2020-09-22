class Api::V1::CatsController < ApplicationController

    def index
        @cats = Cat.all
        render json: @cats
   end

   def create
    @cat = Cat.new(cat_params)
    if @cat.save
        render json: @cat
    else
        render json: {error: 'Error creating cat'}
    end
   end

   def show
    @cat = Cat.find(params[:id])
    render json: @cat
   end 

   def destroy
    @cat = Cat.find(params[:id])
    @cat.destroy
   end 

   def update
    @cat = Cat.find(params[:id])
    @cat.update(name: params["cat"]["name"])
    @cat.save
    render json: @cat
   end

   private

   def cat_params
    params.require(:cat).permit(:name, :image_url, :country)
   end
   
end
