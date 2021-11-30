import React, { useState } from "react";
import './studentportal.css';
const StudentPortal = () => {
    const professions = ["BCACS", "BFS", "MFS","Criminology","DPS", "BBASM","IS & FSM","PGDM"];
    const years = ["2021", "2020", "2019"];
    const sem = ["sem1", "sem2", "sem3", "sem4", "sem5", "sem6"];
    const [myProfession, setMyProfession] = useState("");
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    return (
        <>
            <h2 className="std-portal">Student portal</h2>
            <div className="main-div">
                <div className="department-choose">
                    <h2 className="dp">Departments</h2>
                    
                    <div
                        className="btn-depart"
                    >
                        {professions.map(profession => (
                            <button
                                type="button"
                                key={profession}
                                className={"button-specific"}
                                onClick={() => setMyProfession(profession)}
                            >
                                {profession.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="data-depart">


                    <p>
                        {myProfession === "BCACS" && (
                            <>
                                <div className="branch-data">
                                    {/* <p className="set-profession">{myProfession}</p> */}
                                    <div className="heading">Previous Year Questions</div>

                                    <div className="select-year">
                                        <p className="current-year">Select Year(BCACS)</p>

                                        {years.map(year => (
                                            <div  className="yr" onClick={() => setYear(year)}>
                                                <button className="seleced-year">{year}</button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <p>
                                    {year === "2021" && (<>
                                    <div className="year-sem">
                                        {console.log("Year 2021 is cliked")}
                                        <span>Select sem 2021 </span>

                                        {sem.map(semester => (
                                            // <><div className="semster-wise" onClick={() => setSemester(semester)}></div>
                                            //     <button className="sem-button">{semester}</button>
                                            // </>
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div>
                                            {/* <button className="sem-button">{semester}</button> */}
                                        </>
                                        ))}
                                    </div>
                                    </>)}  
                                </p>
                                {semester === "sem1" && year==="2021" &&(<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2021" &&(<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" && year==="2021" &&(<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2021" &&(<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem5" && year==="2021" &&(<>
                                {console.log("Sem 5 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 5 (2021) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem6" && year==="2021" && (<>
                                {console.log("Sem 6 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 6  (2021)</a>

                                </div>
                                    
                                </>)}
                                

                                <p>
                                    {year === "2020" && (<>
                                        <div className="year-sem">
                                            
                                        <span>Select sem 2020 </span>
                                        {sem.map(semester => (
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>

                                        ))}
                                        </div>
                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2020" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2020" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2020" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2020" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2020) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem5" && year==="2020" && (<>
                                {console.log("Sem 5 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 5 (2020) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem6" && year==="2020" && (<>
                                {console.log("Sem 6 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 6 (2020) </a>

                                </div>
                                    
                                </>)}
                                <p>
                                    
                                    {year === "2019" && (<>
                                        <div className="year-sem">
                                            
                                            <span>Select sem 2019 </span>
                                            {sem.map(semester => (
                                                <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>
    
                                            ))}
                                            </div>

                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2019" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2019" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2019" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2019" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem5" && year==="2019" && (<>
                                {console.log("Sem 5 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 5  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem6" && year==="2019" && (<>
                                {console.log("Sem 6 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 6 (2019) </a>
                                </div>
                                </>)}



                                

                                
                            </>
                        )}
                        {myProfession === "BFS" && (
                            <>
                            <div className="branch-data">
                                    {/* <p className="set-profession">{myProfession}</p> */}
                                    <div className="heading">Previous Year Questions</div>

                                    <div className="select-year">
                                        <p className="current-year">Select Year (BFS)</p>

                                        {years.map(year => (
                                            <div onClick={() => setYear(year)}>
                                                <button className="seleced-year">{year}</button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <p>
                                    {year === "2021" && (<>
                                    <div className="year-sem">
                                        {console.log("Year 2021 is cliked")}
                                        <span>Select sem 2021 </span>

                                        {sem.map(semester => (
                                            // <><div className="semster-wise" onClick={() => setSemester(semester)}></div>
                                            //     <button className="sem-button">{semester}</button>
                                            // </>
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div>
                                            {/* <button className="sem-button">{semester}</button> */}
                                        </>
                                        ))}
                                    </div>
                                    </>)}  
                                </p>
                                {semester === "sem1" && year==="2021" &&(<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2021" &&(<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" && year==="2021" &&(<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2021" &&(<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem5" && year==="2021" &&(<>
                                {console.log("Sem 5 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 5 (2021) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem6" && year==="2021" && (<>
                                {console.log("Sem 6 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 6  (2021)</a>

                                </div>
                                    
                                </>)}
                                

                                <p>
                                    {year === "2020" && (<>
                                        <div className="year-sem">
                                            
                                        <span>Select sem 2020 </span>
                                        {sem.map(semester => (
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>

                                        ))}
                                        </div>
                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2020" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2020" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2020" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2020" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2020) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem5" && year==="2020" && (<>
                                {console.log("Sem 5 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 5 (2020) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem6" && year==="2020" && (<>
                                {console.log("Sem 6 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 6 (2020) </a>

                                </div>
                                    
                                </>)}
                                <p>
                                    
                                    {year === "2019" && (<>
                                        <div className="year-sem">
                                            
                                            <span>Select sem 2019 </span>
                                            {sem.map(semester => (
                                                <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>
    
                                            ))}
                                            </div>

                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2019" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2019" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2019" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2019" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem5" && year==="2019" && (<>
                                {console.log("Sem 5 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 5  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem6" && year==="2019" && (<>
                                {console.log("Sem 6 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 6 (2019) </a>
                                </div>
                                </>)}



                                

                                
                            </>
                            

                            
                            // <ProfessionImage src={imgChef} />
                        )}



                       {myProfession === "MFS" && (
                            <>
                            <div className="branch-data">
                                    {/* <p className="set-profession">{myProfession}</p> */}
                                    <div className="heading">Previous Year Questions</div>

                                    <div className="select-year">
                                        <p className="current-year">Select Year (BFS)</p>

                                        {years.map(year => (
                                            <div onClick={() => setYear(year)}>
                                                <button className="seleced-year">{year}</button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <p>
                                    {year === "2021" && (<>
                                    <div className="year-sem">
                                        {console.log("Year 2021 is cliked")}
                                        <span>Select sem 2021 </span>

                                        {sem.map(semester => (
                                            // <><div className="semster-wise" onClick={() => setSemester(semester)}></div>
                                            //     <button className="sem-button">{semester}</button>
                                            // </>
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div>
                                            {/* <button className="sem-button">{semester}</button> */}
                                        </>
                                        ))}
                                    </div>
                                    </>)}  
                                </p>
                                {semester === "sem1" && year==="2021" &&(<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2021" &&(<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" && year==="2021" &&(<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2021" &&(<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2021)</a>

                                </div>
                                    
                                </>)}

                                <p>
                                    {year === "2020" && (<>
                                        <div className="year-sem">
                                            
                                        <span>Select sem 2020 </span>
                                        {sem.map(semester => (
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>

                                        ))}
                                        </div>
                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2020" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2020" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2020" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2020" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2020) </a>

                                </div>
                                    
                                </>)}
                                
                                <p>
                                    
                                    {year === "2019" && (<>
                                        <div className="year-sem">
                                            
                                            <span>Select sem 2019 </span>
                                            {sem.map(semester => (
                                                <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>
    
                                            ))}
                                            </div>

                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2019" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2019" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2019" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2019" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4  (2019)</a>

                                </div>
                                    
                                </>)}    
                            </>  
                        )}

                        {myProfession === "Criminology" && (
                            <>
                            <div className="branch-data">
                                    {/* <p className="set-profession">{myProfession}</p> */}
                                    <div className="heading">Previous Year Questions</div>

                                    <div className="select-year">
                                        <p className="current-year">Select Year (Crimi)</p>

                                        {years.map(year => (
                                            <div onClick={() => setYear(year)}>
                                                <button className="seleced-year">{year}</button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <p>
                                    {year === "2021" && (<>
                                    <div className="year-sem">
                                        {console.log("Year 2021 is cliked")}
                                        <span>Select sem 2021 </span>

                                        {sem.map(semester => (
                                            // <><div className="semster-wise" onClick={() => setSemester(semester)}></div>
                                            //     <button className="sem-button">{semester}</button>
                                            // </>
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div>
                                            {/* <button className="sem-button">{semester}</button> */}
                                        </>
                                        ))}
                                    </div>
                                    </>)}  
                                </p>
                                {semester === "sem1" && year==="2021" &&(<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2021" &&(<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" && year==="2021" &&(<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2021" &&(<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2021)</a>

                                </div>
                                    
                                </>)}

                                <p>
                                    {year === "2020" && (<>
                                        <div className="year-sem">
                                            
                                        <span>Select sem 2020 </span>
                                        {sem.map(semester => (
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>

                                        ))}
                                        </div>
                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2020" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2020" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2020" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2020" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2020) </a>

                                </div>
                                    
                                </>)}
                                
                                <p>
                                    
                                    {year === "2019" && (<>
                                        <div className="year-sem">
                                            
                                            <span>Select sem 2019 </span>
                                            {sem.map(semester => (
                                                <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>
    
                                            ))}
                                            </div>

                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2019" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2019" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2019" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2019" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4  (2019)</a>

                                </div>
                                    
                                </>)}    
                            </>
                           
                        )}

                        {myProfession === "DPS" && (
                            <>
                            <div className="branch-data">
                                    {/* <p className="set-profession">{myProfession}</p> */}
                                    <div className="heading">Previous Year Questions</div>

                                    <div className="select-year">
                                        <p className="current-year">Select Year (DPs)</p>

                                        {years.map(year => (
                                            <div onClick={() => setYear(year)}>
                                                <button className="seleced-year">{year}</button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <p>
                                    {year === "2021" && (<>
                                    <div className="year-sem">
                                        {console.log("Year 2021 is cliked")}
                                        <span>Select sem 2021 </span>

                                        {sem.map(semester => (
                                            // <><div className="semster-wise" onClick={() => setSemester(semester)}></div>
                                            //     <button className="sem-button">{semester}</button>
                                            // </>
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div>
                                            {/* <button className="sem-button">{semester}</button> */}
                                        </>
                                        ))}
                                    </div>
                                    </>)}  
                                </p>
                                {semester === "sem1" && year==="2021" &&(<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2021" &&(<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" && year==="2021" &&(<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2021" &&(<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2021)</a>

                                </div>
                                    
                                </>)}

                                <p>
                                    {year === "2020" && (<>
                                        <div className="year-sem">
                                            
                                        <span>Select sem 2020 </span>
                                        {sem.map(semester => (
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>

                                        ))}
                                        </div>
                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2020" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2020" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2020" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2020" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2020) </a>

                                </div>
                                    
                                </>)}
                                
                                <p>
                                    
                                    {year === "2019" && (<>
                                        <div className="year-sem">
                                            
                                            <span>Select sem 2019 </span>
                                            {sem.map(semester => (
                                                <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>
    
                                            ))}
                                            </div>

                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2019" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2019" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2019" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2019" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4  (2019)</a>

                                </div>
                                    
                                </>)}    
                            </>
                           
                        )}

                        {myProfession === "BBASM" && (
                            <>
                            <div className="branch-data">
                                    {/* <p className="set-profession">{myProfession}</p> */}
                                    <div className="heading">Previous Year Questions</div>

                                    <div className="select-year">
                                        <p className="current-year">Select Year (BFS)</p>

                                        {years.map(year => (
                                            <div onClick={() => setYear(year)}>
                                                <button className="seleced-year">{year}</button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <p>
                                    {year === "2021" && (<>
                                    <div className="year-sem">
                                        {console.log("Year 2021 is cliked")}
                                        <span>Select sem 2021 </span>

                                        {sem.map(semester => (
                                            // <><div className="semster-wise" onClick={() => setSemester(semester)}></div>
                                            //     <button className="sem-button">{semester}</button>
                                            // </>
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div>
                                            {/* <button className="sem-button">{semester}</button> */}
                                        </>
                                        ))}
                                    </div>
                                    </>)}  
                                </p>
                                {semester === "sem1" && year==="2021" &&(<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2021" &&(<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" && year==="2021" &&(<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2021" &&(<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2021)</a>

                                </div>
                                    
                                </>)}

                                <p>
                                    {year === "2020" && (<>
                                        <div className="year-sem">
                                            
                                        <span>Select sem 2020 </span>
                                        {sem.map(semester => (
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>

                                        ))}
                                        </div>
                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2020" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2020" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2020" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2020" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2020) </a>

                                </div>
                                    
                                </>)}
                                
                                <p>
                                    
                                    {year === "2019" && (<>
                                        <div className="year-sem">
                                            
                                            <span>Select sem 2019 </span>
                                            {sem.map(semester => (
                                                <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>
    
                                            ))}
                                            </div>

                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2019" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2019" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2019" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2019" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4  (2019)</a>

                                </div>
                                    
                                </>)}    
                            </>
                           
                        )}

                        {myProfession === "IS & FSM" && (
                            <>
                            <div className="branch-data">
                                    {/* <p className="set-profession">{myProfession}</p> */}
                                    <div className="heading">Previous Year Questions</div>

                                    <div className="select-year">
                                        <p className="current-year">Select Year (BFS)</p>

                                        {years.map(year => (
                                            <div onClick={() => setYear(year)}>
                                                <button className="seleced-year">{year}</button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <p>
                                    {year === "2021" && (<>
                                    <div className="year-sem">
                                        {console.log("Year 2021 is cliked")}
                                        <span>Select sem 2021 </span>

                                        {sem.map(semester => (
                                            // <><div className="semster-wise" onClick={() => setSemester(semester)}></div>
                                            //     <button className="sem-button">{semester}</button>
                                            // </>
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div>
                                            {/* <button className="sem-button">{semester}</button> */}
                                        </>
                                        ))}
                                    </div>
                                    </>)}  
                                </p>
                                {semester === "sem1" && year==="2021" &&(<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2021" &&(<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" && year==="2021" &&(<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2021" &&(<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2021)</a>

                                </div>
                                    
                                </>)}

                                <p>
                                    {year === "2020" && (<>
                                        <div className="year-sem">
                                            
                                        <span>Select sem 2020 </span>
                                        {sem.map(semester => (
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>

                                        ))}
                                        </div>
                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2020" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2020" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2020" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2020" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2020) </a>

                                </div>
                                    
                                </>)}
                                
                                <p>
                                    
                                    {year === "2019" && (<>
                                        <div className="year-sem">
                                            
                                            <span>Select sem 2019 </span>
                                            {sem.map(semester => (
                                                <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>
    
                                            ))}
                                            </div>

                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2019" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2019" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2019" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2019" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4  (2019)</a>

                                </div>
                                    
                                </>)}    
                            </>
                           
                        )}


                       {myProfession === "PGDM" && (
                            <>
                            <div className="branch-data">
                                    {/* <p className="set-profession">{myProfession}</p> */}
                                    <div className="heading">Previous Year Questions</div>

                                    <div className="select-year">
                                        <p className="current-year">Select Year (PGDM)</p>

                                        {years.map(year => (
                                            <div onClick={() => setYear(year)}>
                                                <button className="seleced-year">{year}</button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <p>
                                    {year === "2021" && (<>
                                    <div className="year-sem">
                                        {console.log("Year 2021 is cliked")}
                                        <span>Select sem 2021 </span>

                                        {sem.map(semester => (
                                            // <><div className="semster-wise" onClick={() => setSemester(semester)}></div>
                                            //     <button className="sem-button">{semester}</button>
                                            // </>
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div>
                                            {/* <button className="sem-button">{semester}</button> */}
                                        </>
                                        ))}
                                    </div>
                                    </>)}  
                                </p>
                                {semester === "sem1" && year==="2021" &&(<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2021" &&(<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" && year==="2021" &&(<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2021)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2021" &&(<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2021)</a>

                                </div>
                                    
                                </>)}

                                <p>
                                    {year === "2020" && (<>
                                        <div className="year-sem">
                                            
                                        <span>Select sem 2020 </span>
                                        {sem.map(semester => (
                                            <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>

                                        ))}
                                        </div>
                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2020" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2020" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2020" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3 (2020)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2020" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4 (2020) </a>

                                </div>
                                    
                                </>)}
                                
                                <p>
                                    
                                    {year === "2019" && (<>
                                        <div className="year-sem">
                                            
                                            <span>Select sem 2019 </span>
                                            {sem.map(semester => (
                                                <><div className="semster-wise" onClick={() => setSemester(semester)}> <button className="sem-button">{semester}</button> </div></>
    
                                            ))}
                                            </div>

                                    </>)}
                                </p>
                                {semester === "sem1" && year==="2019" && (<>
                                {console.log("Sem 1 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 1  (2019)</a>

                                </div>
                                    
                                </>)}
                                {semester === "sem2" && year==="2019" && (<>
                                {console.log("Sem 2 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 2  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem3" &&  year==="2019" && (<>
                                {console.log("Sem 3 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 3  (2019) </a>

                                </div>
                                    
                                </>)}
                                {semester === "sem4" && year==="2019" && (<>
                                {console.log("Sem 4 is clicked")}
                                <div className="download-button">
                                <a href="./files/file.pdf"  download>Download 4  (2019)</a>

                                </div>
                                    
                                </>)}    
                            </>
                           
                        )}

                    </p>
                </div>
            </div>
        </>
    );
};



export default StudentPortal;