class AddSoundcloudAvatarToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :soundcloud_avatar, :string
  end

  def self.down
    remove_column :users, :soundcloud_avatar
  end
end
