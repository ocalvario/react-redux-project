class Api::V1::GadgetsController < ApplicationController

   before_action :set_cat 

    def index
        @gadgets = @cat.gadgets
        render json: @gadgets
    end

    def show
        @gadget = Gadget.find(params[:id])
        render json: @gadget
    end 

   def create
        @gadget = @cat.gadgets.new(gadget_params)
            if @gadget.save
                render json: @cat
            else
                render json: {error: 'Error creating gadget'}
            end
   end

   def destroy
        @gadget = Gadget.find(params["id"])
        @cat = Cat.find(@gadget.cat_id)
        @gadget.destroy
        render json: @cat
   end 

   private

   def set_cat
    @cat = Cat.find(params[:cat_id])
   end 
   
   def gadget_params
    params.require(:gadget).permit(:cat_id, :name, :image_url, :description, :link)
   end

end
