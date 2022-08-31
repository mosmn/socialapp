import React, { useState ,useEffect } from 'react';
//import all components im going to use
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
//import hook form react-redux
import { useDispatch } from 'react-redux';

//creat an action
import { getPosts } from './actions/posts';
//import the components we just exported
import Posts from './components/posts/posts';
import Form from './components/form/form';

//import image
import memories from './images/memories.png';

//import styles
import useStyles from './styles';


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        // container to center everything
        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>GOLD</Typography>
                <img className={classes.image} src={memories} alt='memories'  height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-between' alignItems='streched' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId= {setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId= {setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
