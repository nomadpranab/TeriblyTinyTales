import React,{useState} from 'react'
import { CSVLink } from 'react-csv';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Homepage.css';
import logo from './logo.jpg'


function Homepage() {
    // const [csv,setcsv]=useState([]);
    const [finaldata,setfinaldata]=useState([]);
    const Handleclick=async()=>{
        const data=await fetch("https://www.terriblytinytales.com/test.txt");
        const text=await data.text();
       const wordarray=text.split(/\s+/);
       const wordcount=wordarray.reduce((map,key)=>{
        map[key]=(map[key]||0)+1;
        return map;
       },{})   
       
       let newmap=Object.keys(wordcount).sort((a,b)=> wordcount[b]-wordcount[a]).slice(0,20).map((key) => ({ key, Count: wordcount[key] }));
       console.log(newmap);
      //  setcsv(newmap);
       setfinaldata(newmap);
    }
  return (
    <>
      
      {/* <div className="d-flex  justify-content-around  m-5 p-5" >
        <div>
          <img id='logo' src={logo} alt='logo'/>
        </div>
        <div className='m-1 ' id="about">
          <p className='p-5'>TTT is built for and by creators. We run a vibrant and inclusive community of 5 million+ people. From writers, influencers, designers, actors, content lovers and culture adopters - these folks love what we do. Ambitious brands leverage our reach of 25 million people / week to seed their stories on our platform.</p>
        </div>
      </div> */}
      {/* <button id="Submit Button"onClick={Handleclick}>Submit</button> */}
      <section id="main"style={{height:"100%"}}>
      <h1 className='text-center pt-5 heading'>Teribly Tiny Tales</h1>
      <div className="container">
             <div className="row justify-content-around  pt-3">
                <div className="text-center card my-5 mx-3 d-flex  text-dark" style={{width: "30rem"}} id="card">
                    <div style={{boxShadow:"0px 5px 30px Black"}}><img src={logo} height={225} className="card-img-top" style={{marginTop:-20}} alt="image3"/></div>
                    <div className="card-body" style={{paddingTop:30}}>
                        <h5 className="card-title"><strong>COMMUNITY-FIRST</strong></h5>
                        <p className="card-text">TTT is built for and by creators. We run a vibrant and inclusive community of 5 million+ people. From writers, influencers, designers, actors, content lovers and culture adopters - these folks love what we do. Ambitious brands leverage our reach of 25 million people / week to seed their stories on our platform.</p>
                    </div>
                    <div id="content">
                        <span><b>Click Here to see 20 most Occuring words</b></span><br></br>
                        <button className="mt-3" id="submit-button" onClick={Handleclick}>Submit</button>
                  </div>
                </div>
            </div>
            </div>
      </section>
    <section id="graph">
    {finaldata.length > 0 && (
      <>
      <div style={{textAlign:"center",paddingTop:"2rem"}}>
          <button id="export-button"><CSVLink data={finaldata}/>Export CSV File</button>
        </div>

      <div className='container d-flex justify-content-center' style={{width:"100vw"}}>
          <BarChart width={410} height={300} data={finaldata} style={{marginTop:"2rem"}}>
            <CartesianGrid strokeWidth={"2px"} stroke='white'/>
            <XAxis dataKey="key" stroke='#05445E'/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Count" fill="#05445E"/>
          </BarChart>
        </div>
        
        </>
        
        
      )}
    </section>
      
      
      
    </>
  )
}

export default Homepage
