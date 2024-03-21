import React from 'react'
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./FormHeader.css"

const FormHeader = () => {

  return (
    <Paper className="paper">
        <Tabs 
        className="tabs"
        // textColor="primary"
        // indicatorColor='primary'
        centered>
            <Tab label= "Questions " className="tab" />
            <Tab label= "Responses"  className="tab"/> 
        </Tabs>
    </Paper>
  )
}

export default FormHeader
