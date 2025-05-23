import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Form, InputGroup, Badge, Pagination, Image } from 'react-bootstrap';
import { FaSearch, FaEdit, FaTrash, FaPlus, FaEye } from 'react-icons/fa';

const ArticleList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Data statis untuk daftar artikel
  const articles = [
    { 
      id: 1, 
      title: 'Tips Menjaga Kesehatan Jantung', 
      thumbnail: 'https://via.placeholder.com/50', 
      category: 'Kesehatan Jantung', 
      author: 'Dr. Ahmad Fauzi', 
      published: '12 Mei 2025',
      status: 'Published'
    },
    { 
      id: 2, 
      title: 'Pentingnya Vaksinasi untuk Anak', 
      thumbnail: 'https://via.placeholder.com/50', 
      category: 'Kesehatan Anak', 
      author: 'Dr. Budi Santoso', 
      published: '10 Mei 2025',
      status: 'Published'
    },
    { 
      id: 3, 
      title: 'Makanan untuk Meningkatkan Sistem Imun', 
      thumbnail: 'https://via.placeholder.com/50', 
      category: 'Nutrisi', 
      author: 'Cindy Permata', 
      published: '08 Mei 2025',
      status: 'Draft'
    },
    { 
      id: 4, 
      title: 'Mengenal Diabetes Tipe 2', 
      thumbnail: 'https://via.placeholder.com/50', 
      category: 'Penyakit Kronis', 
      author: 'Dr. Doni Pratama', 
      published: '05 Mei 2025',
      status: 'Published'
    },
    { 
      id: 5, 
      title: 'Manfaat Olahraga untuk Kesehatan Mental', 
      thumbnail: 'https://via.placeholder.com/50', 
      category: 'Kesehatan Mental', 
      author: 'Eva Sari', 
      published: '03 Mei 2025',
      status: 'Review'
    },
  ];

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col>
          <h2 className="mb-3">Artikel Kesehatan</h2>
          <Card>
            <Card.Body>
              <Row className="mb-3">
                <Col md={5}>
                  <InputGroup>
                    <Form.Control
                      placeholder="Cari artikel..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="outline-secondary">
                      <FaSearch />
                    </Button>
                  </InputGroup>
                </Col>
                <Col md={3}>
                  <Form.Select>
                    <option value="">Filter Kategori</option>
                    <option value="jantung">Kesehatan Jantung</option>
                    <option value="anak">Kesehatan Anak</option>
                    <option value="nutrisi">Nutrisi</option>
                    <option value="kronis">Penyakit Kronis</option>
                    <option value="mental">Kesehatan Mental</option>
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Form.Select>
                    <option value="">Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="review">Review</option>
                  </Form.Select>
                </Col>
                <Col md={2} className="text-end">
                  <Button variant="primary" href="/dashboard/health-info/create">
                    <FaPlus className="me-2" /> Tambah Artikel
                  </Button>
                </Col>
              </Row>
              
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Thumbnail</th>
                    <th>Judul</th>
                    <th>Kategori</th>
                    <th>Penulis</th>
                    <th>Tanggal Publikasi</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map(article => (
                    <tr key={article.id}>
                      <td>{article.id}</td>
                      <td>
                        <Image src={article.thumbnail} rounded width={50} height={50} />
                      </td>
                      <td>{article.title}</td>
                      <td>{article.category}</td>
                      <td>{article.author}</td>
                      <td>{article.published}</td>
                      <td>
                        <Badge bg={
                          article.status === 'Published' ? 'success' : 
                          article.status === 'Draft' ? 'secondary' : 'warning'
                        }>
                          {article.status}
                        </Badge>
                      </td>
                      <td>
                        <Button variant="info" size="sm" className="me-1">
                          <FaEye />
                        </Button>
                        <Button variant="warning" size="sm" className="me-1">
                          <FaEdit />
                        </Button>
                        <Button variant="danger" size="sm">
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>Menampilkan 1-5 dari 5 entries</div>
                <Pagination>
                  <Pagination.Prev disabled />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Next disabled />
                </Pagination>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleList;