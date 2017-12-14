var isSubmit=true;
var pageIndex = 1;

		var pages;
		var _mescroll0 = new MeScroll("mescrol0", {
			down : {
				use : false
			},
			up : {
				callback : function() {
					setTimeout(function() {
						getMyFriending();
					}, 2000)
				},
				htmlNodata : '<p class="upwarp-nodata">暂无更多数据</p>'
			}
		});

		$(function() {
			getMyFriending();
		});

		function getMyFriending() {
			var param = {
				pageIndex : pageIndex
			};
			API_CALL("GET", dashi_api_url
					+ "/movie-personalCenter-images/getMyFans", param,
					function(data) {
						if (!data.hasError) {
							if (data.result.result.length > 0) {
								var result = data.result;
								var pageBean = result.pageBean;
								var page = pageBean.page;
								pageIndex = pageBean.nextPageNo;
								pages = pageBean.pages;
								_mescroll0.endSuccess();
								var html = app_html(data.result.result);
								$("#frienging").append(html);
								if (parseInt(page) == parseInt(pages)) {
									_mescroll0.showNoMore();
								}

							} else {
								_mescroll0.endSuccess(0);
								if (pageIndex == 1) {
									$(".waterfallNone").show();
								}
							}
						} else if (data.hasError == true
								&& data.code == "40302") {
							//调到登录界面
							window.location.href = loginout;
						} else {
							//跳到异常页面

						}
					})
		}

		function app_html(result) {
			var _html = '';
			for (var i = 0; i < result.length; i++) {
				var thisRow = result[i];

				_html += '<li  class="homepage" >';
				_html += '<div class="main-set-list-left" flg="'+thisRow.artistoruser+'">';

				_html += ' <div class="left-box"><div class="headDiv" style="background-image:url('
						+ thisRow.headImg + ')">';
				_html += '</div></div>';
				_html += '<div class="list-t">';
				_html += ' <p class="list-t-p1">' + thisRow.nickName + '</p>';
				_html += ' <p class="list-t-p2">' + thisRow.intro + '</p>';
				_html += '</div>';
				_html += '</div>';
				_html += ' <div class="main-set-img-right" userIdhide="'+thisRow.userId+'" flg="fans">';
				if (false == thisRow.isFollow) {
					_html += '<img src="${webapp}/static/images/fans-focus.png"/>';
				} else {
					_html += '<img src="${webapp}/static/images/fans-focus1.png"/>';
				}

				_html += '</div>';
				_html += ' </li>';

			}

			return _html;
		}
$(function(){
	$(".main-set-img-right").click(function(){
		if(!isSubmit){
			return false;
		}
		var flg;
		var img=$(this).children("img").attr('src');
		var a=$(this).attr("flg");
   		if(img.indexOf("fans-focus.png")!=-1){
   			var flg=true;
   			$(this).children("img").attr('src',webapp+'/static/images/fans-focus1.png')
   		}else{
   		 //取消关注
   			if('fans'!==a){
   				$(this).parent().remove();
   			}
   			
   			flg=false;
   		
   			var lilist=$("#frienging").find("li");
			if(lilist.length<1){
				$(".waterfallNone").show();
				$(".upwarp-nodata").text("");
			}
   		
   		}
   		
   		if('fans'!==a || flg){
   			isSubmit=false;
   	   		var param={userId:$(this).attr("userIdhide"),flag:flg};
   			API_CALL("POST", dashi_api_url+"/movie-personalCenter-images/allowFollow",param,function(data){
   				isSubmit=true;
   			
   			})
   		}
   	
	});
	
	$(".main-set-list-left").click(function(){
		var flg=$(this).attr("flg");
		var userId=$(this).next().attr('userIdhide');
		if('1'==flg){
			location.href=webapp+'/spring/mobile/star/risingStarPersonMoving?userId='+userId;
		}else{
			location.href=webapp+'/spring/mobile/star/starPersonMoving?actorId='+userId;
		}
	});
})

