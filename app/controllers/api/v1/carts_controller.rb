class Api::V1::CartsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    cart = Cart.find(params["id"])
    render json: [cart.number, cart.items[3]]
  end

  def update
    cart = Cart.find(params["id"])
    number = (cart.number.to_i + 1)
    cart.update(number: number)
    item = cart.items.push(params[:item])
    cart.update(items: item)
  end

end
