import React from 'react'

export const Test = ({
    str, num, bool
}:{str: string, num: number, bool: boolean}): React.ReactElement => {
    return <div>
        <div>
            String: <div>{str}</div>
        </div>
        <div>
            Number: <div>{num}</div>
        </div>
        <div>
            Boolean: <div>{bool}</div>
        </div>
    </div>
}