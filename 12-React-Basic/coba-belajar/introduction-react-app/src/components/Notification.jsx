//contoh penggunaan switch-case

function Notification({ status }) {
    switch (status) {
        case 'warning':
            return(
                <p>Warning Bro !</p>
            )

        case 'succes':
            return(
                <p>Succes nih Bro !</p>
            )

        case 'error':
            return(
            <p>Error nih bro !</p>
            )
        default :
            return null
    }
}

export default Notification;