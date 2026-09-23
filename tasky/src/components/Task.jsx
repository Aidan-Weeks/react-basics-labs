    import Box from '@mui/material/Box';
    import Button from '@mui/material/Button';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardHeader from '@mui/material/CardHeader';
    import Grid from '@mui/material/Grid';
    import Typography from '@mui/material/Typography';
    import DeleteIcon from '@mui/icons-material/Delete';
    import Chip from '@mui/material/Chip';



    const Task = (props) => {
        
        return (
        <Grid
    key={props.id}
     size={{ xs: 12, sm: 6, md: 4 }}
    >
    <Card
        sx={{
        backgroundColor: props.done ? 'lightgrey' : 'lightblue',
        padding: '20px'
        }}
    >
        <CardHeader
        title={props.title}
        sx={{
            backgroundColor: 'white',
        borderRadius: 2,
        padding: '20px',
        textAlign: 'center',
        fontWeight: 'bold'
        }}
        />

        <CardContent>
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            mb: 2,
            padding: '20px'
            }}
        >
            <Typography
            component="p"
            variant="subtitle2"
            color="text.primary"
            >
            Due: {props.deadline}
            </Typography>
        </Box>

        <Typography
            component="p"
            variant="subtitle1"
            align="center"
            sx={{ fontStyle: 'italic' }}
        >
            {props.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Chip
        label={`Priority: ${props.priority}`}
        color={
            props.priority === 'high'
            ? 'error'
            : props.priority === 'medium'
            ? 'warning'
            : 'success'
        }
       
        />
    </Box>
        </CardContent>

        <CardActions
        sx={{
            justifyContent: 'space-between',
            padding: '20px'
        }}
        >
        <Button
            variant="contained"
            size="small"
            color="success"
            onClick={props.markDone}
        >
            Done
        </Button>

        <Button
            variant="contained"
            size="small"
            color="error"
            onClick={props.deleteTask}
        ><DeleteIcon />


            Delete
        </Button>
        </CardActions>
    </Card>
    </Grid>






        )
    }

    export default Task;