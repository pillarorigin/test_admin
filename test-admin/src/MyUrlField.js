//post 링크 스타일 페이지
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const styles ={
    link: {
        textDecoration: 'none'
    },
    icon: {
        width: '0.5em',
        paddingleft:2
    }
}

const MyUrlField = ({ record = {}, source, classes }) =>
    <a href={record[source]} className={classes.link}>
        {record[source]}
        <LaunchIcon className={classes.icon}></LaunchIcon>
    </a>;

export default withStyles(styles)(MyUrlField);