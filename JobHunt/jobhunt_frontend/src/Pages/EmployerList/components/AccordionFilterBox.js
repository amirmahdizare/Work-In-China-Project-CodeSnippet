import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { Jh_Card } from '../../../components/Jh_Card'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
const useStyles = makeStyles(theme=>({
    root:{
        flex:'1'
    },
    
    summary:{
        padding:0
    }
    ,
    expandIcon:{
        paddingTop:'0',
        paddingBottom:'0'
    }
}))
export const AccordionFilterBox = (props) => {
    const classes=useStyles()
    let initialState = {}
    if(props.items)
    props.items.forEach((item)=>{
        initialState[item.name]=false
    })
    const [state, setState] = useState(initialState);
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        <Jh_Card  >
            <Accordion square defaultExpanded elevation={0} classes={{root:classes.root}}  >
                <AccordionSummary
                    expandIcon={<IconButton><ExpandMoreOutlinedIcon /></IconButton>}
                    aria-controls={`${props.title} Filter`}
                    id={`${props.title} Filter`}
                    classes={{root:classes.summary,expandIcon:classes.expandIcon}}
                >
                    <Typography  >{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup >
                        {props.items ? props.items.map(item => (<FormControlLabel
                            control={<Checkbox checked={state[item.name]} onChange={handleChange} name={item.name} color="primary" />}
                            label={<Typography >{item.name}&nbsp;{ item.number ? <>&nbsp;({item.number})</> :undefined  }</Typography>}
                        />)) : <Typography>No Item Found!</Typography>}

                    </FormGroup>
                </AccordionDetails>
            </Accordion>

        </Jh_Card>
    )
}
