import React from 'react'
import { Container, CardBody, CardHeader , Card, CardFooter, Button, Row, Col } from 'react-bootstrap'
import { my_images } from './assets/asset'

const Bootstrap = () => {
  return (
    <>
        {/* <div className='container'>
            <h1 className='text-danger'>Hello</h1>
            <p className='fw-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae corrupti eius hic consequuntur saepe illo laudantium harum, soluta quidem quibusdam doloribus velit, ad quos ipsam numquam minima ducimus ipsa perferendis molestiae beatae aut? Corrupti repudiandae molestias minima quod ullam saepe, accusamus quam illo delectus nesciunt consequuntur nemo numquam dolorem?</p>
        </div>

        <Container>
            <h1 className='text-danger'>Hello</h1>
            <p className='fw-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam iure mollitia consectetur quos velit quisquam reprehenderit neque voluptatem nulla quas veritatis sequi omnis soluta magnam vel alias voluptatum excepturi animi, ipsam itaque voluptas! Optio fuga culpa sapiente ex reiciendis. Velit nulla quisquam recusandae beatae, reiciendis vero. Omnis minus atque sed.</p>
        </Container>

        <Container-fluid>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias quia blanditiis quas exercitationem ea dicta repudiandae nisi? Numquam minus tempore, excepturi provident molestiae quasi aliquam, sunt laborum autem corrupti itaque, commodi pariatur ipsa nihil voluptate aut sit maxime quos quae soluta repudiandae vitae quibusdam! Enim, quod exercitationem. Facilis est obcaecati fugit fuga rem, amet vel similique, adipisci dolores impedit aliquid eligendi tempore. Delectus voluptas quasi totam dicta id accusantium eum necessitatibus, nisi recusandae tempora, magni enim dignissimos perspiciatis in culpa quibusdam aut porro modi? Totam, placeat pariatur laborum, perspiciatis vitae eum iusto optio, deserunt quo impedit animi. Minus sequi ducimus labore iure accusamus deleniti, eos eum unde, repellat expedita maxime quas necessitatibus. Labore exercitationem ullam, repellat quibusdam saepe voluptas voluptatem distinctio ab dolore id et ad unde enim tempore dolorem neque veniam sapiente perspiciatis alias vitae placeat quos nisi? Quas, similique necessitatibus. Aliquam eos suscipit rem sed, hic cupiditate voluptatibus officia dolorem consequuntur, quaerat repellendus repudiandae totam, sequi ipsa? Maiores atque sapiente similique officia, architecto ut voluptate? Maxime voluptas assumenda ad ratione? Maiores similique quidem fugit corporis pariatur alias blanditiis molestias rerum et! Consectetur tempore aliquam consequuntur at, perferendis saepe veritatis corporis voluptatibus omnis dignissimos sit commodi ducimus cum nulla? Excepturi, obcaecati nihil voluptas earum velit mollitia consectetur, nostrum in assumenda doloremque fugiat atque, repudiandae quidem dolor illum! Quibusdam deserunt iure, nostrum id quo reiciendis deleniti, fuga repudiandae veniam quasi, corporis dolore quaerat tenetur laboriosam sapiente adipisci accusamus excepturi vel officia modi dignissimos! Quidem, impedit possimus. Incidunt libero vitae illo. Quas obcaecati voluptates adipisci quidem quo, voluptas doloremque molestiae odio vitae debitis praesentium distinctio reiciendis error exercitationem quod ex, corrupti totam quis laborum dicta consectetur sequi quasi facere! Aperiam eos, repellat quaerat sint architecto magnam similique officiis debitis vel, itaque totam modi? Eligendi beatae dolores hic. Beatae recusandae itaque animi iusto ipsa labore aut provident nulla! Explicabo laboriosam itaque nemo sed eveniet, incidunt a assumenda quod sapiente esse necessitatibus doloremque dolor ex soluta, excepturi inventore animi ipsam omnis. Ea perspiciatis enim aut dignissimos necessitatibus eaque magnam, dolore tenetur, ut soluta porro? Distinctio, aspernatur. Nulla tempore possimus minus maxime voluptatem aut minima repellendus aperiam eos in quia ea suscipit fugit obcaecati, veritatis amet quibusdam iusto hic excepturi? Velit placeat natus ad quis, alias ex id sed exercitationem eius architecto ducimus delectus, cum vitae perspiciatis! Odit laudantium sit reprehenderit omnis commodi maiores suscipit, recusandae quisquam, dolor amet adipisci ducimus enim sunt hic sed? Fugiat ex amet consequatur corporis vitae veritatis nostrum quos in dolores aliquid, similique incidunt ut sit quo atque veniam cupiditate. Similique pariatur perferendis nemo quam error assumenda cum dolorem, perspiciatis nihil magnam deserunt nisi nesciunt laboriosam provident explicabo reiciendis dignissimos voluptates cupiditate maxime? Error suscipit esse quaerat sit earum dolorum commodi doloremque est, quidem ea vitae saepe explicabo, molestias quas. Maxime illum totam aspernatur officia, corporis impedit dolorum amet accusantium quos consequatur quo officiis eos explicabo magnam labore sunt provident veritatis praesentium vitae corrupti voluptatibus alias laudantium animi. Cupiditate ab cum doloribus exercitationem velit recusandae ex voluptate veritatis.</p>
        </Container-fluid> */}

        <div className='container'>
            <div className="row">
                <div className="col-lg-3">
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Title</h1>
                        </div>
                        <div className='card-body'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel earum repellat aspernatur dignissimos ducimus ad tempore maxime ut veniam accusamus!</p>
                        </div>
                        <div className='card-footer'>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Title</h1>
                        </div>
                        <div className='card-body'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel earum repellat aspernatur dignissimos ducimus ad tempore maxime ut veniam accusamus!</p>
                        </div>
                        <div className='card-footer'>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Title</h1>
                        </div>
                        <div className='card-body'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel earum repellat aspernatur dignissimos ducimus ad tempore maxime ut veniam accusamus!</p>
                        </div>
                        <div className='card-footer'>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Title</h1>
                        </div>
                        <div className='card-body'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel earum repellat aspernatur dignissimos ducimus ad tempore maxime ut veniam accusamus!</p>
                        </div>
                        <div className='card-footer'>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Container>
            <Row>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_images.product_img_1} alt="" />
                        <CardBody>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, omnis cum doloremque animi temporibus sed? Ea ipsa aut amet, laboriosam obcaecati pariatur voluptates magnam aspernatur, similique ad reiciendis? Harum, sit.</p>
                        </CardBody>
                        <CardFooter>
                            <div className='text-end'>
                                <Button className='btn btn-primary'>Click</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <CardHeader>
                            <h1>Title</h1>
                        </CardHeader>
                        <CardBody>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, omnis cum doloremque animi temporibus sed? Ea ipsa aut amet, laboriosam obcaecati pariatur voluptates magnam aspernatur, similique ad reiciendis? Harum, sit.</p>
                        </CardBody>
                        <CardFooter>
                            <div className='text-end'>
                                <Button className='btn btn-primary'>Click</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <CardHeader>
                            <h1>Title</h1>
                        </CardHeader>
                        <CardBody>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, omnis cum doloremque animi temporibus sed? Ea ipsa aut amet, laboriosam obcaecati pariatur voluptates magnam aspernatur, similique ad reiciendis? Harum, sit.</p>
                        </CardBody>
                        <CardFooter>
                            <div className='text-end'>
                                <Button className='btn btn-primary'>Click</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <CardHeader>
                            <h1>Title</h1>
                        </CardHeader>
                        <CardBody>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, omnis cum doloremque animi temporibus sed? Ea ipsa aut amet, laboriosam obcaecati pariatur voluptates magnam aspernatur, similique ad reiciendis? Harum, sit.</p>
                        </CardBody>
                        <CardFooter>
                            <div className='text-end'>
                                <Button className='btn btn-primary'>Click</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
      
    </>
)
}

export default Bootstrap