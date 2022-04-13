import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! PLease complete steps below:</p>
                        <ol>
                            <li>Confirm email</li>
                            <li>Complete profile</li>
                            <li>Subscribe!</li>
                        </ol>
                    </div>
                ) : (
                    <p>Please sign in</p>
                )
            }
        </div>
    )
}

export default UserMessage