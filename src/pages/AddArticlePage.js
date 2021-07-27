import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { addArticle }  from '../api/ArticlesAPI';

const AddArticlePage = () => {

  const [SubmitSuccess, setSubmitSuccess] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault();
    let articleObject = {
        title: e.target.title.value,
        byline: e.target.byline.value,
        abstract: e.target.abstract.value
    }
    addArticle(articleObject)
    .then( json => 
        setSubmitSuccess({SubmitSuccess:true}))


    }

  return (
    <div>
        { !SubmitSuccess ?

            <Form className="m-3" onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Byline</Form.Label>
                <Form.Control type="text" name="byline" placeholder="Byline" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Abstract</Form.Label>
                <Form.Control type="text" name="abstract" placeholder="Abstract" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        :
        <Alert> Submit Success</Alert>
        }
      
    </div>
  );
};

export default AddArticlePage;