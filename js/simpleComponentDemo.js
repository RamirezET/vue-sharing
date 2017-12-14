/**
 * Created by Ramirez on 12/13/2017.
 */
var vm = new Vue({
        el: '#demo',
        data: {
            commentListData: [],
            accessToken: ''
        },
        methods: {
            goToCommentPage: function (movieCommentId) {
                console.log(movieCommentId);
            },
            addLike: function (movieCommentId, index) {
                var self = this;
                console.log(movieCommentId);
                console.log(index);
                axios({
                    url: 'http://10.30.3.124:8080/rest.web/rest/movie-bigMovie-resource/addMovieCommentThumbsUp',
                    method: 'POST',
                    data: {
                        movieCommentId: movieCommentId,
                        accessToken: self.accessToken,
                        isUp: !self.commentListData[index].isLike
                    },
                    transformRequest: [function (data) {
                        let ret = ''
                        for (let it in data) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        return ret
                    }],
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (response) {
                    if (self.commentListData[index].isLike) {
                        self.commentListData[index].likeNum--;
                    } else {
                        self.commentListData[index].likeNum++;
                    }
                    self.commentListData[index].isLike = !self.commentListData[index].isLike;
                })
            },
            deleteComment: function (commentId, index) {
                var self = this;
                axios({
                    url: 'http://10.30.3.124:8080/rest.web/rest/movie-comment-resource/deleteComment',
                    method: 'POST',
                    data: {
                        commentId: commentId,
                        accessToken: self.accessToken,
                        type: 'PLATFORM'
                    },
                    transformRequest: [function (data) {
                        let ret = ''
                        for (let it in data) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        return ret
                    }],
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (response) {
                    self.commentListData.splice(index, 1);
                })
            }
        },
        mounted: function () {
            var self = this;
            axios({
                url: 'http://10.30.3.124:8080/rest.web/rest/movie-common-resource/getAccessToken',
                method: 'POST',
                data: {
                    appId: 'QkY5REU5MEYzMkNGMTM3Qg=='
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (accessToken) {
                self.accessToken = accessToken.data.result;
                axios({
                    url: 'http://10.30.3.124:8080/rest.web/rest/movie-login-resource/ajaxLogin',
                    method: 'POST',
                    data: {
                        userPhone: '15029972629',
                        loginPassword: '96e79218965eb72c92a549dd5a330112',
                        accessToken: self.accessToken
                    },
                    transformRequest: [function (data) {
                        let ret = ''
                        for (let it in data) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        return ret
                    }],
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (response) {
                    axios.get('http://10.30.3.124:8080/rest.web/rest/movie-bigMovie-resource/getMovieCommentList', {
                        params: {
                            movieId: '92d3f2e5-d982-4e0c-a2c9-3a7809f527cf',
                            accessToken: self.accessToken,
                            pageIndex: 1
                        }
                    }).then(function (response) {
                        self.commentListData = response.data.result.result;
                    })
                })
            })
        },
        filters: {
            isLike: function (isLike) {
                return isLike ? 'images/like2.png' : 'images/like1.png';
            }
        }
    })
;
