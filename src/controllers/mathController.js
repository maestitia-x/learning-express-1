
export function echoHander(req, res) {
    res.status(200).json({
        message:"Veri basariyla alindi",
        receivedData: req.body
    })
}

export function sumHandler (req, res){
    const {a, b} = req.body

    if ((a === undefined) || (b === undefined)) {
        return res.status(400).json({
            message:"A and B both needed"
        })
    }
    if ((typeof a !== 'number' || typeof b !== 'number')) {
        return res.status(400).json({
            message:"A and B needs to be number!"
        })
    }


    return res.status(200).json({
        sum:a + b
    })

}

