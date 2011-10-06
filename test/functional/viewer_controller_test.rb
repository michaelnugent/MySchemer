require 'test_helper'

class ViewerControllerTest < ActionController::TestCase
  test "should get schema" do
    get :schema
    assert_response :success
  end

end
