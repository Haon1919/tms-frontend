import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

type ExpansionPanelProps = {
    title: string,
    details: string
}

const summaryStyles = makeStyles(() =>
    createStyles({
        content: {
            justifyContent: 'center'
        }
    }),
);

const CustomExpansionPanel: React.FC<ExpansionPanelProps> = ({title, details}) => {
    const panelSummaryClass = summaryStyles();
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary classes={panelSummaryClass} expandIcon={<ArrowDropDownIcon />}>
                <h2>{title}</h2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {details}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default CustomExpansionPanel;