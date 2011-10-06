class ViewerController < ApplicationController
  def schema
    @database_list = ActiveRecord::Base.connection.select_rows("show databases")
  end

  def db
    @dbname = params[:dbname]
    ActiveRecord::Base.establish_connection( {:adapter => "mysql2", :database => @dbname} )
    @table_list = ActiveRecord::Base.connection.select_rows("show tables")
    render :partial => 'internal'
  end

  def table
    @table_choice = params[:tablename]
    @table_schema = ActiveRecord::Base.connection.select_rows("show columns from #{@table_choice}")

    arr = []
    @table_schema.each do |item|
      inner = {}
      inner['field'] = item[0]
      inner['type'] = item[1]
      inner['null'] = item[2]
      inner['key'] = item[3]
      inner['default'] = item[4]
      inner['extra'] = item[5]
      arr << inner
    end
    puts "mike"
    hash = {}
    hash["aaData"] = arr.as_json
    puts hash
    render :json => hash.as_json
  end

end

#| Field                 | Type                              | Null | Key | Default | Extra |
