import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  HeartFilled,
  HeartOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import { Card, Col } from "antd";
import "./Card.css";

import { Modal } from "antd";
const { Meta } = Card;

function CardElem({ user, handleDelete, updateUser }) {
  const [loved, setLoved] = useState(false);
  const [inputText, setInputText] = useState({
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    website: user?.website,
  });
  /// modal releated functions

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    updateUser(user.id, inputText);

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOk();
  };

  // const formData = (data) => {
  // };

  return (
    <>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
        <Modal
          title={`Edit ${user.name}`}
          open={isModalOpen}
          onOk={() => handleOk()}
          onCancel={handleCancel}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                name="name"
                value={inputText.name}
                onChange={(e) =>
                  setInputText({ ...inputText, name: e.target.value })
                }
              />
            </div>
            <div className="flex">
              <label htmlFor="email">Email : </label>
              <input
                type="text"
                name="email"
                value={inputText.email}
                onChange={(e) =>
                  setInputText({ ...inputText, email: e.target.value })
                }
              />
            </div>
            <div className="flex">
              <label htmlFor="phone">Phone : </label>
              <input
                type="text"
                name="phone"
                value={inputText.phone}
                onChange={(e) =>
                  setInputText({ ...inputText, phone: e.target.value })
                }
              />
            </div>
            <div className="flex">
              <label htmlFor="website">Website : </label>
              <input
                type="text"
                name="website"
                value={inputText.website}
                onChange={(e) =>
                  setInputText({ ...inputText, website: e.target.value })
                }
              />
            </div>
          </form>
        </Modal>
        {/* modal finished */}
        <Card
          style={{ width: 300 }}
          cover={
            <img
              src={`https://avatars.dicebear.com/v2/avataaars/${user?.username}.svg?options[mood][]=happy`}
              alt={`${user?.username}`}
            />
          }
          actions={[
            <>
              {loved ? (
                <HeartFilled
                  onClick={() => setLoved(!loved)}
                  className="icon iconHeart"
                />
              ) : (
                <HeartOutlined
                  onClick={() => setLoved(!loved)}
                  className="icon iconHeart"
                />
              )}
            </>,
            <EditOutlined
              className="icon"
              key="edit"
              onClick={() => showModal()}
            />,
            <>
              <DeleteFilled
                className="icon"
                onClick={() => handleDelete(user)}
              />
            </>,
          ]}
        >
          <Meta
            title={user.name}
            description={
              <>
                <div className="desc-div">
                  <p>
                    <MailOutlined className="icon iconDesc" /> {user.email}
                  </p>
                  <p>
                    <PhoneOutlined className="icon iconDesc" /> {user.phone}
                  </p>
                  <p>
                    <GlobalOutlined className="icon iconDesc" /> {user.website}
                  </p>
                </div>
              </>
            }
          />
        </Card>
      </Col>
    </>
  );
}

export default CardElem;
