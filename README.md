# belly-button-biodiversity-challenge



This is an interactive dashboard to catalog the microbes that colonize the human naval. The data is accessed from http://robdunnlab.com/projects/belly-button-biodiversity.
 
Dashboard Features
•	Dropdown menu
To select the test subject ID to toggle various visualizations of the dashboard.
 

•	Demographic info panel
Display an individual's demographic information.
Display each key-value pair from the metadata JSON object.
 
•	Horizontal bar chart
A horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
Sample_values  are used as the values,  otu_ids as the labels, and otu_labels as the hovertext for the  bar chart.
 

•	Bubble chart
A bubble chart is generated when a test subject is selected on the drop menu
Each sample will be display as a bubble, where the larger the sample value is the larger the bubble size
On the chart, the x values are the otu_ids, the y values are the sample_values
The colors of the bubbles are based on otu_ids, and the hovertext are the otu_labels
 

•	Guage chart
A gauge chart is generated when a test subject is selected on the dropdown menu.
The value of srubs per week  is display on chart with a blue colored bar.
 

