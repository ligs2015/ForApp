var hostweburl;
var appweburl;

// Load the required SharePoint libraries
$(document).ready(function () {
    //Get the URI decoded URLs.
    hostweburl =
        decodeURIComponent(
           //'https://esquel.sharepoint.com/sites/uxp_dev/hwtms'
        'https://esquel.sharepoint.com/sites/systems-sit/mrs'
    );
    appweburl =
        decodeURIComponent(
            getQueryStringParameter("SPAppWebUrl")
    );

    // resources are in URLs in the form:
    // web_url/_layouts/15/resource
    var scriptbase = hostweburl + "/_layouts/15/";

    // Load the js files and continue to the successHandler
    $.getScript(scriptbase + "SP.RequestExecutor.js", execCrossDomainRequest);
});

// Function to prepare and issue the request to get
//  SharePoint data
function execCrossDomainRequest() {
    var executor = new SP.RequestExecutor(appweburl);

    executor.executeAsync(
        {
            url:
                appweburl +
                    "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('DomesticCollect')/items?&@target='" +
                        encodeURIComponent(hostweburl) + "'",
            method: "GET",
            headers: { "Accept": "application/json; odata=verbose" },
            success: function (data) {
                var result = data;
                console.log(result);
            },
            error: function (error) {
                console.log(error);
            }
        }
    );
}


// Function to retrieve a query string value.
// For production purposes you may want to use
//  a library to handle the query string.
function getQueryStringParameter(paramToRetrieve) {
    var params =
        document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
}