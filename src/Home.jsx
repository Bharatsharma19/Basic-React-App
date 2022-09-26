import React from 'react'
import { Grid, TextField, Button } from '@mui/material';

const Home = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
            <div style={{ width: "36%", border: "2px solid black", padding: 12, borderRadius: "32px" }}>
                <Grid container spacing={4}>
                    <Grid xs={12} item>
                        <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "underline" }}>Simple Interest Calculator</h2>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField fullWidth label="Enter Principal Amount" />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField fullWidth label="Enter Time(in years)" />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField fullWidth label="Enter Rate of Interest" />
                    </Grid>
                    <Grid xs={12} item style={{ paddingTop: "24px" }}>
                        <Button variant='outlined' color='primary' fullWidth onClick={handleSubmit}>Calculate</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home
