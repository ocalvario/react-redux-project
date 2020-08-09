class Api::V1::GadgetsController < ApplicationController

   def index
        @gadgets = Gadget.all
        render json: @gadgets
   end

   def create
    @gadget = Gadget.new(gadget_params)
    if @gadget.save
        render json: @gadget
    else
        render json: {error: 'Error creating account'}
    end
   end

   def show

   end 

   def destroy

   end 

   private

   def gadget_params
    params.require(:gadget).permit(:cat_id, :name, :image_url, :description, :link)
   end

end
