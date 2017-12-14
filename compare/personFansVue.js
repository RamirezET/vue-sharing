var vm = new Vue({
    el:"#dataList",
    data:{
        mescroll:null,
        pdlist:[],
        canClick:true,
    },
    mounted:function() {
        var self = this;       
        self.mescroll = new MeScroll("mescrol0", {
            down:{
                use:false
            },
            up:{
                auto:true,
                callback:self.upCallback,
                page:{
                    num:0,
                    size:10
                },
                empty:{
                    // 配置列表无任何数据的提示
                    warpId:"dataList",
                    icon:webapp + "/static/images/personfansno.png",
                    tip:"暂无关注!"
                },                
                loadFull:{
                    use:true
                },
                scrollbar:{use:false},
                htmlNodata:'<p class="upwarp-nodata">暂无更多数据</p>'
            }
        });
    },
    methods:{
        upCallback:function(page) {
            // 联网加载数据
            var self = this;
            getMyFansList(page.num, function(curPageData) {
                // curPageData.result=[]; //打开本行注释,可演示列表无任何数据empty的配置
                // 如果是第一页需手动制空列表
                if (page.num == 1) self.pdlist = [];
                /* console.log(curPageData)*/
                // 更新列表数据
                self.pdlist = self.pdlist.concat(curPageData.result);
                self.mescroll.endSuccess(curPageData.result.length);
            });
        },
        lookThisPerson:function(userId) {
        	location.href = webapp + "/spring/mobile/star/risingStarPersonMoving?userId=" + userId;
        },
        doFollow:function(userId,index,isFollow){
            var self = this;
        	if (self.canClick) {
        	    var param = {
        	        userId:userId,
        	        flag:true
        	    };
	            self.canClick = false;
        	    API_CALL("POST", dashi_api_url + "/movie-personalCenter-images/allowFollow", param, function(data) {
        	        if (data != null && !data.hasError) {
                	    self.pdlist[index].isFollow=!self.pdlist[index].isFollow; 
        	            if (self.pdlist.length < 1) {
        	            	self.mescroll.showEmpty();
        	            	self.mescroll.hideUpScroll();
        	            }
        	            self.canClick = true;
        	        }
        	    });
        	}
        }
    }
});

function getMyFansList(pageNum, successCallback) {
    var param = {
        pageIndex:pageNum
    };
    setTimeout(function() {
        API_CALL("GET", dashi_api_url + "/movie-personalCenter-images/getMyFans", param, function(data) {
            if (!data.hasError) {
                successCallback(data.result);
            } else if (data.hasError == true && data.code == "40302") {
                //调到登录界面
                window.location.href = loginout;
            } else {}
        });
    }, 1e3);
}