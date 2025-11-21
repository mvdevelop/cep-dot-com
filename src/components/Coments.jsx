
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function Coments() {

  const [comments, setComments] = useState(() => {
      const saved = localStorage.getItem("elo_comments");
      return saved ? JSON.parse(saved) : [];
    });
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    localStorage.setItem("elo_comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment.trim(),
      date: new Date().toLocaleString("pt-BR"),
    };
    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <>
      {/* ===== Seção de Comentários ===== */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Fórum dos Usuários 💬</h2>

          {/* Formulário */}
          <Form onSubmit={handleAddComment} className="mb-4">
            <Row className="justify-content-center">
              <Col md={8}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Compartilhe sua opinião sobre sua experiência com a CEP..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </Col>
              <Col md="auto" className="mt-3 mt-md-0">
                <Button type="submit" variant="dark">
                  Publicar
                </Button>
              </Col>
            </Row>
          </Form>

          {/* Lista de comentários */}
          <Row className="justify-content-center">
            <Col md={10}>
              {comments.length === 0 ? (
                <p className="text-center text-secondary">
                  Nenhum comentário ainda. Seja o primeiro a participar!
                </p>
              ) : (
                comments.map((c) => (
                  <Card key={c.id} className="mb-3 shadow-sm border-0">
                    <Card.Body>
                      <Card.Text>{c.text}</Card.Text>
                      <small className="text-secondary">{c.date}</small>
                    </Card.Body>
                  </Card>
                ))
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
