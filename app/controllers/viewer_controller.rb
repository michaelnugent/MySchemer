class ViewerController < ApplicationController
  def schema
    @database_list = ActiveRecord::Base.connection.select_rows("show databases")
  end

  def db
    @dbname = params[:dbname]
    @tabindex = params[:tabindex].to_i+1
    config = ActiveRecord::Base.configurations[Rails.env]
    ActiveRecord::Base.establish_connection(  {
        :adapter => config['adapter'],
        :host => config['host'],
        :username => config['username'],
        :password => config['password'],
        :database => @dbname
    } )
    @table_list = ActiveRecord::Base.connection.select_rows("show tables")
    render :partial => 'internal'
  end

  def table
    @table_choice = params[:tablename]
    @table_schema = ActiveRecord::Base.connection.select_rows("show columns from #{@table_choice}")

    hash = {}
    hash["aaData"] = @table_schema.map { |u| Hash[ field: u[0], type: u[1], null: u[2], key: u[3], default: u[4], extra: u[5] ]};

    render :json => hash.as_json
  end

end

#| Field                 | Type                              | Null | Key | Default | Extra |
