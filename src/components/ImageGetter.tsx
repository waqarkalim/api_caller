import { useState, useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';

// const API_ENDPOINT = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
// const API_ENDPOINT = "https://api.adviceslip.com/advice";
const API_ENDPOINT = "https://type.fit/api/quotes";

interface Props {
    toRefresh: boolean;
    setToRefresh: (toRefresh: boolean) => void;
    setFetched: (fetched: boolean) => void;
}

function ImageGetter({toRefresh, setToRefresh, setFetched} : Props) {
    // const [url, setUrl] = useState("");
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [quotes, setQuotes] = useState([{author: "", text:""}]);

    useEffect(() => {
        fetch(API_ENDPOINT, { 
            cache: "no-cache",
            method: "GET",
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setQuotes(data);
            setFetched(true);
        })
        .catch(err => {
            console.error(err);
        })
    }, [setFetched])

    useEffect(() => {
        var selectedText = null;
        var selectedAuthor = null;
        var randomNumber;

        while ((selectedText == null) || (selectedAuthor == null)) {
            randomNumber = Math.floor(Math.random() * quotes.length)
            selectedText = quotes[randomNumber].text;
            selectedAuthor = quotes[randomNumber].author;
        }
        setText(selectedText);
        setAuthor(selectedAuthor);
    }, [quotes, toRefresh]);

    return (
        <>
            <Paper elevation={5} style={{padding: 20}}>
                {text !== "" && author !== "" ? (
                    <>
                        <Typography variant="h6">
                            {text}
                        </Typography>
                        <Typography variant="body2">
                            {`- ${author}`}
                        </Typography>
                    </> 
                ) : <></>}
            </Paper>
        </>
    )
}

export default ImageGetter;
