// get url for data

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
let dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);



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

     // Log the value of sample_one
     console.log(`Default sample is ${firstSample}`);

     // Build the initial plots
     buildMetadata(firstSample);
     buildBarChart(firstSample);
     buildBubbleChart(firstSample);
     buildGaugeChart(firstSample);
  });
};
// Function that populates demographic info
function buildMetadata(sample) {

 // Use D3 to retrieve all of the data
 d3.json(url).then((data) => {

  // Retrieve all metadata
  let metadata = data.metadata;

  // Filter based on the value of the sample
  let metadataValue = metadata.filter(row => row.id == sample);
  console.log(metadataValue);

   // Get the first index from the array
  let valueOne = metadataValue[0];

  // use d3 to select metadata
  d3.select("#sample-metadata").html("");

  // Use Object.entries to add each key/value pair to the panel
  Object.entries(valueOne).forEach(([key,value]) => {


    console.log(key,value);
    
      d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
  });
});
};
// Function t0 build the bar chart
function buildBarChart(sample) {
  // Use D3 to retrieve all of the data
 d3.json(url).then((data) => {
   // Filter based on the value of the sample
  let sampleValue = data.samples.filter(row => row.id == sample);

  // Get the first index from the array
  let sampleOne =  sampleValue[0];

// Set top ten items to display in descending order
  let xAxis = sampleOne.sample_values.slice(0,10).reverse();
  let yAxis = sampleOne.otu_ids.slice(0,10).reverse().map(id => `OTU ${id}`);
  let text = sampleOne.otu_labels.slice(0,10).reverse();

  // Set up the trace for the bar chart
  let trace1 = {
    x: xAxis,
    y: yAxis,
    text: text,
    type: "bar",
    orientation: "h",
};
  let layout = {
    title: "Top 10 OTUs"
};

 // Call Plotly to plot the bar chart
 Plotly.newPlot("bar", [trace1], layout)
  });
};

// Function to build the Bubble chart
function buildBubbleChart(sample) {
   // Use D3 to retrieve all of the data
   d3.json(url).then ((data) => {
     // Filter based on the value of the sample
  let sampleValue = data.samples.filter(row => row.id == sample);

  // Get the first index from the array
  let sampleOne =  sampleValue[0];
  // set the data for the bubble chart
  let xAxis = sampleOne.otu_ids;
  let yAxis = sampleOne.sample_values;
  let markerSize = sampleOne.sample_values;
  let color = sampleOne.otu_ids;
  let text = sampleOne.otu_labels;

  let trace2 = {
    x : xAxis,
    y : yAxis,
    text : text,
    mode : "markers",
    marker: {
      color: color,
      colorscale: "Earth",
      size: markerSize
    }
  };
  let layout = {
    title: "Bacteria Per Sample",
    hovermode: "closest",
    xaxis: {title: "OTU ID"}
  };
  // Call Plotly to plot the bubble chart
  Plotly.newPlot("bubble", [trace2], layout)
  
   });
};

function optionChanged(value) { 

  // Log the new value
  console.log(value); 

  // Call all functions 
  buildMetadata(value);
  buildBarChart(value);
  buildBubbleChart(value);
  buildGaugeChart(value);
};


init();