class PokemonsController < ApplicationController
  def new
  end

  def create
    pokemon = Pokemon.new
    pokemon.species = params[:species]
    pokemon.nickname = params[:nickname]
    pokemon.level = params[:level]

    if condition
      pokemon.save
      redirect_to "/pokemons/#{params[:id]}"
    else
      @errors = pokemon.errors.full_messages
      render :new
    end
  end

  def index
    @pokemons = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end
end
