import { useParams } from 'react-router-dom'
import { books } from '../../data.json'
import { auto } from '@popperjs/core'

function BookDetail3() {
    const { id } = useParams()
    const book = books.find(item => item.id == id)
    return <>
        <div className="container mt-3 d-none d-lg-block">
            <div className="card border-0 p-3">
                <p className="fw-bold h">Mô tả sản phẩm</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                <img 
                    src={book.images[0].thumbnail_url} 
                    className="img-fluid " 
                    alt="Bản Đồ" 
                    style={{ transform:'scale(1.04)', 
                            
                        
                     }} 
                />
                </div>
                <div dangerouslySetInnerHTML={{ __html: book.description }} />
            </div>
        </div>
    </>
};

export default BookDetail3
