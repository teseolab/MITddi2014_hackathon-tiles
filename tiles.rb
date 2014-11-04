require 'rubygems'
require 'sinatra'
require 'sqlite3'


post '/address' do
	@db = SQLite3::Database.new "dev.sqlite3"
  
	add = params[:p]
	@db.execute "UPDATE tags SET address = \'#{add}\' WHERE id = 1"
	@db.execute( "select address, position from tags where id = 1" ) do |row|
		@tag = row
	end
	@db.close
	erb :index
end

post '/position' do
	pos = params[:p]
	tag = Tag.first
	tag.position = pos
	tag.save
	@tags = Tag.all
	erb :index
end

get '/' do
	send_file 'public/index.html'
end
