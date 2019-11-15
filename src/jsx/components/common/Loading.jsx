import React from 'react'
import { Card, CardImg } from 'react-bootstrap';
import logo from '../../../static/android-chrome-512x512.png';

function Loading() {
    return (
        <>
            <Card>
                <CardImg variant='top' src={logo} />
            </Card>
        </>
    )
}

export default Loading
