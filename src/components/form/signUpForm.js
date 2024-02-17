import { Button, Card, Col, Form, Image, Input, Row, notification } from "antd";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { useState } from "react";

function SignUpForm() {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmitForm = async (values) => {
        console.log('values', values);
        try {
            setLoading(true);
            const response = await api.post('auth/sign-up', values);
            if (response.status === 200) {
                notification.success({
                    message: 'Thông báo',
                    duration: 3,
                    placement: 'topRight',
                    description: 'Bạn đã đăng ký tài khoản thành công.'
                });
                setLoading(false);
                navigate('/login');
            }
        } catch (error) {
            notification.error({
                message: 'Thông báo',
                duration: 3,
                placement: 'Đã có lỗi trong quá trình đăng ký tài khoản',
            });
            setLoading(false);
        }
    }

    const onVisibleChange = () => {
        setVisible(prevState => {
            return !prevState;
        });
    }

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
                        <div style={{ textAlign: 'center' }}>
                            <Image
                                width={100}
                                src="/logo192.png"
                            />
                        </div>
                        <br />
                        <Form
                            name="normal_login"
                            className="login-form"
                            onFinish={handleSubmitForm}
                        >
                            <Form.Item
                                label="Họ và tên"
                                labelCol={{ span: 24 }}
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng điền họ và tên của bạn!',
                                    },
                                ]}
                                style={{ marginBottom: '10px' }}
                            >
                                <Input type="text" />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                labelCol={{ span: 24 }}
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng điền email của bạn!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'Email không hợp lệ!'
                                    }
                                ]}
                                style={{ marginBottom: '10px' }}
                            >
                                <Input type="email" />
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu"
                                labelCol={{ span: 24 }}
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng điền mật khẩu của bạn!',
                                    },
                                    {
                                        min: 8,
                                        message: 'Mật khẩu phải chứa ít nhất 8 kí tự!'
                                    },
                                   
                                ]}
                                style={{ marginBottom: '10px' }}
                            >
                                <Input.Password
                                    type="password"
                                    visibilityToggle={onVisibleChange}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Nhập lại mật khẩu"
                                labelCol={{ span: 24 }}
                                name="confirm_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng điền mật khẩu của bạn',
                                    },
                                    {
                                        min: 8,
                                        message: 'Mật khẩu phải chứa ít nhất 8 kí tự!'
                                    },
                                   
                                ]}
                            >
                                 <Input.Password
                                    type="password"
                                    visibilityToggle={onVisibleChange}
                                />
                            </Form.Item>

                            <Form.Item
                                style={{ marginBottom: '10px' }}
                            >
                                <Button 
                                    type="primary" 
                                    style={{ width: '100%' }}
                                    loading={loading}
                                    htmlType="submit"
                                >
                                    Đăng ký
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <span>Bạn đã có tài khoản ? </span>
                                <Link
                                    to='/login'
                                >
                                    Đăng nhập tại đây
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

export default SignUpForm

