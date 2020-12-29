import { useState, useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';

// const API_ENDPOINT = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
const API_ENDPOINT = "https://api.adviceslip.com/advice";

interface Props {
    toRefresh: boolean;
}

function ImageGetter({toRefresh} : Props) {
    const [url, setUrl] = useState("");


    useEffect(() => {
        fetch(API_ENDPOINT, { 
            // mode: 'no-cors',
            cache: "no-cache",
            method: "GET",
            // headers: {
            //     'Cache-Control': 'no-cache, no-store, must-revalidate',
            //     'Pragma': 'no-cache',
            //     'Expires': 0
            // }
            headers: {
                // 'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/json',
                // 'Cache-Control': 'no-cache'
            }
        })
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(data => {
            // console.log(data);
            setUrl(data.slip.advice.toString('utf8'));
        })
        .catch(err => {
            console.error(err);
        })
    }, [toRefresh]);

    // console.log(url);

    return (
        <>
            <Paper>
                <Typography>
                    {url}
                </Typography>
            </Paper>
        </>
    )
}

export default ImageGetter;
