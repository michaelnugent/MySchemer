class ViewerController < ApplicationController
  def schema
    @database_list = ActiveRecord::Base.connection.select_rows("show databases")
  end

end
