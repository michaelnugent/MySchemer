

$(document).ready(function() {
    $('#tabset').tabs();
    $('#tabset').bind('tabsselect', function(event, ui) {
        $("#schemaarea").html("");
    });
});

function selectDB(dbname) {
    var val = document.getElementById("tabletable_" + dbname).value;
    $("#schemaarea").html("");
    $("#schemaarea").html('<table id="schematable" border="1"><thead><tr><th>Field</th><th>Type</th><th>Null</th><th>Key</th><th>Default</th><th>Extra</th></tr></thead></table>')
    $("#schematable").dataTable( {
        "bProcessing": true,
        "bJQueryUI": true,
        "bFilter": false,
        "bAutoWidth": false,
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

