// use d3.json to retrieve url data
d3.json(url).then(function(data){
        // dataSet = data;
        console.log(data);       
});

// Initializes the dashboard with a default plot
function init(){

  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  // Use D3 to get sample names and populate the drop-down selector
  d3.json(url).then((data) => {

    subjectId = data.names;

    // Add  samples to dropdown menu

    subjectId.forEach((id) => {
      dropdownMenu.append("option")
      .text(id)
      .property("value", id);
    });

     // Set the first sample from the list
     let firstSample = subjectId[0];

     // Build the initial plot
     buildGaugeChart(firstSample);
     
  });
};

//function to buold the Guage chart

function buildGaugeChart(sample){
     // Use D3 to retrieve all of the data
     d3.json(url).then((data) => {

        let metadata = data.metadata;

        // Filter based on the value of the sample
        let metadataValue = metadata.filter(row => row.id == sample);
        console.log(metadataValue);

        // Get the first index from the array
        let valueOne = metadataValue[0];

        // select value of wfreq for the guage chart
        let washFrequency = Object.values(valueOne)[6];
        console.log(washFrequency);

        // Set up the trace for the gauge chart
        let trace3 = {
            domain: {x: [0,1], y: [0,1]},
            value: washFrequency,            
            title: {
                text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
            },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [null,9], tickwidth : 1},
                bar: {color: "black"},
                steps: [
                    {range: [0, 1], color: "rgba(255, 255, 255, 0)"},
                    {range: [1, 2], color: "rgba(230, 225, 200, .5)"},
                    {range: [2, 3], color: "rgba(210, 205, 145, .5)"},
                    {range: [3, 4], color:  "rgba(200, 210, 95, .5)"},
                    {range: [4, 5], color:  "rgba(185, 205, 68, .5)"},
                    {range: [5, 6], color: "rgba(170, 200, 42, .5)"},
                    {range: [6, 7], color: "rgba(142, 178, 35 , .5)"},
                    {range: [7, 8], color:  "rgba(110, 154, 22, .5)"},
                    {range: [8, 9], color: "rgba(50, 143, 10, 0.5)"}
                ]
            }
        };

        // Set up the Layout
        let layout = {
            width: 400, 
            height: 400,
            margin: {t: 0, b:0}
        };

        // Call Plotly to plot the gauge chart
        Plotly.newPlot("gauge", [trace3], layout)

     }); 
}

init();