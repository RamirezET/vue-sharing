/**
 * Created by Ramirez on 12/4/2017.
 */
var vm = new Vue({
    el: '#demo',
    data: {
        msg: {'title': '我是父组件传来的', 'content': 'Me too.'},
        imsg: '打点字下面组件的内容也会变',
        itemPriceData: [{
            "productId": 3563660,
            "productName": "Apple AirPods 蓝牙无线耳机 MMEF2CH/A",
            "productLogo": "jfs/t3871/193/501637202/67656/c6725c75/58534587N53c62548.jpg",
            "followPrice": 1288.00,
            "isBuy": 2,
            "followedDate": 1512562868000,
            "currentPrice": 1288.00,
            "productState": "1"
        }, {
            "productId": 3498623,
            "productName": "索尼（SONY）KD-55X7000D 55英寸高清4K HDR 安卓6.0系统 智能液晶电视",
            "productLogo": "jfs/t7411/201/1244592544/202783/484878e5/599b92f5Nc93fd63d.jpg",
            "followPrice": 4999.00,
            "isBuy": 1,
            "followedDate": 1511700234000,
            "currentPrice": 4599.00,
            "productState": "4"
        }, {
            "productId": 10069341648,
            "productName": "Crucial 英睿达 美光 镁光 DDR4 8G 2400 笔记本电脑内存条 8G DDR4 2400笔记本内存条",
            "productLogo": "jfs/t11071/149/2328148053/387827/b5ce7db3/5a1654c0N5a8fcbe4.jpg",
            "followPrice": null,
            "isBuy": 3,
            "followedDate": 1511612352000,
            "currentPrice": 699.00,
            "productState": "1"
        }, {
            "productId": 4682807,
            "productName": "松下（Panasonic）SR-HCC107 5段IH电磁加热电饭煲 3.0L（对应日标1.0L）",
            "productLogo": "jfs/t5947/4/8512798076/205625/ed5386ca/59883b59Ne55e09da.jpg",
            "followPrice": null,
            "isBuy": 1,
            "followedDate": 1509121219000,
            "currentPrice": 4199.00,
            "productState": "1"
        }],
    },
    methods: {},
    mounted: function () {
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
            axios.get('http://10.30.3.124:8080/rest.web/rest/movie-bigMovie-resource/getMovieCommentList', {
                params: {
                    movieId: '92d3f2e5-d982-4e0c-a2c9-3a7809f527cf',
                    accessToken: accessToken.data.result,
                    pageIndex: 1
                }
            }).then(function (response) {
                console.log(response.data.result)
            })
        })
    },
});
