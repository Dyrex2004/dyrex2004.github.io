function onLoad() {
    $.getJSON('https://raw.githubusercontent.com/elluzion/infra/main/website/projects.json', { get_param: 'value' }, function(data) {
        $.each(data, function(index, element) {
            var projectID = element.id;
            var html = '<div class="projects-single animate__animated animate__fadeIn" id="' + element.id + "-" + element.type + '" onclick="loadDLPage(this.id)">' +
            '<span class="projects-single-title">' + element.name + '</title></span><br>' +
            '<span class="projects-single-type">' + element.type + '</title></span><br>' +
            '<span class="projects-single-summary">' + element.summary + '</title></span>' +
            '</div>';
            $(".project-wrapper").append(html);
        });
    });
}
function loadDLPage(id) {
    id = id.toLowerCase();
    window.location.replace("download.html?id="+id);
}