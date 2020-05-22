import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const style = {
    root: {
        color: "white",
        backgroundColor: (props) =>props["color"],
        '&:hover': {
            backgroundColor:(props) =>props["colorH"],
        },
    },
}



const ColorButton = withStyles(style)
    (({ classes, color,colorH,children,...other }) => {
        return <Button className={classes.root} {...other} >{children}</Button>
    })


export default ColorButton