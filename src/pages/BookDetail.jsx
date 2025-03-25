import Footer from '../components/Footer'
import BookDetail1 from '../components/BookDetail1'
import BookDetail2 from '../components/BookDetail2'
import BookDetail3 from '../components/BookDetail3'
import BookDetail4 from '../components/BookDetail4'
import Header from '../components/Header'

function BookDetail() {
    return <>
        <Header />
        <div className="container mx-10">
            <div className="row d-flex">
                <div className="col-lg-4">
                <BookDetail1 />
                </div>
                <div className="col-lg-5">
                <BookDetail2 />
                <BookDetail3 />
                </div>
                <div className="col-lg-3">
                <BookDetail4 />
                </div>
            </div>
            </div>
        <Footer/> 
    </>
}

export default BookDetail
