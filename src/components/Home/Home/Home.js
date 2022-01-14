import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TrendingTopics from '../TrendingTopics/TrendingTopics';
import './Home.css';

const Home = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <div>
            {/* Featured posts */}
            <div className='featured-post'>
                <Container>
                    <Row className='g-0'>
                        <Col md={6}>
                            {
                                datas.map(data => (
                                    <div className='featured-post-left-container'>
                                        <img className='img-fluid' src={data?.img} alt='' />
                                        <div>
                                            <p>{data?.ctg}</p>
                                            <h1>{data?.postTitle}</h1>
                                        </div>
                                    </div>
                                )).slice(0, 1)
                            }
                        </Col>
                        <Col md={6}>
                            <Row>
                                {
                                    datas?.map(data => (
                                        <Col md={6} >
                                            <div className='featured-post-right-container'>
                                                <img className='img-fluid' src={data?.img} alt='' />
                                                <p>{data?.ctg}</p>
                                                <h5>{data?.postTitle}</h5>
                                            </div>
                                        </Col>
                                    )).slice(1, 5)
                                }
                            </Row>
                        </Col>
                    </Row>
                    <TrendingTopics />
                </Container>
            </div>
        </div>
    );
};

export default Home;