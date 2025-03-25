import React from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../../data.json'
import Currency from './Currency'
import Rating from './Rating'

function BookDetail2() {
    const { id } = useParams()
    const book = books.find(item => item.id == id)
    // Phiên bản
    const EditionAttr = book.specifications[0].attributes.find(attr => attr.code === "edition");
    const Edition = EditionAttr ? EditionAttr.value : "";
    // Công ty phát hành
    const PublisherAttr = book.specifications[0].attributes.find(attr => attr.code === "publisher_vn");
    const Publisher = PublisherAttr ? PublisherAttr.value : "";
    // Ngày xuất bản
    const DateAttr = book.specifications[0].attributes.find(attr => attr.code === "publication_date");
    const Date = DateAttr ? DateAttr.value : "";
    // Kích thước
    const DimensionAttr = book.specifications[0].attributes.find(attr => attr.code === "dimensions");
    const Dimension = DimensionAttr ? DimensionAttr.value : "";
    // Dịch giả
    const DichAttr = book.specifications[0].attributes.find(attr => attr.code === "dich_gia");
    const Dich = DichAttr ? DichAttr.value : "";
    // Loại bìa
    const CoverAttr = book.specifications[0].attributes.find(attr => attr.code === "book_cover");
    const Cover = CoverAttr ? CoverAttr.value : "";
    // Số trang
    const NumberOfPagesAttr = book.specifications[0].attributes.find(attr => attr.code === "number_of_page");
    const NumberOfPages = NumberOfPagesAttr ? NumberOfPagesAttr.value : "";
    // Nhà xuất bản
    const ManufacturerAttr = book.specifications[0].attributes.find(attr => attr.code === "manufacturer");
    const Manufacturer = ManufacturerAttr ? ManufacturerAttr.value : "";

    const dp = Math.round(100-(((book.current_seller.price)/(book.original_price))*100))
    return <>
        <div className="container mt-5">
            <div className="card border-0 p-3">
                <div className="row">
                    <div className="col-12 mb-2">
                        <span className="badge text-bg-light text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            CHÍNH HÃNG
                        </span>
                        <span>
                        Tác giả: <a href="#">{book.authors ? book.authors.map(author => author.name).join(", ") : "N/A"}</a>
                        </span>
                    </div>
                    <div className="col-12">
                        <h6 className="card-title">{book.name}</h6>
                        <div className="d-flex align-items-center">
                            <ul className="card-subtitle list-unstyled d-flex" style={{fontSize:'14px'}}>
                                <li><span className="mr-2 fw-bold">{book.rating_average}</span></li>
                                <li className="ps-2">
                                    <Rating st={book.rating_average} />
                                </li>
                                <li><span className="px-2 border-end"> (928)</span></li>
                                <li className="ps-2">
                                    <span className='text-secondary fw-light'>
                                    {book.quantity_sold ? book.quantity_sold.text : ''}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-2">
                            <span className="card-text fw-medium fs-4">
                                <Currency val={book.current_seller.price} />
                            </span>
                            <span className="ml-2 fs-6 text-decoration-line-through text-secondary p-2">{book.original_price}₫</span>
                            <span className="ml-2 border rounded bg-light">-{dp}%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0 p-3  d-none d-md-block ">
                <p className="fw-bold">Thông tin chi tiết</p>
                <div className="row mb-2 border-bottom">
                <p className="col-6 fw-light">Phiên bản sách</p>
                <p className="col-6">{Edition}</p>
                </div>
                <div className="row mb-2 border-bottom">
                <p className="col-6 fw-light">Công ty phát hành</p>
                <p className="col-6">{Publisher}</p>
                </div>
                <div className="row mb-2 border-bottom">
                <p className="col-6 fw-light">Ngày xuất bản</p>
                <p className="col-6">{Date}</p>
                </div>
                <div className="row mb-2 border-bottom">
                <p className="col-6 fw-light">Kích thước</p>
                <p className="col-6">{Dimension}</p>
                </div>
                <div className="row mb-2 border-bottom">
                <p className="col-6 fw-light">Dịch Giả</p>
                <p className="col-6">{Dich}</p>
                </div>
                <div className="row mb-2 border-bottom">
                <p className="col-6 fw-light">Loại bìa</p>
                <p className="col-6">{Cover}</p>
                </div>
                <div className="row mb-2 border-bottom">
                <p className="col-6 fw-light">Số trang</p>
                <p className="col-6">{NumberOfPages}</p>
                </div>
                <div className="row mb-2">
                <p className="col-6 fw-light">Nhà xuất bản</p>
                <p className="col-6">{Manufacturer}</p>
                </div>
            </div>
        </div>
    </>
}

export default BookDetail2
