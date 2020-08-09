class Api::V1::GadgetsController < ApplicationController

   before_action :set_cat 

    def index
        @gadgets = @cat.gadgets
        render json: @gadgets
    end

    def show
        @gadget = @cat.gadgets.find_by(id: params[:id])
        @gadget = Gadget.find(params[:id])
        render json: @gadget
    end 

   def create

   end

   def destroy

   end 

   private

   def set_cat
    @cat = Cat.find(params[:cat_id])
   end 
   
   def gadget_params
    params.require(:gadget).permit(:cat_id, :name, :image_url, :description, :link)
   end

end
