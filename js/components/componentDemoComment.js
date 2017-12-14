/**
 * Created by Ramirez on 12/13/2017.
 */

Vue.component('component-demo-comment', {
    template:
    '    <div class="component-comment-area">\n' +
    '        <div class="split-line">\n' +
    '            <i></i>\n' +
    '            <p>评论区</p>\n' +
    '        </div>\n' +
    '        <div class="comment-list" v-if="commentlistdata" v-for="(commentListItem,index) in commentlistdata"\n' +
    '             :key="commentListItem.movieCommentId" v-cloak>\n' +
    '            <div class=" comment-list-left">\n' +
    '                <img :src="commentListItem.userHeadImg" alt="">\n' +
    '            </div>\n' +
    '            <div class="comment-list-right">\n' +
    '                <p class="comment-list-right-name">{{commentListItem.userNickName}}</p>\n' +
    '                <p class="comment-list-right-comment">{{commentListItem.comment}}</p>\n' +
    '                <div class="comment-list-right-img-box" v-if="commentListItem.commentImg">\n' +
    '                    <div class="comment-list-right-img-item"\n' +
    '                         v-for="commentImage in commentListItem.commentImg.split(\',\')">\n' +
    '                        <img :src="commentImage" alt="">\n' +
    '                    </div>\n' +
    '                    <div class="clearfix"></div>\n' +
    '                </div>\n' +
    '                <div class="comment-list-right-video-box" v-if="commentListItem.commentVideo">\n' +
    '                    <video controls="" x5-video-player-type="h5" x5-video-player-fullscreen="true"\n' +
    '                           playsinline="true" height="182">\n' +
    '                        <source :src="commentListItem.commentVideo" type="video/mp4">\n' +
    '                    </video>\n' +
    '                </div>\n' +
    '                <div class="comment-list-right-bottom">\n' +
    '                    <div class="comment-list-right-bottom-left">\n' +
    '                        <div class="comment-list-right-bottom-left-datetime">{{commentListItem.createDate}}</div>\n' +
    '                        <div class="comment-list-right-bottom-right-deletebtn"\n' +
    '                             @click="deleteComment(commentListItem.movieCommentId,index)"' +
    '                             v-if="commentListItem.userId==userinfo.userId">删除\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="comment-list-right-bottom-right">\n' +
    '                        <div class="comment-list-right-bottom-right-like">\n' +
    '                            <img :src="commentListItem.isLike|isLike" alt=""\n' +
    '                                 @click="addLike(commentListItem.movieCommentId,index)">\n' +
    '                            <span>{{commentListItem.likeNum}}</span>\n' +
    '                        </div>\n' +
    '                        <div class="comment-list-right-bottom-right-comment">\n' +
    '                            <img src="images/comment.png" alt=""\n' +
    '                                 @click="goToCommentPage(commentListItem.movieCommentId)">\n' +
    '                            <span>{{commentListItem.commentNum}}</span>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    ' </div>',
    props: ['commentlistdata', 'accseetoken', 'userinfo'],
    methods: {
        goToCommentPage: function (movieCommentId) {
            console.log(movieCommentId);
        },
        addLike: function (movieCommentId, index) {
            var self = this;
            axios({
                url: 'http://10.30.3.124:8080/rest.web/rest/movie-bigMovie-resource/addMovieCommentThumbsUp',
                method: 'POST',
                data: {
                    movieCommentId: movieCommentId,
                    accessToken: self.accseetoken,
                    isUp: !self.commentlistdata[index].isLike
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
                if (self.commentlistdata[index].isLike) {
                    self.commentlistdata[index].likeNum--;
                } else {
                    self.commentlistdata[index].likeNum++;
                }
                self.commentlistdata[index].isLike = !self.commentlistdata[index].isLike;
            })
        },
        deleteComment: function (commentId, index) {
            var self = this;
            axios({
                url: 'http://10.30.3.124:8080/rest.web/rest/movie-comment-resource/deleteComment',
                method: 'POST',
                data: {
                    commentId: commentId,
                    accessToken: self.accseetoken,
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
                self.commentlistdata.splice(index, 1);
            })
        }
    },
    filters: {
        isLike: function (isLike) {
            return isLike ? 'images/like2.png' : 'images/like1.png';
        }
    }
});