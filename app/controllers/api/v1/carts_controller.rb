class Api::V1::CartsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    cart = Cart.find(params["id"])
    render json: [cart.number, cart.names, cart.descriptions, cart.images, cart.ids]
  end

  def update
    cart = Cart.find(1)
    number = (cart.number.to_i + 1)
    cart.update(number: number)

    item = Item.find(params["id"])

    names = cart.names.push(item.name)
    descriptions = cart.descriptions.push(item.description)
    images = cart.images.push(item.first_photo)
    names = cart.ids.push(item.id)

    cart.update(names: names)
    cart.update(descriptions: descriptions)
    cart.update(images: images)
    cart.update(ids: ids)
  end

end
