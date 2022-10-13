import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Story.style.scss'

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='story'>
        <h1 className='sectionTitle'>Story</h1>
        <div className='information'>
            <Accordion className='dropdown' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Iran
                </Typography>
                <img src="https://cdn-icons-png.flaticon.com/512/330/330549.png" alt="" />
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    I was born in Iran, and was there for nearly 9 years. <br />
                    Because I was from Afghanistan, I couldn't have a normal life like Others. <br />
                    I couldn't go to school for some Grades, So my father decided to leave the country and migrate to another.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='dropdown' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel2bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Afghanistan
                </Typography>
                <img src="https://cdn-icons-png.flaticon.com/512/330/330574.png" alt="" />
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    I was in Afghanistan for 1 month, and the situation of Afghanistan was so bad and wasn't a good place of staying.
                    After Afghanistan, we migrate to...
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='dropdown' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    India
                </Typography>
                <img src="https://cdn-icons-png.flaticon.com/512/206/206606.png" alt="" />
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    I stayed in India for 1 month. <br />
                    After India, we came to...
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='dropdown' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Indonesian
                    </Typography>
                    <img src="https://cdn-icons-png.flaticon.com/512/2151/2151329.png" alt="" />
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Before coming to Indonesia, we were in Singapore and waited for one day in airport and then came to Indonesia. <br />
                        In one of the city of Indonesia by the name of Jakarta, we've registered ourself, and after that we are called Refugee. <br />
                        It's been 8/9 years that I'm living in Indonesia with less process from the Community (UNHCR).
                    </Typography>
                    </AccordionDetails>
            </Accordion>
        </div>
        </div>
  );
}
