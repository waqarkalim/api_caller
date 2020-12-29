// import { useState, useEffect } from 'react';
import { Button, Fab } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

interface Props {
    fetched: boolean;
    toRefresh: boolean;
    setToRefresh: (toRefresh: boolean) => void;
    className: any
}

function RefreshButton({fetched, toRefresh, setToRefresh, className} : Props) {
    // const [disabled, setDisabled] = useState(false);

    return (
        <>
            {fetched ? (
            <>
                <Fab className={className} onClick={() => {
                    setToRefresh(!toRefresh);
                }}>
                    <RefreshIcon/>
                </Fab>
            </>) : (
            <> </>)}
        </>
    )
}

export default RefreshButton;
