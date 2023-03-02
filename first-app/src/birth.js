import React, {useState} from 'react';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import './styles.css';
const studentList = [
    {
        name: 'Suresh',
        dob: '05-05-1996'
    },
    {
        name: 'Ravina',
        dob: '05-20-2000'
    },
    {
        name: 'Deepika',
        dob: '05-15-1996'
    },
    {
        name: 'Vikash',
        dob: '10-01-1996'
    },
    {
        name: 'Ravi',
        dob: '05-19-1996'
    }
]



const Birth = () =>{

    // let today = new Date();
    // let dd = `${today.getDate() < 10 ? "0" : ""} ${today.getDate()}`;
    // let mm = `${today.getMonth() + 1 < 10 ? "0" : ""} ${today.getMonth()}`
    // let yyyy = today.getFullYear();
    // today = `${dd} - ${mm} - ${yyyy}`;
    // const ddmm = `${dd} - ${mm}`;
    const [student, setStudent] = useState(studentList)
        // let currentDate = `${today.getDate() < 10 ? "0" : ""} ${today.getDate()}`;
        // let currentMonth = `${today.getMonth() + 1 < 10 ? "0" : ""} ${today.getMonth()}`
        // console.log("currentDate", currentDate)
        // console.log("currentMonth", currentMonth)

         // let day = `${today.getDate(data.dob) < 10 ? "0" : ""} ${today.getDate()}`;
            // let month = `${today.getMonth(data.dob) + 1 < 10 ? "0" : ""} ${today.getMonth()}`
            // if(day === currentDate && month === currentMonth){
            //     return "ds fkdswkks";
            // }



        // new Date().toISOString()
        let today = new Date();
        const list = student.filter(data =>{
            const dob = new Date(data.dob)
            if(dob.getMonth() === today.getMonth() && dob.getDate() === today.getDate()){
                return true;
            }
            return false;
        });

        const list2 = student.filter(data =>{
            const dob = new Date(data.dob)
            console.log(dob.getMonth())
            if(dob.getMonth() === today.getMonth()){
                return true;
            }
            return false;
        });

        console.log('list2', list2)


    return(
        <>
            <h1>Birth day </h1>
        
           <div>{JSON.stringify(list)} </div>
           <div>{JSON.stringify(list2)} </div>
            <Container>
                <Grid container>
                <Grid md={6} sx={{mx:'auto'}} className="birth_card">
                    <Grid className="innerdiv">
                        <Box className="imageBox">
                            <img src="banner-orignal-image.jpeg" width="100" height="100" alt=""/>
                        </Box>
                    </Grid>
                </Grid>
                </Grid>
                
            </Container>
           <Button variant="contained">Narender</Button>
        </>
    );
};

export default Birth;