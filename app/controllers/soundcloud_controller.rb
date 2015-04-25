class SoundcloudController < ApplicationController
  def connect
    redirect_to soundcloud_client.authorize_url(:display => "popup")
  end

  def connected
    if params[:error].nil?
      soundcloud_client.exchange_token(:code => params[:code])
      me = soundcloud_client.get("/me")
      tmp = soundcloud_client.get("/me/tracks").first
      track = ""
      if tmp
        track = tmp.stream_url
      else
        track = soundcloud_client.get("/me/favorites").first.stream_url
      end

      avatar =  me.avatar_url
      avatar = avatar.sub 'large', 't300x300'

      login_as User.find_or_create_by_soundcloud_user_id({
        :soundcloud_user_id  => me.id,
        :soundcloud_username => me.username,
        :soundcloud_avatar => avatar,
        :soundcloud_track => track
      })

      current_user.update_attributes!({
        :soundcloud_access_token  => soundcloud_client.access_token,
        :soundcloud_refresh_token => soundcloud_client.refresh_token,
        :soundcloud_expires_at    => soundcloud_client.expires_at,
        :soundcloud_avatar => avatar,
        :soundcloud_track => track
      })
    end
    render :layout => false
  end

  def disconnect
    login_as nil
    redirect_to root_path
  end
  
private

  def soundcloud_client
    return @soundcloud_client if @soundcloud_client
    @soundcloud_client = User.soundcloud_client(:redirect_uri  => soundcloud_connected_url)
  end


end