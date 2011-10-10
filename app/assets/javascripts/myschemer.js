

$(document).ready(function() {
    $('#tabset').tabs();
    $('#tabset').bind('tabsselect', function(event, ui) {
        $("#schemaarea-" + ui.index+1).html("");
    });
});

function selectDB(dbname, tabindex) {
    console.log("dbname " + dbname + " tabindex " + tabindex);
    var val = document.getElementById("tabletable_" + dbname).value;
    console.log("val " + val);
    $("#schemaarea-" + tabindex).html("");
    $("#schemaarea-" + tabindex).html('<table id="schematable-' + tabindex + '" border="1"><thead><tr><th>Field</th><th>Type</th><th>Null</th><th>Key</th><th>Default</th><th>Extra</th></tr></thead></table>');
    console.log("firing ajax");
    $("#schematable-" + tabindex).dataTable( {
        "bProcessing": false,
        "bJQueryUI": true,
        "bFilter": false,
        "bAutoWidth": true,
        "bPaginate": false,
        "sAjaxSource":  "/viewer/table/table?tablename="+val,
        "aoColumns": [
            { "mDataProp": "field" },
            { "mDataProp": "type" },
            { "mDataProp": "null" },
            { "mDataProp": "key" },
            { "mDataProp": "default" },
            { "mDataProp": "extra" }
        ]
    });
};

