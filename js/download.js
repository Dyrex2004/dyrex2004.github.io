function onLoad() {
    urlHasMeta();
    if (getProjectType() != "rom") {
        $(".disclaimer-top").remove();
    }
    fillContent();
}
function fillContent() {
    var jsonUrl = "https://raw.githubusercontent.com/elluzion/infra/main/download/" + getProjectID() + ".json";
    $.getJSON(jsonUrl, { get_param: 'value' }, function(data) {
        $.each(data, function(index, element) {
            $("#download-title").html(element.name);
            $("#download-version").html(element.version);
            $("#download-filename").html(element.filename);
            $("#download-date").html(element.date);
        });
    });
    $("#download-type").html(getProjectType());

}
function showSha1Sum() {
    var jsonUrl = "https://raw.githubusercontent.com/elluzion/infra/main/download/" + getProjectID() + ".json";
    $.getJSON(jsonUrl, { get_param: 'value' }, function(data) {
        $.each(data, function(index, element) {
           alert(element.sha1sum);
        });
    });
}
function openDlLink() {
    var jsonUrl = "https://raw.githubusercontent.com/elluzion/infra/main/download/" + getProjectID() + ".json";
    $.getJSON(jsonUrl, { get_param: 'value' }, function(data) {
        $.each(data, function(index, element) {
            window.location.replace(element.link);
        });
    });
}
function getProjectID() {
    var url = window.location.href;
    var rawFullId = url.split("?id=");
    var cutId = rawFullId[1].split("-");
    return cutId[0];
}
function getProjectType() {
    var url = window.location.href;
    var rawFullId = url.split("?");
    var cutId = rawFullId[1].split("-");
    return cutId[1];
}
function urlHasMeta() {
    var url = window.location.href;
    if (!url.includes("?id=")) {
        alert("Error: Broken link!");
        window.location.href = "index.html";
    }
}