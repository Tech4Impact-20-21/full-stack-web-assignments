function Listname ({data}){
    if(!data){
        return (
            <p>Tidak Ada Data</p>
        )
    }else{
        return(
            <ul>
                {data.map(item => (
                    <li>{item.firstname}</li>
                ))}
            </ul>
        )
    }

    // ternary
    // return !data ? <p>Tidak Ada Data</p> : <p>Ada Data</p>
}

export default Listname;