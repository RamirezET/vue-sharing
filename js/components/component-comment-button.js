/**
 * Created by Ramirez on 12/18/2017.
 */

Vue.component('component-demo-comment-btn', {
    template:
    '    <div>' +
    '        <div class="post-comment-div" v-if="startcomment">' +
    '            <div class="issueContent">' +
    '                <img class="close-btn" src="images/close_icon.png" @click="cancelComment()">' +
    '                <textarea id="commentText" class="" placeholder="来写写你想说的..." v-model="needToPublish"></textarea>' +
    '            </div>' +
    '            <div class="comment-button" @click="publicWord()">' +
    '                发布' +
    '            </div>' +
    '        </div>' +
    '        <div class="comment-button" @click="startCommentFunc()">我有话说</div>' +
    '    </div>',
    props: ['startcomment', 'accseetoken', 'mescroll'],
    data: function () {
        return {
            needToPublish: ''
        }
    },
    methods: {
        publicWord: function () {
            var self = this;
            axios({
                url: "https://api.dashimedia.cn/rest/movie-bigMovie-resource/saveMovieComment",
                method: "POST",
                data: {
                    movieId: '7e663495-aa04-4663-89c1-f52055cfadbc',
                    comment: self.needToPublish,
                    videoPath: '',
                    imgPath: '',
                    videoImg: '',
                    accessToken: self.accseetoken
                },
                transformRequest: [function (data) {
                    let ret = "";
                    for (let it in data) {
                        ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
                    }
                    return ret;
                }],
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function (response) {
                console.log(response);
                self.$emit('update:startcomment', false);
                self.mescroll.resetUpScroll(false)
            }).catch(function (error) {
                console.log(error);
            });
        },
        cancelComment: function () {
            this.$emit('update:startcomment', false)
        },
        startCommentFunc: function () {
            this.$emit('update:startcomment', true)
        }
    },

});