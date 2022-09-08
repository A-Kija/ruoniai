function Messages() {

    return (
        <div className="msg-bin">
            <div className="toast show" role="alert">
                <div className="toast-header">
                    <strong className="me-auto">Movies</strong>
                    <button type="button" className="btn-close"></button>
                </div>
                <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>
    )
}

export default Messages;