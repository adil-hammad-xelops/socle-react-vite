import {Accordion as MuiAccordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultExpanded?: boolean;
}

const Accordion = ({title, children, defaultExpanded = false}: AccordionProps) => (
    <MuiAccordion defaultExpanded={defaultExpanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="subtitle1">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {children}
        </AccordionDetails>
    </MuiAccordion>
);

export default Accordion;

