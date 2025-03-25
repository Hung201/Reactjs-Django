import { useParams } from 'react-router-dom'
import { books } from '../../data.json'
import './BookDetail1.css'

function BookDetail1() {
    const { id } = useParams()
    const book = books.find(item => item.id == id)
    return <>
        <div className="container mt-5">
            <div className="card border-0">
                <div className='m-2 '>
                    <div className='border border-5 border-info'>
                        <img
                        src={book.images[0].base_url}
                        className="img-fluid p-1"
                        alt="Bản Đồ"
                        />
                        <p className="free-gift text-center border border-warning rounded m-2">MIỄN PHÍ GÓI QUÀ🎁</p>
                    </div>
                    <div className="thumbnail-images">
                        <img src={book.images[0].base_url}
                        className="rounded img-fluid"
                        alt="Thumbnail 1" />
                        <img src={book.images[0].base_url}
                        className="rounded img-fluid" 
                        alt="Thumbnail 2" />
                        <img src={book.images[0].base_url}
                        className="rounded img-fluid"
                        alt="Thumbnail 3" />
                        <img src={book.images[0].base_url}
                        className="rounded img-fluid"
                        alt="Thumbnail 4" />
                    </div>
                </div>
                <div className="card-body">
                    <div className='border-bottom d-none d-lg-block'>
                        <p className="fw-bold h">Đặc điểm nổi bật</p>
                        <ul className="list-unstyled ">
                            <li className='d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-circle-fill text-primary m-1" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <p className='m-0'>Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</p>
                            </li>
                            <li className='d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill text-primary m-1" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <p className='m-0'>Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của trẻ em.</p>
                            </li>
                            <li className='d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check-circle-fill text-primary m-1" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <p className='m-0'>Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ của các quốc gia.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex'>
                        <p className='p-2'><span class="link-secondary">Xem thêm</span> Tóm tắt nội dung sách</p>
                        <div className='ms-auto p-2'>
                            <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M12 30 L24 16 12 2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default BookDetail1

