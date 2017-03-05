/**
 * Created by david on 3/4/17.
 */
function getQueryVar(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, ' '));
            // the replace function takes the expression with the unwanted (+) and replaces it with what ever you specify
        }
    }

    return undefined;
}

// a quick little query param function