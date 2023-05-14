
# Project Title

An assignment given by TTT(Teribly Tiny Tales) for the selection for hiring rounds. Here we are given a text api from where we need to find most 20 occuring words and plot it into a Histogram.
This is all about the project.



## Documentation

Libraries or hooks i have used : 

1-"histogram": "^3.0.3" from recharts": "^2.6.2"
This library quickly build your charts with decoupled, reusable React components.
So using recharts i made bargraph to show the data.

2-CSV Link  from 'react-csv'

Generate a CSV file from given data.
This data can be an array of arrays, an array of literal objects, or strings.

3-React useState

I have used useState to update the finaldata that was fetched from text. To give csv file the exact data , the i created state.

//LOGIC//

1-First i fetched the data using promise (async-await).

2-Converted the data to text.

3-Splitted the data to make words using ("/\s+/") which removed whitespaces,commas etc.

4-I reduced the same array of words to map where i counted the occurence of each data.

5-After reducing the array into map,I sorted it in count wise (desceding order).

6-Then finally i sliced from (0,20) to get first most occuring words.

7-then i updated the same to state.

8-I passed the state to csv link for the export feature.

9-With the updated state i created the barchart with the help of recharts.




## Installation

I To install the dependancies : npm install

start the project : npm start


    
## 🚀 About Me
I'm a Front-End Developer and i also have a keen interest in UI/UX as well. 
I have 2 years of experience as a graphic designer.


Toolkits i use:

Photoshop,Canva,Figma

Premiere Pro, Filmora




## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-ui-ux.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pranab-patra77/)


