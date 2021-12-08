function setupButtons() {
  d3.select("#toolbar")
    .selectAll(".button")
    .on("click", function () {
      // Remove active class from all buttons
      d3.selectAll(".button").classed("active", false);
      // Find the button just clicked
      var button = d3.select(this);

      // Set it as the active button
      button.classed("active", true);

      // Get the id of the button
      var buttonId = button.attr("id");
      if (buttonId == "status") window.open("index.html", "_self");
      else if (buttonId == "factors")
        window.open("index_factors.html", "_self");
      else if (buttonId == "access") window.open("index_access.html", "_self");
      else if (buttonId == "quality")
        window.open("index_quality.html", "_self");
      else if (buttonId == "resources")
        window.open("index_resources.html", "_self");
      else if (buttonId == "resources")
        window.open("index_resources.html", "_self");
      else if (buttonId == "covid") window.open("index_covid.html", "_self");
      // Toggle the bubble chart based on
      // the currently clicked button.
      //draw(buttonId);
    });

  d3.select("#shareLink").on("click", function () {
    // Remove active class from all buttons
    d3.select("#shareContainer").style("visibility", "visible");
  });

  d3.select("#closeShare").on("click", function () {
    // Remove active class from all buttons
    d3.select("#shareContainer").style("visibility", "hidden");
  });
}
