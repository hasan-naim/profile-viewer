import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HeartFilled,
  HeartOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import { Card, Col } from "antd";
import "./Card.css";
import axios, { Axios } from "axios";
import Parser from "html-react-parser";

const { Meta } = Card;

function CardElem({ user, handleDelete }) {
  const [loved, setLoved] = useState(false);
  const [userImg, setUserImg] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://avatars.dicebear.com/v2/avataaars/${user?.username}.svg?options[mood][]=happy
`
      )
      .then((res) => {
        console.log("img", typeof res.data);
        setUserImg(res.data);
      });
  }, [user]);

  console.log("user", user);
  return (
    <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
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
          <EditOutlined className="icon" key="edit" />,
          <>
            <DeleteFilled className="icon" onClick={() => handleDelete(user)} />
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
  );
}

export default CardElem;
