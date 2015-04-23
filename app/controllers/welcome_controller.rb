class WelcomeController < ApplicationController
  def index
    @users = User.all;
    #@tracks = current_user.soundcloud_client.get("/me/tracks").first
  end

  def show
    @tracks = current_user.soundcloud_client.get("/me/tracks", :limit => 5)
    @me     = current_user.soundcloud_client.get("/me")
  end

  def update
    res = current_user.soundcloud_client.put("/me", :user => {:description => params[:description]})
    redirect_to :action => :show
  end

  def follow
    if logged_in? 
      puts "FOLLOW" 
      puts params[:id]
      current_user.soundcloud_client.put("/me/followings/"+ params[:id])
    end
    redirect_to action: "index"
  end
end