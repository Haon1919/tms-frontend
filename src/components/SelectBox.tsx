import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';

type SelectBoxProps = {
    handleItemSelect: (event: any) => void,
    formatInput?: (input: any) => any,
    currentValue: string | number,
    items: any[]
}

const selectBoxStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
        },
        
        select: {
            paddingRight: 0
        }
    }),
);

const SelectBox: React.FC<SelectBoxProps> = ({
    handleItemSelect,
    formatInput,
    currentValue,
    items
}) => {
    const selectBoxClass = selectBoxStyles();
    return (
        <Select
            value={currentValue}
            onChange={handleItemSelect}
            classes={selectBoxClass}
        >
            {
                items.map((item, i) => (
                    <MenuItem key={i} value={formatInput !== undefined ? i : item}>
                        {
                            formatInput !== undefined ?
                                formatInput(item) :
                                item
                        }
                    </MenuItem>
                ))
            }
        </Select>
    );
}

export default SelectBox;
