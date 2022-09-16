import React from 'react'
import { Layout } from '../../components/layouts';
import { Card, Grid } from '@mui/material';

const EntryPage = () => {
    return (
        <Layout title='....'>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }} >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader title='' />
                    </Card>
                </Grid>
            </Grid>

        </Layout>
    )
}


export default EntryPage;
