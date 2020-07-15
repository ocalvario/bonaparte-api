class API::V1::BattleController < ApplicationController
    def index
        @battles = Battle.all

        render json: @battles, status: 200
    end

    def show
        @battle = Battle.find(params[:id])
        render json: @battle, status: 200
    end
    
    def create
        @battle = Battle.create(battle_params)

        render json: @battle, status:200
    end

    def update
        @battle = Battle.find(params[:id])
        @battle.update(battle_params)
        render json: @battle, status:200
    end

    def destroy
        @battle = Battle.find(params[:id])
        battle.delete
        render json: {battleID: @battle.id}
    end

    private
        def battle_params
            params.require(:battle).permit(:year)
        end

end
