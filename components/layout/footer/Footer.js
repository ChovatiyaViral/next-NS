import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import classnames from "classnames";
import Link from "next/link";
import React from "react";

import Section from "../content/section";
import axios from "axios";
import { toast } from "react-toastify";

const contactDetails = {
  email: "",
  name: "",
  dob: "",
  message: "",
}

export default function Footer(props) {

  const [footerData, setFooterData] = React.useState();
  const [contactData, setContactData] = React.useState(contactDetails);

  var emailPattern = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

  React.useEffect(() => {
    getFooterData()
  }, [])

  const getFooterData = async () => {
    const response = await axios({
      method: "GET",
      url: "https://isg-cms.stageoakum.in/master-template"
    }).catch(err => {
      console.log("err", err);
    });
    if (response && response.status === 200) {
      setFooterData(response?.data);
    } else {
      console.log("err", response?.error);
    }
  }

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitContact = async (data) => {
    if (data) {
      if (data.email === "") {
        toast.error('Email can not be empty');
      } else if (!emailPattern.test(data.email)) {
        toast.error('Invalid Email Address');
      }

      if (data.name === "") {
        toast.error('Name can not be empty');
      }

      if (data.dob === "") {
        toast.error('Date can not be empty');
      }

      if (data.message === "") {
        toast.error('Message can not be empty');
      }

      if (data.email !== "" && data.name !== "" && data.dob !== "" && data.message !== "") {
        const response = await axios({
          method: "POST",
          url: "https://isg-cms.stageoakum.in/contacts",
          data: data
        }).catch(err => {
          console.log("err", err);
        });
        if (response && response.status === 200) {
          toast.success('Contact Details Submitted successfully')
        } else {
          console.log("err", response?.error);
        }
      }
    }
  }

  const todayDate = (new Date().getFullYear() < 10 ? `0${new Date().getFullYear()}` : new Date().getFullYear()) + "-" + (new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : new Date().getMonth()) + "-" + (new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate())

  return (
    <footer id="footer">
      <div
        className={classnames(
          "ftBG",
          "flex flex-col items-center justify-evenly"
        )}
      >
        <h3 className="ftitle">Contact Us</h3>
        <p className="ftxt">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
          tempor incididunt
        </p>
        <div className="finputdiv">
          <input
            type="email"
            className="inputStyle"
            id="outlined-basic"
            onChange={handleChange}
            value={contactData.email}
            name="email"
            placeholder="Enter a valid email address"
          />
          <input
            type="text"
            className="inputStyle"
            id="outlined-basic"
            name="name"
            value={contactData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <input
            type="date"
            className="inputStyle"
            name="dob"
            id="outlined-basic"
            max={todayDate}
            value={contactData.dob}
            onChange={handleChange}
            style={{ color: contactData.dob !== "" ? "#FFFFFF" : "#6A83DB" }}
            placeholder="mm/dd/yyyy"
          />
        </div>
        <textarea
          className="inputStyle1"
          id="outlined-basic"
          onChange={handleChange}
          name="message"
          value={contactData.message}
          placeholder="Enter your message"
        />
        <button
          className="btnOutlined2"
          style={{
            background: "transparent",
            borderRadius: 30,
            textTransform: "uppercase",
          }}
          onClick={() => handleSubmitContact(contactData)}
          type="button"
        >
          Submit
        </button>
      </div>

      <Section className="footer_section">
        <div className="footer-section">
          <div
            className="flex items-center justify-between footer-menu"
            style={{ paddingTop: 47, paddingBottom: 15 }}
          >
            <div className="flex items-center justify-center">
              <img src={footerData?.footer_logo?.url} width={236} height={51} alt="footer_logo" />
            </div>

            <div className="flex items-start justify-between w-1/5 footer-menu2">
              <div>
                {
                  footerData && footerData.footer_menu && footerData.footer_menu.length > 0 ?
                    footerData.footer_menu.slice(0, 3).map((item, index) => {
                      return (
                        <p className="ftTxt" key={index}>
                          <Link href={item?.link}>
                            <a className={"link"}>{item?.title}</a>
                          </Link>
                        </p>
                      )
                    })
                    : null
                }
              </div>
              <div>
                {
                  footerData && footerData.footer_menu && footerData.footer_menu.length > 0 ?
                    footerData.footer_menu.slice(3).map((item, index) => {
                      return (
                        <p className="ftTxt" key={index}>
                          <Link href={item?.link}>
                            <a className={"link"}>{item?.title}</a>
                          </Link>
                        </p>
                      )
                    })
                    : null
                }
              </div>
            </div>

            <div className="flex flex-col items-center justify-evenly">
              <div className="flex flex-row items-center justify-center">
                {
                  footerData?.footer_social_media_links && footerData.footer_social_media_links?.length > 0 ?
                    footerData?.footer_social_media_links.map((item, index) => {
                      return (
                        <a href={item?.link} target="block">
                          <div className="footer-icon-wrapper iconStyle icon cursor-pointer w-9 h-9 flex items-center justify-center" key={index} >
                            <img src={item?.image?.url} alt="social media icon" width={item?.image?.name === "facebook.png" ? 10 : 20} height={20} className={classnames(" ")} />
                          </div>
                        </a>
                      )
                    })
                    : null
                }
              </div>
              <p className="ftitle1">{footerData?.footer_hashtag}</p>
            </div>
          </div>

          <hr className="horizontalLine2" />

          <p className="ftduncan">
            {footerData?.copyright}
          </p>
        </div>
      </Section>
    </footer>
  );
}
