<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <%@ include file="../common/resource.jsp" %>
        <link rel="stylesheet" href="${webapp}/static/styles/mescroll.min.css">
        <link rel="stylesheet" type="text/css" href="${webapp}/static/styles/personFans.css"/>
        <title>我的粉丝</title>
    </head>
    <body style="height: 100%">
        <div class="main" style="height: 100%">
            <div class="set-list mescroll" id="mescrol0">
                <div class="dataList" id="dataList" v-cloak>
					<li class="homepage" v-for="(myFansInfo, index) in pdlist">
						<div class="main-set-list-left"  @click='lookThisPerson(myFansInfo.userId)'>
							<div class="left-box">
								<div class="headDiv" :style="'background-image:url(' + myFansInfo.headImg + ')'"></div>
							</div>
							<div class="list-t">
								<p class="list-t-p1">{{myFansInfo.nickName}}</p>
								<p class="list-t-p2">{{myFansInfo.intro}}</p>
							</div>
						</div>
	 					<div v-if="myFansInfo.isFollow" class="main-set-img-right">
							<div class="myFansFo">已关注</div>
						</div>
	 					<div v-else-if="!myFansInfo.isFollow" class="main-set-img-right" @click="doFollow(myFansInfo.userId,index)">
							<div class="myFansUnfo">+ 关注</div>
						</div>					
					</li>
				</div>
            </div>
        </div>
        
		<script src="${webapp}/static/scripts/vue.2.5.1.js"></script>        
        <script src="${webapp}/static/scripts/mescroll.min.js"></script>
        <script src="${webapp}/static/scripts/personFans.min.js"></script>
    </body>
</html>
