<!DOCTYPE html>
<html>
<head>
    <title>jQuery Class Methods Example</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        .highlight { background-color: yellow; }
        .border { border: 2px solid red; }
        .shadow { box-shadow: 2px 2px 8px gray; }
        .active { background-color: lightgreen; }
    </style>
</head>
<body>
    <button id="addClassBtn">Add Class</button>
    <button id="removeClassBtn">Remove Class</button>
    <button id="toggleClassBtn">Toggle Class</button>

    <div id="box" style="width: 200px; height: 200px; background-color: lightblue; margin-top: 10px;">
        I'm a box!
    </div>

    <script>
        $("#addClassBtn").click(function() {
            $("#box").addClass("highlight border");
        });

        $("#removeClassBtn").click(function() {
            $("#box").removeClass("highlight border");
        });

        $("#toggleClassBtn").click(function() {
            $("#box").toggleClass("active");
        });
    </script>
</body>
</html>
