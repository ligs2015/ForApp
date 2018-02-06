//var appweburl = "https://esquel-a86c4a46427a06.sharepoint.com/sites/uxp_dev/for/ForApp"; //自己的sharepoint online
//var hostweburl = "https://esquel.sharepoint.com/sites/uxp_dev/hwtms" //其他的sharepoint online
//$(function () {
//    $.getScript(hostweburl + "/_layouts/15/SP.RequestExecutor.js", execCrossDomainRequest);
//});

//function execCrossDomainRequest() {
//    var context;
//    var factory;
//    var appContextSite;

//    //context = new SP.ClientContext(appweburl);
//    //factory = new SP.ProxyWebRequestExecutorFactory(appweburl);
//    //context.set_webRequestExecutorFactory(factory);
//    //appContextSite = new SP.AppContextSite(context, hostweburl);

//    var executor = new SP.RequestExecutor(appweburl);

//    executor.executeAsync(
//        {
//            url:
//                appweburl +
//                    "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('Colleges')/items?&@target='" +
//                        encodeURIComponent(hostweburl) + "'",
//            method: "GET",
//            headers: { "Accept": "application/json; odata=verbose" },
//            success: function (data) {
//                var result = data;
//                console.log(result);
//            },
//            error: function (error) {
//                console.log(error);
//            }
//        }
//    );
//}