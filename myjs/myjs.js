$('.button').click(function() {
    var btn_id = $(this).attr('id');
   // alert(btn_id);

	var title,tagline,description,date,time,image;
	var phpurl="myphp/myphp.php";

/*If btn_id is "insert_message_btn" get all the values from the inputs and validate it and post the data to insertnews.php */
    if(btn_id == "insert_news_btn")
	{
		/*Get all the values from the inputs*/
		 title = document.getElementById('newstitle').value;
		 tagline = document.getElementById('newstagline').value;
		 description = document.getElementById('newsdescription').value;
		 date = document.getElementById('newsdate').value;
		 time = document.getElementById('newstime').value;
		 image = document.getElementById('newsimage').value;

		$.post(phpurl,{request:"insert_news", title: title, tagline:tagline, description:description, date:time, time:time, image:image },function(returndata){
						//This part is to be edited
						var returndata1=JSON.parse(returndata);
												
						});
	}

});
