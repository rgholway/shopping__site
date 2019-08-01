class Api::V1::CartsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    cart = Cart.find(params["id"])
    render json: [cart.number, cart.items]
  end

  def update
    cart = Cart.find(1)
    number = (cart.number.to_i + 1)
    cart.update(number: number)
    item = Item.find(params["id"])
    items = cart.items.push(item.name)
    cart.update(items: items)
  end

end
