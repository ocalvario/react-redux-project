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
        render json: {error: 'Error creating gadget'}
    end
   end

   def show
    @gadget = Gadget.find(params[:id])
    render json: @gadget
   end 

   def destroy
    @gadget = Gadget.find(params[:id])
    @gadget.destroy
   end 

   private

   def gadget_params
    params.require(:gadget).permit(:cat_id, :name, :image_url, :description, :link)
   end

end
