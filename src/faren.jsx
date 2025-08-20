function Farenheit({celsius})
{
    let faren=celsius*9/5+32;
    return(
        <><h2 className="h2-tag">Temperature : {faren} °F</h2>
        {console.log("print")}
        </> 
    );
}

export default Farenheit;