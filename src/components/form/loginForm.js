import { Button, Card, Col, Form, Image, Input, Row } from "antd";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function LoginForm() 
{
    return (
        <>
            <Row
                style={{
                    minHeight: '100vh',
                    background: `url("/assets/login-form-img.jpg") center/cover no-repeat`
                }}
            >
                <Col
                    span={12}
                    style={{
                        padding: '10px'
                    }}
                >
                     <Card 
                        css={{ 
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                    }}>
                        <div style={{textAlign: 'center'}}>
                            <Image
                                width={100}
                                src="/logo192.png"
                            />
                        </div>
                        <br />
                        <Form
                            name="normal_login"
                            className="login-form"
                        >

                            <Form.Item
                                label="Email"
                                labelCol={{span: 24}}
                                name="email"
                                rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng điền email của bạn',
                                },
                                ]}
                                style={{marginBottom: '10px'}}
                            >
                                <Input type="email" placeholder="Vui lòng điền email của bạn" />
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu"
                                labelCol={{span: 24}}
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng điền mật khẩu của bạn',
                                    },
                                ]}
                                style={{marginBottom: '10px'}}
                            >
                                <Input
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item
                                style={{marginBottom: '10px'}}
                            >
                                <a href="" style={{float: 'right'}}>
                                    Quên mật khẩu ?
                                </a>
                            </Form.Item>

                            <Form.Item
                                style={{marginBottom: '10px'}}
                            >
                                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <span>Bạn chưa có tài khoản ? </span>
                                <Link
                                    to='/sign-up'
                                >
                                    Đăng ký tại đây
                                </Link>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col
                    span={12}
                >
                
                </Col>
            </Row>
        </>
    )
}

export default LoginForm

