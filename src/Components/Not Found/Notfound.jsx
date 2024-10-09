import img_404 from '../../assets/imgs/not found/404 error.png';
export default function Notfound ()
{
    return (
        <>
            <section className="not-found">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-6">
                            <img src={ img_404 } alt="404 not found" className='w-100' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
