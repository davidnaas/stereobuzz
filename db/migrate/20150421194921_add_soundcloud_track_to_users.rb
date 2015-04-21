class AddSoundcloudTrackToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :soundcloud_track, :string
  end

  def self.down
    remove_column :users, :soundcloud_track
  end
end
