<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <%@ include file="../common/resource.jsp" %>
            <link rel="stylesheet" type="text/css" href="${webapp}/static/styles/personFans.css"
            />
            <link rel="stylesheet" href="${webapp}/static/styles/mescroll.min.css">
            <title>
                我的粉丝
            </title>
    </head>
    <body style="height: 100%">
        <div class="main" style="height: 100%">
            <div class="set-list mescroll" id="mescrol0">
                <ul id="frienging">
                </ul>
                <div class="waterfallNone" style="display: none;">
                    <div class="waterfallNone-main">
                        <img src="${webapp}/static/images/personfansno.png" />
                        <p> 暂无粉丝！</p>
                    </div>
                </div>
            </div>
        </div>
        <script src="${webapp}/static/scripts/mescroll.min.js"></script>
        <script src="${webapp}/static/scripts/personFans.js"></script>
    </body>
</html>
