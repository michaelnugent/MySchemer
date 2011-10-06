
$(document).ready(function() {
    $('#tabs').tabs();
    $('#tabs').bind('tabsselect', function(event, ui) {
        console.log("test here")
        ui.tab
        ui.panel
        ui.index
    });
});