import { FaReceipt } from "react-icons/fa"

const Learnstuff = () => {
   

    return (
        <div className="bibstuff">

            <div className="intro-bib">
                <h1>about the learn</h1>
                <p>here is a little about the learn</p>
            </div> 
            <div className='gridstuff'>
                <div className='bibgrid'>


                    <div className='bibtitle'>
                        <h3>Videos</h3>
                    </div>

                    <div className='bibbox'>
                        <div className="bib-full" id = 'box'>
                            <div className="bib-inner">
                                <FaReceipt className='icon'></FaReceipt>
                                <h3>neural networks</h3>
                            </div>

                            <button>
                            <p>see our NN list</p>
                            </button>
                        </div>
                    </div>


                    <div className='bibtitle'>
                        <h3>Docx</h3>
                    </div>

                    <div className='bibbox'>
                        <div className="bib-full" id = 'box'>
                            <div className="bib-inner">
                                <FaReceipt className='icon'></FaReceipt>
                                <h3>api && frameworks</h3>
                            </div>

                            <button>
                            <p>see our api</p>
                            </button>
                        </div>
                    </div>
                    
                                        
                </div>
            </div>
        </div>
    )
}


export default Learnstuff