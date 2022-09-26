import { React, useState } from 'react'
import { Grid, TextField, Button } from '@mui/material';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';

const Home = () => {

    const [principal, setprincipalAmount] = useState();
    const [rate, setRate] = useState();
    const [time, setTime] = useState();
    const [simpleInterest, setsimpleInterest] = useState();
    const [amount, setAmount] = useState();

    function handleRateChange(event) {
        setRate(event.target.value)
    }

    function handleSubmit() {
        var si = (principal * rate * time) / 100
        var amt = parseFloat(si) + parseFloat(principal)

        setsimpleInterest(si)
        setAmount(amt)
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
            <div style={{ width: "36%", border: "2px solid black", padding: 12, borderRadius: "32px" }}>
                <Grid container spacing={4}>
                    <Grid xs={12} item>
                        <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "underline" }}>Simple Interest Calculator</h2>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField onChange={(event) => setprincipalAmount(event.target.value)} fullWidth label="Enter Principal Amount" />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField onChange={(event) => setTime(event.target.value)} fullWidth label="Enter Time(in years)" />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField onChange={handleRateChange} fullWidth label="Enter Rate of Interest" />
                    </Grid>
                    <Grid xs={12} item style={{ paddingTop: "24px" }}>
                        <Button variant='outlined' color='primary' fullWidth onClick={handleSubmit}>Calculate</Button>
                    </Grid>
                    <Grid xs={12} item style={{ paddingTop: "24px" }}>
                        <h2>Simple Interest is <CurrencyRupeeTwoToneIcon /> {simpleInterest}</h2>
                        <h2>Amount after interest is <CurrencyRupeeTwoToneIcon /> {amount}</h2>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home
