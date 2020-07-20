import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import "./App.css"

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* Title */}
                <Typography className="infoBox_title" color="testSecondary">{title}</Typography>

                {/* Number of cases */}
                <h2>{cases}</h2>

                {/* 1.2M total */}
                <Typography className="infoBox_total" color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
