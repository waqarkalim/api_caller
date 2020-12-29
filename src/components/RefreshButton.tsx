// import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

interface Props {
    toRefresh: boolean;
    setToRefresh: (toRefresh: boolean) => void;
}

function RefreshButton({toRefresh, setToRefresh} : Props) {
    // const [disabled, setDisabled] = useState(false);

    return (
        <Button onClick={() => {
            setToRefresh(!toRefresh);
        }}>
            <RefreshIcon/>
        </Button>
    )
}

export default RefreshButton;
