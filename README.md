# belly-button-biodiversity-challenge



This interactive dashboard catalogs the microbes that colonize the human naval. The data is accessed from http://robdunnlab.com/projects/belly-button-biodiversity. The dashboard is created using D3.js library.

![image](https://github.com/hidyv/belly-button-biodiversity-challenge/assets/25726099/3f68315f-4130-4015-ba15-79deef383a70)

 
Dashboard Features
•	Dropdown menu
Select the test subject ID to toggle various visualizations of the dashboard.

![image](https://github.com/hidyv/belly-button-biodiversity-challenge/assets/25726099/24840263-2027-4e30-b359-1631d80c9f96)

 

•	Demographic info panel
Display an individual's demographic information.
Display each key-value pair from the metadata JSON object.
![image](https://github.com/hidyv/belly-button-biodiversity-challenge/assets/25726099/3fdf0c09-aaa6-45bc-92c7-53bae5366ec4)

 
•	Horizontal bar chart
A horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
Sample_values  are used as the values,  otu_ids as the labels, and otu_labels as the hovertext for the  bar chart.
 ![image](https://github.com/hidyv/belly-button-biodiversity-challenge/assets/25726099/3a9cfa40-35d5-41b3-b70e-01773f27acd8)


•	Bubble chart
A bubble chart is generated when a test subject is selected on the drop menu
Each sample will be displayed as a bubble, where the larger the sample value is the larger the bubble size
On the chart, the x values are the otu_ids, the y values are the sample_values
The colors of the bubbles are based on otu_ids, and the hover text is the otu_labels
 ![image](https://github.com/hidyv/belly-button-biodiversity-challenge/assets/25726099/fbbd08a4-2898-4096-93ac-ee0422c70be7)


•	Guage chart
A gauge chart is generated when a test subject is selected on the dropdown menu.
The value of scrubs per week  is displayed on a gauge chart.

 ![image](https://github.com/hidyv/belly-button-biodiversity-challenge/assets/25726099/3ae630de-e35d-4ee4-828f-fdea6d3aae99)


