/**
 * Created by Ramirez on 12/13/2017.
 */
var vm = new Vue({
    el: "#mescroll",
    data: {
        commentListData: [],
        accessToken: "",
        userInfo: {}
    },
    mounted: function () {
        var self = this;
        self.mescroll = new MeScroll("mescroll", {
            up: {
                callback: self.getMovieCommentListVue,
                //上拉回调
                page: {
                    size: 10,
                    num: 0
                }
            }
        });
    },
    methods: {
        getMovieCommentListVue: function (page) {
            var self = this;
            if (!localStorage.accessToken) {
                getAccessToken(function (accessToken) {
                    self.accessToken = accessToken.data.result;
                    loginFunc(self.accessToken, function (loginInfo) {
                        self.userInfo = loginInfo.data.userInfo;
                        localStorage.accessToken = JSON.stringify(accessToken.data.result);
                        getMovieCommentList(self.accessToken, 1, function (movieCommentList) {
                            self.commentListData = movieCommentList.data.result.result;
                        });
                    });
                });
            } else {
                getMovieCommentList(JSON.parse(localStorage.accessToken), page.num, function (movieCommentList) {
                    if (page.num == 1) self.commentListData = [];
                    self.commentListData = self.commentListData.concat(movieCommentList.data.result.result);
                    self.mescroll.endSuccess(movieCommentList.data.result.result.length);
                });
            }
        }
    }
});

function getAccessToken(callback) {
    axios({
        url: "https://api.dashimedia.cn/rest/movie-common-resource/getAccessToken",
        method: "POST",
        data: {
            appId: "QkY5REU5MEYzMkNGMTM3Qg=="
        },
        transformRequest: [function (data) {
            let ;
            ret = "";
            for (let ; it in data;
        )
            {
                ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
            }
            return ret;
        }],
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function (accessToken) {
        callback(accessToken);
    });
}

function loginFunc(accessToken, callback) {
    axios({
        url: "https://api.dashimedia.cn/rest/movie-login-resource/ajaxLogin",
        method: "POST",
        data: {
            userPhone: "15029972629",
            loginPassword: "96e79218965eb72c92a549dd5a330112",
            accessToken: accessToken
        },
        transformRequest: [function (data) {
            let ;
            ret = "";
            for (let ; it in data;
        )
            {
                ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
            }
            return ret;
        }],
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function (loginInfo) {
        callback(loginInfo);
    });
}

function getMovieCommentList(accessToken, pageIndex, callback) {
    axios.get("https://api.dashimedia.cn/rest/movie-bigMovie-resource/getMovieCommentList", {
        params: {
            movieId: "7e663495-aa04-4663-89c1-f52055cfadbc",
            accessToken: accessToken,
            pageIndex: pageIndex
        }
    }).then(function (movieCommentList) {
        callback(movieCommentList);
    });
}