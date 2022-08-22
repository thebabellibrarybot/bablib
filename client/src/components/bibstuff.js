import '../styles/bibstyle.css';
import { FaReceipt } from 'react-icons/fa';

const Bibstuff = () => {

    return (
        <div className="bibstuff">

            <div className="intro-bib">
                <h1>about the bib</h1>
                <p>here is a little about the bib</p>
            </div> 
            <div className='gridstuff'>
                <div className='bibgrid'>


                    <div className='bibtitle'>
                        <h3>bib_bar.py</h3>
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
                        <h3>bibBar.js</h3>
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


                    <div className='bibtitle'>
                        <h3>data_bar.json</h3>
                    </div>

                    <div className='bibbox'>
                        <div className="bib-full" id = 'box'>
                            <div className="bib-inner">
                                <FaReceipt className='icon'></FaReceipt>
                                <h3>data_set</h3>
                            </div>

                            <button>
                            <p>see data</p>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Bibstuff;